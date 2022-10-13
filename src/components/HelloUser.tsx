import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { styled } from '../styles/bitTheme';

const StyledHelloUser = styled('div', {
    alignItems: 'center',
    color: '$mauve12',
    cursor: 'pointer',
    display: 'flex',
    marginTop: '$8',
    padding: '$1',
    width: '100%',

    '.username': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },

    '&:hover': {
        backgroundColor: '$mauve3',
        borderRadius: '$4'
    },
})

const Avatar = styled(AvatarPrimitive.Root, {
    alignItems: 'center',
    borderRadius: '100%',
    display: 'inline-flex',
    height: '$fontSizes$xxl',
    justifyContent: 'center',
    marginRight: 'calc($space$2/2)',
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
    marginLeft: 'auto'
});

export function HelloUser () {
    return (
        <StyledHelloUser>
            <Avatar>
                <AvatarImage src="https://avatars.dicebear.com/api/adventurer/david.svg"/>
            </Avatar>
            <div className="username">
                <span>David Ortiz</span>
                <span>@YoDavidO</span>
            </div>
            <MenuButton>
                <DotsVerticalIcon />
            </MenuButton>
        </StyledHelloUser>
    )
}