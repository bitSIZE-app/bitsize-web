import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { protectedProcedure, router } from '../trpc';

import { TEST_FEED } from '@assets/testData';

// TODO: obfuscate errors before deploying

export const bitsRouter = router({
    getAll: protectedProcedure
        .input(z.object({authorId: z.string()}))
        .query(({ctx, input}) => {
            return {
                TEST_FEED
            };
        }),
    getBits: protectedProcedure
        .input(z.object({current: z.number().nullish(), limit: z.number().nullish()}))
        .query(async ({ctx, input}) => {
            const { email } = ctx.session.user;
            const { current, limit } = input;

            try {
                const user = await prisma.user.findUnique({
                    where: {
                        email
                    },
                    select: {
                        id: true,
                        following: {
                            select: {
                                followingId: true
                            }
                        }
                    }
                });

                const bits = await prisma.bit.findMany({
                    skip: current ? current * limit : 0,
                    take: limit || 100,
                    where: {
                        authorId: {
                            in: [...user.following.map(follow => follow.followingId), user.id]
                        }
                    },
                    include: {
                        author: {
                            include: {
                                following: true,
                                followers: true
                            }
                        }
                    }
                });

                return bits;
            } catch (e) {
                throw new TRPCError(e);
            }
        }),
    addBit: protectedProcedure
        .input(z.object({
            content: z.string()
        }))
        .mutation(async ({ctx, input}) => {
            const {prisma} = ctx;
            try {
                const { email } = ctx.session.user;
                const user = await prisma.user.findFirst({
                    where: {
                        email
                    }
                });

                const newBit = await prisma.bit.create({
                    data: {
                        authorId: user.id,
                        content: input.content
                    }
                });

                return newBit;
            } catch (e) {
                throw new TRPCError(e);
            }
        })
})