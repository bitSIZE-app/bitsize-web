import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import type { Bit, User } from '@prisma/client';

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
                let users:User[] = [];
                let bits:Bit[] = [];
                if (searchTerm) {
                    users = await prisma.user.findMany({
                        where: {
                            email: {
                                search: `${searchTerm }*`,
                            },
                            username: {
                                search: `${searchTerm}*`,
                            },
                            name: {
                                search: `${searchTerm}*`,
                            },
                        },
                    });
                    bits = await prisma.bit.findMany({
                        where: {
                            content: {
                                search: `${searchTerm}*`,
                            },
                        },
                        include: {
                            author: true
                        }
                    });
                }

                const combinedResults = [];
                !!users && combinedResults.push(...users);
                !!bits && combinedResults.push(...bits);
                return combinedResults;
            } catch (error) {
                throw new TRPCError(error);
            }
        }),
});
