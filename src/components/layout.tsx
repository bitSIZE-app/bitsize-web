import {ReactElement, useEffect} from 'react';
import {styled} from '../styles/bitTheme';

import {Sidebar} from './Sidebar';
import {PageHeader} from "./PageHeader";

const StyledLayout = styled('div', {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
});

const StyledMain = styled('main', {
    backgroundColor: '$mauve1',
    borderLeft: '1px solid $mauve5',
    borderRight: '1px solid $mauve5',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    width: '100%'
});

export function Layout({children}: TProps) {
    return (
        <StyledLayout>
            <Sidebar/>
            <StyledMain>
                <PageHeader/>
                {children}
            </StyledMain>
        </StyledLayout>
    )
}

type TProps = {
    children: ReactElement
}