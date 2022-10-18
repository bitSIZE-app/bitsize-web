import {DotsVerticalIcon} from '@radix-ui/react-icons';

import {styled} from '../styles/bitTheme';

import {Avatar} from "./Avatar";

const StyledHelloUser = styled('div', {
    alignItems: 'center',
    color: '$mauve12',
    cursor: 'pointer',
    display: 'flex',
    marginTop: '$8',
    padding: '$1',
    width: '100%',

    '.hello-avatar': {
        marginRight: 'calc($space$2/2)'
    },
    '.hello-username': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        '.hello-fullname': {
            maxWidth: 90,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    },

    '&:hover': {
        backgroundColor: '$mauve3',
        borderRadius: '$4'
    },
})


const MenuButton = styled('div', {
    marginLeft: 'auto'
});

export function HelloUser() {
    return (
        <StyledHelloUser>
            <div className="hello-avatar-wrapper">
                <Avatar className="hello-avatar" imgUrl="https://avatars.dicebear.com/api/adventurer/david.svg"/>
            </div>
            <div className="hello-username">
                <span className="hello-fullname">David Ortiz</span>
                <span>@YoDavidO</span>
            </div>
            <MenuButton>
                <DotsVerticalIcon/>
            </MenuButton>
        </StyledHelloUser>
    )
}