import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { publicProcedure, router } from '../trpc';

export const searchRouter = router({
    searchBitsUsers: publicProcedure
        .input(
            z.object({
                searchTerm: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { searchTerm } = input;

            try {
                const users = await prisma.user.findMany({
                    where: {
                        email: {
                            search: `${searchTerm}*`,
                        },
                        username: {
                            search: `${searchTerm}*`,
                        },
                        name: {
                            search: `${searchTerm}*`,
                        },
                    },
                });

                const bits = await prisma.bit.findMany({
                    where: {
                        content: {
                            search: `${searchTerm}*`,
                        },
                    },
                    include: {
                        author: true
                    }
                });

                const combinedResults = [];
                if (users) combinedResults.push(...users);
                if (bits) combinedResults.push(...bits);
                return combinedResults;
            } catch (error) {
                throw new TRPCError(error);
            }
        }),
});
