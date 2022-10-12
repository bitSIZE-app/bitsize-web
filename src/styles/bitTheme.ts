import {
    mauve,
    mauveDark,
    plum,
    plumDark
} from '@radix-ui/colors';

import { createStitches } from '@stitches/react';

export const { styled, createTheme } = createStitches({
    theme: {
        colors: {
            ...mauve,
            ...plum,
        },
        space: {
            1: '12px',
            2: '16px',
            3: '24px',
            4: '32px',
            5: '40px',
            6: '48px'
        }
    }
});

export const darkTheme = createTheme({
    colors: {
        ...mauveDark,
        ...plumDark
    }
});