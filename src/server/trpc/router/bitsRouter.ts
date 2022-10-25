import { TRPCError } from '@trpc/server';
import {z} from 'zod';

import {protectedProcedure, router} from "../trpc";

import {TEST_FEED} from "../../../assets/testData";

export const bitsRouter = router({
    getAll: protectedProcedure
        .input(z.object({authorId: z.string()}))
        .query(({ctx, input}) => {
            return {
                TEST_FEED
            };
        }),
    addBit: protectedProcedure
        .input(z.object({
            authorId: z.string(),
            content: z.string()
        }))
        .mutation(async ({ctx, input}) => {
            const { prisma } = ctx;
            try {
                const newBit = await prisma.bit.create({
                    data: {
                        ...input,
                        originalId: ''
                    }
                });

                return newBit;
            } catch (e) {
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR'});
            }
        })
})