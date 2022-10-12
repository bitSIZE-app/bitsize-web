import { ReactElement } from 'react';
import { styled } from '../styles/bitTheme';

import { Sidebar } from './Sidebar';

const StyledLayout = styled('div', {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
})

export function Layout ({ children }:TProps) {
    return (
        <StyledLayout>
            <Sidebar />
            <main>{children}</main>
        </StyledLayout>
    )
}

type TProps = {
    children: ReactElement
}