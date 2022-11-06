import { useSession } from 'next-auth/react';
import { User } from '@prisma/client';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { styled } from '@styles/bitTheme';
import { trpc } from '@utils/trpc';

const StyledUserCard = styled('div', {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid $mauve5',
    display: 'flex',
    padding: '$3 $2',
    position: 'relative',
    width: '100%',

    '.user-card-avatar': {
        marginRight: '$1'
    },

    '.user-card-content': {
        width: '100%'
    },

    '&:hover': {
        backgroundColor: '$mauve2',
        cursor: 'pointer'
    }
});

type TProps = {
    user: User
}

export function UserCard({user}:TProps) {
    const { data: session } = useSession();

    const followingQuery = trpc.users.getFollowing.useQuery();
    const followMutation = trpc.users.followUser.useMutation();

    const { id } = user;
    const following = followingQuery.data?.find(item => item.followingId === id);
    const itsMe = id === session?.user?.id;

    const onFollowClick = async () => {
        await followMutation.mutate({followingId: id}, {
            onSuccess: async () => {
                await followingQuery.refetch();
            }
        })
    }

    return (
        <StyledUserCard>
            <div className="user-card-avatar">
                <Avatar className="user-card-avatar" imgUrl={user.image} />
            </div>
            <div className="user-card-content">
                <div className="user-card-header">
                    <div className="user-card-username">@{user.username}</div>
                    <div className="user-card-name">{user.name}</div>
                </div>
                <div className="user-card-bio">
                    {user.bio}
                </div>
            </div>
            {session?.user && !itsMe && (
                <div className="user-card-actions">
                    <Button
                        onClick={onFollowClick}
                        outlined={!!following}
                        variant={ following ? 'secondary' : 'primary'}>
                            {following ? 'Unfollow' : 'Follow'}
                    </Button>
                </div>
            )}
        </StyledUserCard>
    )
}