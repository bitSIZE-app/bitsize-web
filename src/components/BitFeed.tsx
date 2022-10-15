import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import {styled} from "../styles/bitTheme";
import {trpc} from "../utils/trpc";

import {Bit} from "./Bit";

const StyledBitFeed = styled(ScrollAreaPrimitive.Root, {
    height: '100%',
    width: '100%',
});
const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
    height: '100%',
    width: '100%',
});

export function BitFeed() {
    const {data} = trpc.bits.getAll.useQuery({ authorId: "1"});

    return (
        <StyledBitFeed>
            <StyledViewport>
                {data?.TEST_FEED.map(item => <Bit key={item.id} bit={item} />)}
            </StyledViewport>
        </StyledBitFeed>
    )
}