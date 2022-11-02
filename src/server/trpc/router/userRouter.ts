import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { protectedProcedure, publicProcedure, router } from '@server/trpc/trpc';

export const userRouter = router({
    getMe: protectedProcedure
        .query(({ctx}) => {
            const { email } = ctx.session.user;

            const me = prisma.user.findUnique({
                where: {
                    email
                },
                include: {
                    followers: true,
                    following: true
                }
            })
        }),
    getUser: publicProcedure
        .input(z.object({
            searchTerm: z.string(),
            limit: z.number().min(1).max(100).nullish(),
            cursor: z.number().nullish()
        }))
        .query(async ({ctx, input}) => {
            const limit = input.limit ?? 50;
            try {
                const users = await prisma.user.findMany({
                    where: {
                        email: { search: input.searchTerm + '*' },
                        username: { search: input.searchTerm + '*' },
                        name: { search: input.searchTerm + '*' }
                    }
                });

                return users;
            } catch (e) {
                throw new TRPCError(e);
            }
        })
});