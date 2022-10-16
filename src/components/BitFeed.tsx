import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import {styled} from "../styles/bitTheme";
import {trpc} from "../utils/trpc";

import {Bit} from "./Bit";

const StyledBitFeed = styled(ScrollAreaPrimitive.Root, {
    height: '100%',
    overflow: 'hidden',
    width: '100%',
});
const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
    height: '100%',
    width: '100%',
});
const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    padding: 2,
    backgroundColor: '$mauveA4',
    transition: 'background-color 160ms ease-out',
    width: 10,
    '&:hover': {
        backgroundColor: '$mauveA6'
    },
});
const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
    flex: 1,
    background: '$mauve10',
    borderRadius: 10,
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        minWidth: 44,
        minHeight: 44
    },
});

export function BitFeed() {
    const {data} = trpc.bits.getAll.useQuery({ authorId: "1"});

    return (
        <StyledBitFeed>
            <StyledViewport>
                {data?.TEST_FEED.map(item => <Bit key={item.id} bit={item} />)}
            </StyledViewport>
            <StyledScrollbar>
                <StyledThumb />
            </StyledScrollbar>
        </StyledBitFeed>
    )
}