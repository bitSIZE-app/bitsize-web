import { HoverCard } from './HoverCard';
import { Avatar } from './Avatar';
import { styled } from '../styles/bitTheme';

const HoverCardContent = styled('div', {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    '.avatar-card-header': {
        alignItems: 'center',
        borderBottom: '1px solid $mauve5',
        display: 'flex',
        marginBottom: '$2',
        paddingBottom: '$2',

        '.avatar-card-name': {
            marginLeft: '$1'
        },
        '.avatar-card-fullname': {
            color: '$mauve8',
        }
    },

    '.avatar-card-bio': {
        borderBottom: '1px solid $mauve5',
        marginBottom: '$2',
        paddingBottom: '$2'
    },

    '.avatar-card-stats': {
        display: 'flex',

        '.avatar-card-stat': {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            width: '50%',

            'span': {
                color: '$mauve8'
            }
        }
    }
});

type TProps = {
    triggerClass?: string;
    user: {
        id: string;
        avatarUrl: string;
        bio?: string;
        name?: string;
        username: string;
        verified?: boolean;
    }
}

export function AvatarHoverCard({triggerClass = '', user}: TProps) {
    return (
        <HoverCard trigger={<Avatar className={triggerClass} imgUrl={user.avatarUrl}/>}>
            <HoverCardContent>
                <div className="avatar-card-header">
                    <Avatar className="avatar-card-avatar" imgUrl={user.avatarUrl}/>
                    <div className="avatar-card-name">
                        <div className="avatar-card-username">
                            @{user.username}
                        </div>
                        <div className="avatar-card-fullname">
                            {user.name}
                        </div>
                    </div>
                </div>
                <div className="avatar-card-bio">
                    {user.bio}
                </div>
                <div className="avatar-card-stats">
                    <div className="avatar-card-stat">
                        <span>Following</span>
                        125
                    </div>
                    <div className="avatar-card-stat">
                        <span>Followers</span>
                        150k
                    </div>
                </div>
                <div className="avatar-card-actions">

                </div>
            </HoverCardContent>
        </HoverCard>
    )
}