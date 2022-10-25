import { styled } from '../styles/bitTheme';

export const Button = styled('button', {
    alignItems: 'center',
    border: 'none',
    borderRadius: '20px',
    color: '$mauve1',
    cursor: 'pointer',
    display: 'flex',
    fontWeight: 600,
    justifyContent: 'center',
    outline: 'none',
    padding: '$1 $3',
    variants: {
        variant: {
            primary: {
                backgroundColor: '$plum11',

                '&:hover': {
                    backgroundColor: '$plum9'
                }
            },
            secondary: {
                backgroundColor: '$mauve8',

                '&:hover': {
                    backgroundColor: '$mauve8'
                }
            }
        },
        outlined: {true: {}}
    },
    compoundVariants: [
        {
            variant: 'primary',
            outlined: true,
            css: {
                backgroundColor: '$plum2',
                border: '2px solid $plum11',
                color: '$plum11',
                padding: 'calc($1 - 2px) calc($3 - 2px)',

                '&:hover': {
                    backgroundColor: '$plum3'
                }
            }
        },
        {
            variant: 'secondary',
            outlined: true,
            css: {
                backgroundColor: '$mauve2',
                border: '2px solid $mauve8',
                color: '$mauve11',
                padding: 'calc($1 - 2px) calc($3 - 2px)',

                '&:hover': {
                    backgroundColor: '$mauve3'
                }
            }
        }
    ],
})