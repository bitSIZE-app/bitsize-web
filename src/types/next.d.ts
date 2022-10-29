import type { NextComponentType, NextPageContext } from 'next';
import type { Session } from 'next-auth';

declare module "next/app" {
    type AppProps<P = Record<string, unknown>> = {
        Component: NextComponentType<NextPageContext, any, P>;
        __N_SSG?: boolean;
        __N_SSP?: boolean;
        pageProps: P & {
            session?: Session;
        };
    }
}