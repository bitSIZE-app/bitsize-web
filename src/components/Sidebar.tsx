import { ReactElement } from 'react';
import Image from 'next/image';

import { HomeIcon } from '@radix-ui/react-icons';

import { styled } from '../styles/bitTheme';

import logo from '../assets/bitSIZE-logo.svg'

const StyledSidebar = styled('div', {
    backgroundColor: '$mauve1',
    borderRight: '1px solid $mauve5',
    height: '100%',
    maxWidth: 150,
    minWidth: 150,
    padding: '$3',

    '.logo': {
        marginBottom: 64
    }
});

export function Sidebar() {
    return (
        <StyledSidebar>
            <nav>
                <div className="logo">
                    <Image src={logo} width={103} height={31} />
                </div>
                <NavItem active={true} icon={<HomeIcon />} label="Home" />
            </nav>
        </StyledSidebar>
    )
}

const StyledNavItem = styled('div', {
    alignItems: 'center',
    display: 'flex',
    fontSize: '$l',
    fontWeight: '600',
    '&.active': {
        color: '$plum11'
    },
    'svg': {
        marginRight: '8px',
        height: 'calc($fontSizes$l - 6px)',
        width: 'calc($fontSizes$l - 6px)'
    }
});
type TNavItemProps = {
    active: boolean;
    icon: ReactElement;
    label: string;
}
function NavItem ({active, icon, label}:TNavItemProps) {
    return (
        <StyledNavItem className={`${active ? 'active' : ''}`}>
            {icon} {label}
        </StyledNavItem>
    )
}
