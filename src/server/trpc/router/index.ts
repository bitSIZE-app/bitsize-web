// src/server/router/index.ts
import { router } from "../trpc";

import { bitsRouter } from "./bitsRouter";

export const appRouter = router({
  bits: bitsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
