import { styled } from '../styles/bitTheme';

export const Link = styled('a', {
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline'
    }
})