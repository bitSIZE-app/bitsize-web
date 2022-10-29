import { signOut } from 'next-auth/react';
import { ReactElement } from 'react';
import * as DDMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '@styles/bitTheme';
import { Separator } from '@components/Separator';

const DDContent = styled(DDMenu.Content, {
    borderRadius: 6,
    padding: '$2 $1',
    width: 175,
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    overflow: 'hidden',
    zIndex: 5
});

const DDMenuItem = styled(DDMenu.Item, {
    borderRadius: 6,
    cursor: 'pointer',
    padding: 'calc($1/2) $1',
    '&:hover': {
        backgroundColor: '$mauve3',
        outline: 0
    }
})

type TProps = {
    trigger: ReactElement;
}

export function HelloUserDropdown({trigger}: TProps) {
    return (
        <DDMenu.Root modal={false}>
            <DDMenu.Trigger asChild>
                {trigger}
            </DDMenu.Trigger>
            <DDMenu.Portal>
                <DDContent align="start" alignOffset={12} sideOffset={-10}>
                    <DDMenu.Group>
                        <DDMenuItem onClick={() => console.log('settings')}>
                            Settings
                        </DDMenuItem>
                    </DDMenu.Group>
                    <Separator variant="secondary" />
                    <DDMenu.Group>
                        <DDMenuItem onClick={() => signOut({callbackUrl: `${window.location.origin}/`})}>
                            Log Out
                        </DDMenuItem>
                    </DDMenu.Group>
                </DDContent>
            </DDMenu.Portal>
        </DDMenu.Root>
    )
}