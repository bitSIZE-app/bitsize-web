import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { ReactElement } from 'react';
import * as DDMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '@styles/bitTheme';
import { Link } from '@components/Link';

const DDContent = styled(DDMenu.Content, {
    borderRadius: 6,
    padding: '$3',
    width: 300,
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    zIndex: 5
});

const StyledLink = styled(Link, {
    '&:hover': {
        textDecoration: 'none',
    }
})

type TProps = {
    trigger: ReactElement;
}

export function DropdownMenu({trigger}: TProps) {
    const router = useRouter();
    const onLogOut = (e) => {
        e.preventDefault();
        signOut().then(() => {
            router.push('/');
            console.log('signed out')
        });
    }

    return (
        <DDMenu.Root>
            <DDMenu.Trigger asChild>
                {trigger}
            </DDMenu.Trigger>
            <DDMenu.Portal>
                <DDContent>
                    <DDMenu.Group>
                        <DDMenu.Item>
                            <StyledLink onClick={onLogOut}>Log Out</StyledLink>
                        </DDMenu.Item>
                    </DDMenu.Group>
                </DDContent>
            </DDMenu.Portal>
        </DDMenu.Root>
    )
}