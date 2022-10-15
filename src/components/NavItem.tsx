import { useRouter } from 'next/router';
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

        'svg': {
            'path': {
                color: '$plum11'
            }
        }
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
    onClickOverride?: () => void;
}
export function NavItem ({active, icon, label, onClickOverride}:TNavItemProps) {
    const router = useRouter();

    const onNavItemClick = () => {
        if (onClickOverride) {
            onClickOverride();
            return;
        }
        
        router.push(`/${label.toLowerCase()}`)
    }

    return (
        <StyledNavItem className={`${active ? 'active' : ''}`} onClick={onNavItemClick}>
            {icon} {label}
        </StyledNavItem>
    )
}