import { User } from '@prisma/client';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { styled } from '@styles/bitTheme';
import { trpc } from '@utils/trpc';

const StyledUserCard = styled('div', {
    backgroundColor: 'white',
    borderBottom: '1px solid $mauve5',
    display: 'flex',
    padding: '$3 $2',
    position: 'relative',
    width: '100%',

    '.user-card-avatar': {
        marginRight: '$1'
    },

    '&:hover': {
        backgroundColor: '$mauve2',
        cursor: 'pointer'
    }
});

interface IUser extends User {
    following: string[],
    followers: string[]
}

type TProps = {
    user: IUser
}

export function UserCard({user}:TProps) {
    const me = trpc.users.getUser.useQuery();
    const { id } = user;
    const following = me.following?.find(item => item.followingId === id);

    return (
        <StyledUserCard>
            <Avatar className="user-card-avatar" imgUrl={user.image} />
            <div className="user-card-content">
                <div className="user-card-header">
                    <div className="user-card-username">@{user.username}</div>
                    <div className="user-card-name">{user.name}</div>
                </div>
                <div className="user-card-bio">
                    {user.bio}
                </div>
            </div>
            <Button variant={ following ? 'secondary' : 'primary'}>{following ? 'Unfollow' : 'Follow'}</Button>
        </StyledUserCard>
    )
}