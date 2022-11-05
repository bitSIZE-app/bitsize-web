import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { Avatar } from "@components/Avatar";
import { styled } from '@styles/bitTheme';
import { trpc } from '@utils/trpc';

import { HelloUserDropdown } from './HelloUserDropdown';

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
    const me = trpc.users.getMe.useQuery();
console.log(me);
    return (
        <HelloUserDropdown trigger={(
            <StyledHelloUser>
                <div className="hello-avatar-wrapper">
                    <Avatar
                        className="hello-avatar"
                        imgUrl={me?.data?.image || `https://avatars.dicebear.com/api/bottts/${me?.data?.name || Math.round(Math.random())}.svg`}/>
                </div>
                <div className="hello-username">
                    <span className="hello-fullname">{me?.data?.name}</span>
                    <span>@{me?.data?.username}</span>
                </div>
                <MenuButton>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </MenuButton>
            </StyledHelloUser>
        )} />

    )
}