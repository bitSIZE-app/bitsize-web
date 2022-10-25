import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { ReactElement } from 'react';
import { keyframes } from '@stitches/react';

import { styled } from '../styles/bitTheme';

const slideUpAndFade = keyframes({
    '0%': { opacity: 0},
    '100%': { opacity: 1},
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0},
    '100%': { opacity: 1},
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0},
    '100%': { opacity: 1},
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0},
    '100%': { opacity: 1},
});

const StyledContent = styled(HoverCardPrimitive.Content, {
    borderRadius: 6,
    padding: '$3',
    width: 300,
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '250ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
        '&[data-state="open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade },
        },
    },
    zIndex: 5
});

const StyledArrow = styled(HoverCardPrimitive.Arrow, {
    fill: 'white'
});

type TProps = {
    children: ReactElement;
    trigger: ReactElement;
}
export function HoverCard({children, trigger}:TProps) {
    return (
        <HoverCardPrimitive.Root>
            <HoverCardPrimitive.Trigger>
                {trigger}
            </HoverCardPrimitive.Trigger>
            <HoverCardPrimitive.Portal>
                <StyledContent side="right">
                    {children}
                    <StyledArrow/>
                </StyledContent>
            </HoverCardPrimitive.Portal>
        </HoverCardPrimitive.Root>
    )
}