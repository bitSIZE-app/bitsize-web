import { useSession } from 'next-auth/react';
import type { User } from '@prisma/client';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Separator } from '@components/Separator';
import { styled } from '@styles/bitTheme';
import { formatCompactNumber } from '@utils/numbers';
import { capitalizeWords } from '@utils/strings';
import { trpc } from '@utils/trpc';

import { HoverCard } from './HoverCard';

const HoverCardContent = styled('div', {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    '.avatar-card-header': {
        alignItems: 'center',
        display: 'flex',

        '.avatar-card-name': {
            marginLeft: '$1'
        },
        '.avatar-card-fullname': {
            color: '$mauve8',
        }
    },

    '.avatar-card-bio': {
        color: '$mauve12'
    },

    '.avatar-card-stats': {
        display: 'flex',

        '.avatar-card-stat': {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            width: '50%',

            '&-header': {
                color: '$mauve8',
                fontSize: '$s',
                marginBottom: '$1',
            },
            '&-amount': {
                fontWeight: 600
            },
            '&-suffix': {
                marginLeft: 1
            }
        }
    },

    '.avatar-card-actions': {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',

        'button': {
            width: '43%'
        }
    }
});

type TProps = {
    triggerClass?: string;
    user: User
}

export function AvatarHoverCard({triggerClass = '', user}: TProps) {
    const { data: session } = useSession();
    const itsMe = session.user?.id === user.id;

    const followed = trpc.users.getFollowStatus.useQuery({ userId: user?.id });
    const following = trpc.users.getFollowing.useQuery({ userId: user?.id });
    const followers = trpc.users.getFollowers.useQuery({ userId: user?.id });

    const formattedFollowers = formatCompactNumber(followers.data?.length || 0);
    const formattedFollowing = formatCompactNumber(following.data?.length || 0);

    return (
        <HoverCard trigger={<Avatar className={triggerClass} imgUrl={user.image}/>}>
            <HoverCardContent>
                <div className="avatar-card-header">
                    <Avatar className="avatar-card-avatar" imgUrl={user.image}/>
                    <div className="avatar-card-name">
                        <div className="avatar-card-username">
                            @{user.username}
                        </div>
                        <div className="avatar-card-fullname">
                            {capitalizeWords(user.name)}
                        </div>
                    </div>
                </div>
                <Separator variant="secondary"/>
                <div className="avatar-card-bio">
                    {user.bio}
                </div>
                <Separator variant="secondary"/>
                <div className="avatar-card-stats">
                    <div className="avatar-card-stat">
                        <span className="avatar-card-stat-header">Following</span>
                        <div className="avatar-card-stat-amount">
                            {formattedFollowing.amount} {formattedFollowing.suffix && <span className="avatar-card-stat-suffix">{formattedFollowing.suffix}</span>}
                        </div>
                    </div>
                    <div className="avatar-card-stat">
                        <span className="avatar-card-stat-header">Followers</span>
                        <div className="avatar-card-stat-amount">
                            {formattedFollowers.amount} {formattedFollowers.suffix && <span className="avatar-card-stat-suffix">{formattedFollowers.suffix}</span>}
                        </div>
                    </div>
                </div>
                {!itsMe && (
                    <>
                        <Separator variant="secondary"/>
                        <div className="avatar-card-actions">
                            <Button variant="primary"
                                    outlined={!!followed}>{!!followed ? 'Following' : 'Follow'}</Button>
                            {/*                    <Button variant="primary"
                                    outlined={user?.subscribed}>{user?.subscribed ? 'Subscribed' : 'Subscribe'}</Button>*/}
                        </div>
                    </>
                )}
            </HoverCardContent>
        </HoverCard>
    )
}