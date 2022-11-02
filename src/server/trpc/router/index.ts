// src/server/router/index.ts
import { router } from "../trpc";

import { bitsRouter } from "./bitsRouter";
import { userRouter } from './userRouter';

export const appRouter = router({
  bits: bitsRouter,
  users: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
