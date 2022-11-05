import { Bit as TBit, User } from '@prisma/client';

import {styled} from "@styles/bitTheme";
import {trpc} from "@utils/trpc";

import { BitCard } from "../cards/BitCard";

const StyledBitFeed = styled('div', {
    height: '100%',
    minHeight: 'calc(100vh - 166px)',
    width: '100%',
});

interface IUser extends User {
    following: string[],
    followers: string[]
}

interface IBit extends TBit {
    author: IUser
}

export function BitFeed() {
    const { data } = trpc.bits.getBits.useQuery({});

    return (
        <StyledBitFeed>
            {data?.map((item: IBit) => <BitCard key={item.id} bit={item} />)}
        </StyledBitFeed>
    )
}