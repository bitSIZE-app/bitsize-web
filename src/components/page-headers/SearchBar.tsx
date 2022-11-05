import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Input } from '@components/Input';
import { styled } from '@styles/bitTheme';

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
});

type TProps = {
    onSearchChange: (searchTerm: string) => void;
}

export function SearchBar({onSearchChange}: TProps) {
    const [searchVal, setSearchVal] = useState('');

    const onChange = (val: string) => {
        onSearchChange(val);
        setSearchVal(val);
    }

    return (
        <StyledSearchBar>
            <Input
                className="search-bar-input"
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                onChange={onChange} // TODO: debounce this so it doesn't run a ton of queries or check to see if the query can be debounced.
                placeholder={"Search bitSIZE..."}
                value={searchVal}/>
        </StyledSearchBar>
    )
}