import {styled} from "@styles/bitTheme";
import {trpc} from "@utils/trpc";

import { Bit } from "./Bit";

const StyledBitFeed = styled('div', {
    height: '100%',
    minHeight: 'calc(100vh - 166px)',
    width: '100%',
});

export function BitFeed() {
    const { data } = trpc.bits.getBits.useQuery({});

    return (
        <StyledBitFeed>
            {data?.map(item => <Bit key={item.id} bit={item} />)}
        </StyledBitFeed>
    )
}