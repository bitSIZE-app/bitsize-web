import {z} from 'zod';

import {publicProcedure, router} from "../trpc";

import {TEST_FEED} from "../../../assets/testData";

export const bitsRouter = router({
    getAll: publicProcedure
        .input(z.object({authorId: z.string()}))
        .query(({ctx, input}) => {
            console.log(input.authorId);
            return {
                TEST_FEED
            };
        })
})