import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { protectedProcedure, router } from '@server/trpc/trpc';

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
        })
});