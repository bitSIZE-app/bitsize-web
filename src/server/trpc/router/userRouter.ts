import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import type { Follows } from '@prisma/client';

import { protectedProcedure, publicProcedure, router } from '@server/trpc/trpc';

export const userRouter = router({
    getMe: protectedProcedure
        .query(async ({ctx}) => {
            const { email } = ctx.session.user;

            return await prisma.user.findUnique({
                where: {
                    email
                },
                include: {
                    accounts: true,
                    followers: true,
                    following: true,
                    sessions: true
                }
            })
        }),
    getFollowing: protectedProcedure
        .query(async ({ ctx }) => {
            const { id } = ctx.session.user;

            try {
                return await prisma.follows.findMany({
                    where: {
                        followerId: id
                    }
                })
            } catch (e) {
                throw new TRPCError(e);
            }
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
        }),
    followUser: protectedProcedure
        .input(z.object({ followingId: z.string() }))
        .mutation(async ({ ctx, input}) => {
            const { id } = ctx.session.user;
            const { followingId } = input;
            console.log(id);
            try {
                const follows = await prisma.follows.findFirst({
                    where: {
                        followerId: id,
                        followingId
                    }
                });

                if (follows) {
                    return await prisma.follows.delete({
                        where: {
                            followerId_followingId: {
                                followerId: follows.followerId,
                                followingId: follows.followingId
                            }
                        }
                    });
                }

                return await prisma.follows.create({
                    data: {
                        followingId,
                        followerId: id
                    }
                });
            } catch (e) {
                throw new TRPCError(e);
            }
        }),
});