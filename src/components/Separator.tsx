import { styled } from '../styles/bitTheme';

export const Separator = styled('div', {
    margin: '$2 0',
    height: 1,
    width: '100%',

    variants: {
        variant: {
            primary: {
                backgroundColor: '$plum11'
            },
            secondary: {
                backgroundColor: '$mauve5'
            }
        }
    }
});