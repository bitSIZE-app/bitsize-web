import {ReactElement} from 'react';
import {styled} from '../styles/bitTheme';

import {Sidebar} from './Sidebar';
import {PageHeader} from "./PageHeader";
import { getSession, useSession } from 'next-auth/react';
import { Session } from 'inspector';
import { GetServerSideProps } from 'next';

const StyledLayout = styled('div', {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
});

const StyledMain = styled('main', {
    backgroundColor: '$mauve3',
    borderLeft: '1px solid $mauve5',
    borderRight: '1px solid $mauve5',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    width: '100%'
});

const SidebarContainer = styled('div', {
    position: 'relative',
    width: 240
});

type TProps = {
    children: ReactElement;
    title: string;
}

export function Layout({children, title}: TProps) {
    return (
        <StyledLayout>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <StyledMain>
                <PageHeader title={title}/>
                {children}
            </StyledMain>
        </StyledLayout>
    )
}