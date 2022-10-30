import Image from 'next/image';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faClockRotateLeft,
    faCoins,
    faCompass,
    faHouse,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/bitSIZE-logo.svg'
import { styled } from '../styles/bitTheme';

import { NavItem } from './NavItem';
import { HelloUser } from './hello-user/HelloUser';

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
    const router = useRouter();

    return (
        <StyledSidebar>
            <nav>
                <div className="logo">
                    <Image src={logo} width={103} height={16} />
                </div>
                <NavItem active={router.pathname === '/bits'} icon={<FontAwesomeIcon icon={faHouse} />} label="Home" />
                <NavItem active={router.pathname === '/search'} icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} label="Search" onClickOverride={() => console.log('open search overlay')} />
                <NavItem active={router.pathname === '/explore'} icon={<FontAwesomeIcon icon={faCompass} />} label="Explore" />
                <NavItem active={router.pathname === '/notifications'} icon={<FontAwesomeIcon icon={faBell} />} label="Notifications" />
                <NavItem active={router.pathname === '/subscriptions'} icon={<FontAwesomeIcon icon={faClockRotateLeft} />} label="Subscriptions" />
                <NavItem active={router.pathname === '/donations'} icon={<FontAwesomeIcon icon={faCoins} />} label="Donations" />
                <HelloUser />
            </nav>
        </StyledSidebar>
    )
}
