// src/server/router/index.ts
import { router } from "../trpc";

import { bitsRouter } from "./bitsRouter";
import { searchRouter } from './searchRouter';
import { userRouter } from './userRouter';

export const appRouter = router({
  bits: bitsRouter,
  search: searchRouter,
  users: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
