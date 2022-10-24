// src/server/router/context.ts
import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "../db/client";
import { getSession } from 'next-auth/react';

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type CreateContextOptions = CreateNextContextOptions;

/** Use this helper for:
 *  - testing, where we dont have to Mock Next.js' req/res
 *  - trpc's `createSSGHelpers` where we don't have req/res
 */
export const createContextInner = async ({ req, res }: CreateContextOptions) => {
  const session = await getSession({ req });
  return {
    req,
    res,
    prisma,
    session
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  return await createContextInner(opts);
};

export type Context = inferAsyncReturnType<typeof createContext>;
