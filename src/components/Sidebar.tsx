import Image from 'next/image';
import { useRouter } from 'next/router';

import {
    faBell,
    faClockRotateLeft,
    faCoins,
    faCompass,
    faHouse,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/bitSIZE-logo.svg';
import { styled } from '../styles/bitTheme';

import { useSession } from 'next-auth/react';
import { HelloUser } from './hello-user/HelloUser';
import { NavItem } from './NavItem';

const StyledSidebar = styled('div', {
    maxWidth: 240,
    minWidth: 240,
    padding: '0 $3',
    position: 'fixed',

    'nav': {
        display: 'flex',
        flexDirection: 'column'
    },
    '.logo': {
        alignItems: 'center',
        display: 'flex',
        height: 70,
        marginBottom: '$8',
        padding: '$3 $1'
    }
});

export function Sidebar() {
    const { data: session } = useSession();
    
    const router = useRouter();

    return (
        <StyledSidebar>
            <nav>
                <div className="logo">
                    <Image src={logo} width={103} height={16} />
                </div>

                {!!session?.user && <NavItem active={router.pathname === '/bits'} icon={<FontAwesomeIcon icon={faHouse} />} label="Home" path='/bits' />}              
                <NavItem active={router.pathname === '/search'} icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} label="Search" />
                <NavItem active={router.pathname === '/explore'} icon={<FontAwesomeIcon icon={faCompass} />} label="Explore" />
                {!!session?.user && (
                    <>
                        <NavItem active={router.pathname === '/notifications'} icon={<FontAwesomeIcon icon={faBell} />} label="Notifications" />
                        <NavItem active={router.pathname === '/subscriptions'} icon={<FontAwesomeIcon icon={faClockRotateLeft} />} label="Subscriptions" />
                        <NavItem active={router.pathname === '/donations'} icon={<FontAwesomeIcon icon={faCoins} />} label="Donations" />
                        <HelloUser />
                    </>
                )}
            </nav>
        </StyledSidebar>
    )
}
