import { styled } from '../styles/bitTheme';
import { HoverCard } from './HoverCard';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { Separator } from './Separator';
import { formatCompactNumber } from '../utils/numbers';

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
    user: {
        id: string;
        image: string;
        bio?: string;
        followerCount?: number;
        following?: boolean;
        followingCount?: number;
        name?: string;
        subscribed?: boolean;
        username: string;
        verified?: boolean;
    }
}

export function AvatarHoverCard({triggerClass = '', user}: TProps) {
    const formattedFollowers = formatCompactNumber(user?.followerCount || 0);
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
                            {user.name}
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
                            {user?.followingCount || 0}
                        </div>
                    </div>
                    <div className="avatar-card-stat">
                        <span className="avatar-card-stat-header">Followers</span>
                        <div className="avatar-card-stat-amount">
                            {formattedFollowers.amount} {formattedFollowers.suffix && <span className="avatar-card-stat-suffix">{formattedFollowers.suffix}</span>}
                        </div>
                    </div>
                </div>
                <Separator variant="secondary"/>
                <div className="avatar-card-actions">
                    <Button variant="primary"
                            outlined={user?.following}>{user?.following ? 'Following' : 'Follow'}</Button>
                    <Button variant="primary"
                            outlined={user?.subscribed}>{user?.subscribed ? 'Subscribed' : 'Subscribe'}</Button>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}