import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Input } from '@components/Input';
import { styled } from '@styles/bitTheme';
import { trpc } from '@utils/trpc';

const StyledSearchBar = styled('div', {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid $mauve5',
    display: 'flex',
    padding: '$3 $2',
    width: '100%',

    '.search-bar-input': {
        width: '100%'
    }
})

export function SearchBar() {
    const [searchVal, setSearchVal] = useState('');
    const { error } = trpc.users.getUser.useQuery({
        searchTerm: searchVal
    });

    return (
        <StyledSearchBar>
            <Input
                className="search-bar-input"
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                onChange={setSearchVal}
                placeholder={"Search bitSIZE..."}
                value={searchVal}/>
        </StyledSearchBar>
    )
}