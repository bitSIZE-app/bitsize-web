import { useQueryClient } from '@tanstack/react-query';

import { styled } from '@styles/bitTheme';
import { trpc } from '@utils/trpc';

const StyledSearchFeed = styled('div', {
    height: '100%',
    minHeight: 'calc(100vh - 90px)',
    width: '100%',
});


export function SearchFeed() {
    const queryClient = useQueryClient();

    const ctx = trpc.useContext();

    const data = ctx.users.getUser.getData();

    if (queryClient.isFetching) {
        console.log('we fetching')
    }

    return (
        <StyledSearchFeed>
            Search Results
        </StyledSearchFeed>
    )
}