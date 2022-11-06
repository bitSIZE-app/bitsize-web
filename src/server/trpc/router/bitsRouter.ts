import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { protectedProcedure, publicProcedure, router } from '../trpc';

import { TEST_FEED } from '@assets/testData';

// TODO: obfuscate errors before deploying

export const bitsRouter = router({
  getAll: protectedProcedure
    .input(z.object({ authorId: z.string() }))
    .query(({ ctx, input }) => {
      return {
        TEST_FEED,
      };
    }),
  getBits: publicProcedure
    .input(
      z.object({
        current: z.number().nullish(),
        limit: z.number().min(1).max(100).nullish(),
        userId: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { user } = ctx.session;
      const { userId } = input;
      console.log(user.id, userId)
      try {
        const foundUser = await prisma.user.findUnique({
          where: {
            id: userId || user.id
          },
          include: {
            following: true,
            followers: true,
          },
        });

        return await prisma.bit.findMany({
          where: {
            authorId: {
              in: [
                ...foundUser.following.map((follow) => follow.followingId),
                foundUser.id,
              ],
            },
          },
          include: {
            author: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        });
      } catch (e) {
        throw new TRPCError(e);
      }
    }),
  addBit: protectedProcedure
    .input(
      z.object({
        content: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx;
      try {
        const { email } = ctx.session.user;
        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        const newBit = await prisma.bit.create({
          data: {
            authorId: user.id,
            content: input.content,
          },
        });

        return newBit;
      } catch (e) {
        throw new TRPCError(e);
      }
    }),
});
