import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { styled } from '../styles/bitTheme';

const StyledHelloUser = styled('div', {
    alignItems: 'center',
    display: 'flex',
    marginTop: '$8',
    width: '100%'


})

const Avatar = styled(AvatarPrimitive.Root, {
    alignItems: 'center',
    borderRadius: '100%',
    display: 'inline-flex',
    height: '$fontSizes$xxl',
    justifyContent: 'center',
    marginRight: 'calc($space$1/2)',
    overflow: 'hidden',
    verticalAlign: 'middle',
    width: '$fontSizes$xxl'
});

const AvatarImage = styled(AvatarPrimitive.Image, {
    borderRadius: 'inherit',
    height: '100%',
    objectFit: 'cover',
    width: '100%'
});

const MenuButton = styled('div', {
    cursor: 'pointer',
    marginLeft: 'auto'
});

export function HelloUser () {
    return (
        <StyledHelloUser>
            <Avatar>
                <AvatarImage src="https://avatars.dicebear.com/api/adventurer/david.svg"/>
            </Avatar>
            @YoDavidO
            <MenuButton>
                <DotsVerticalIcon />
            </MenuButton>
        </StyledHelloUser>
    )
}