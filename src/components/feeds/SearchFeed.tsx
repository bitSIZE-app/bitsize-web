
import type { Bit as TBit, User } from '@prisma/client';

import { BitCard } from '@components/cards/BitCard';
import { styled } from '@styles/bitTheme';
import { UserCard } from '@components/cards/UserCard';

const StyledSearchFeed = styled('div', {
    height: '100%',
    minHeight: 'calc(100vh - 90px)',
    width: '100%',
});

interface IUser extends User {
    following: string[],
    followers: string[]
}

interface IBit extends TBit {
    author: IUser
}

type TProps = {
    searchResults?: (IBit | IUser)[];
}

export function SearchFeed({searchResults = []}: TProps) {

    return (
        <StyledSearchFeed>
            {searchResults.map(item => {
                if ('content' in item) {
                    return <BitCard key={item.id} bit={item}/>;
                }
                return <UserCard user={item} />;
            })}
        </StyledSearchFeed>
    )
}