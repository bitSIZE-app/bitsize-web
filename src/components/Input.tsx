import { styled } from '../styles/bitTheme';

export const Input = styled('input', {
    backgroundColor: '$mauve2',
    border: '1px solid $mauve5',
    borderRadius: '$4',
    color: '$mauve11',
    padding: '$1',
    width: '100%',

    '&:focus': {
        borderColor: '$mauve9',
        outline: 'none'
    }
});