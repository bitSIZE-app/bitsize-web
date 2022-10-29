import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { styled } from '../styles/bitTheme';

const StyledNavItem = styled('div', {
    alignItems: 'center',
    color: '$mauve12',
    cursor: 'pointer',
    display: 'flex',
    fontSize: 'calc($l - 4px)',
    fontWeight: '400',
    padding: 'calc($1 - 2px) $1',

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
    path?: string;
}
export function NavItem ({active, icon, label, onClickOverride, path}:TNavItemProps) {
    const router = useRouter();

    const onNavItemClick = () => {
        if (onClickOverride) {
            onClickOverride();
            return;
        }
        
        router.push(`/${path || label.toLowerCase()}`)
    }

    return (
        <StyledNavItem className={`${active ? 'active' : ''}`} onClick={onNavItemClick}>
            {icon} {label}
        </StyledNavItem>
    )
}