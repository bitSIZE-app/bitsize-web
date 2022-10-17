import Image from 'next/image';

import { BellIcon, FrameIcon, HomeIcon, MagnifyingGlassIcon, RocketIcon, TimerIcon } from '@radix-ui/react-icons';

import logo from '../assets/bitSIZE-logo.svg'
import { styled } from '../styles/bitTheme';

import { NavItem } from './NavItem';
import { HelloUser } from './HelloUser';

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
    return (
        <StyledSidebar>
            <nav>
                <div className="logo">
                    <Image src={logo} width={103} height={16} />
                </div>
                <NavItem active={true} icon={<HomeIcon />} label="Home" />
                <NavItem active={false} icon={<MagnifyingGlassIcon />} label="Search" onClickOverride={() => console.log('open search overlay')} />
                <NavItem active={false} icon={<FrameIcon />} label="Explore" />
                <NavItem active={false} icon={<BellIcon />} label="Notifications" />
                <NavItem active={false} icon={<TimerIcon />} label="Subscriptions" />
                <NavItem active={false} icon={<RocketIcon />} label="Donations" />
                <HelloUser />
            </nav>
        </StyledSidebar>
    )
}
