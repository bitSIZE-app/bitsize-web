import { useRouter } from 'next/router';

import { BitCreator } from '@components/page-header/BitCreator';
import { SearchBar } from '@components/search/SearchBar';
import { styled } from "@styles/bitTheme";

const StyledPageHeader = styled('div', {
    background: 'white',
    fontSize: '$m',
    fontWeight: '600',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 10,

    '.page-title': {
        borderBottom: '1px $mauve5 solid',
        padding: '$3 $2'
    }
});

type TProps = {
    title: string;
}

export function PageHeader ({ title }:TProps) {
    const router = useRouter();

    return (
        <StyledPageHeader>
            <div className="page-title">
                {title}
            </div>
        </StyledPageHeader>
    )
}