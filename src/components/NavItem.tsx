import { ReactElement } from 'react';

import { styled } from '../styles/bitTheme';

const StyledNavItem = styled('div', {
    alignItems: 'center',
    color: '$mauve12',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '$l',
    fontWeight: '400',
    padding: '$1',

    '&:hover': {
        backgroundColor: '$mauve3',
        borderRadius: '$4'
    },
    '&.active': {
        color: '$plum11',
        fontWeight: '600',
    },
    'svg': {
        marginRight: '$space$1',
        height: 'calc($fontSizes$l - 6px)',
        width: 'calc($fontSizes$l - 6px)'
    }
});
type TNavItemProps = {
    active: boolean;
    icon: ReactElement;
    label: string;
}
export function NavItem ({active, icon, label}:TNavItemProps) {
    return (
        <StyledNavItem className={`${active ? 'active' : ''}`}>
            {icon} {label}
        </StyledNavItem>
    )
}