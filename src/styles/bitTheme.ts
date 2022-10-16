import {
    mauve,
    mauveA,
    mauveDark,
    plum,
    plumDark
} from '@radix-ui/colors';

import { createStitches } from '@stitches/react';

export const { styled, createTheme, getCssText } = createStitches({
    theme: {
        colors: {
            ...mauve,
            ...mauveA,
            ...plum,
        },
        space: {
            1: '12px',
            2: '16px',
            3: '24px',
            4: '32px',
            5: '40px',
            6: '48px',
            7: '56px',
            8: '64px'
        },
        fontSizes: {
            xs: '10px',
            s: '12px',
            m: '16px',
            l: '24px',
            xl: '36px',
            xxl: '48px'
        },
        radii: {
            1: '2px',
            2: '4px',
            3: '6px',
            4: '8px'
        }
    }
});

export const darkTheme = createTheme({
    colors: {
        ...mauveDark,
        ...plumDark
    }
});