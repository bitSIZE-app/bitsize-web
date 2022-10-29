import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { globalCss } from '@stitches/react';

import type { ExtendedAppProps } from '@lib/types';

import '../styles/globals.css'; // TODO: Remove the important on body->background color and let selected theme handle it.

import { trpc } from '../utils/trpc';
import { SessionProvider } from 'next-auth/react';
import { WithAuth } from '@lib/auth/WithAuth';

dayjs.extend(relativeTime);
config.autoAddCss = false

const globalStyles = globalCss({
    '*': {
        fontFamily: 'Source Sans Pro", sans-serif'
    },
    'html': {
        height: '100%'
    },
    'body': {
        height: '100%',
    },
    'h1, h2, h3, h4': {
        margin: 0,
        padding: 0
    }
})

function MyApp({
        Component,
        pageProps: {session, ...pageProps}
    }: ExtendedAppProps){
    globalStyles();

    return (
        <SessionProvider session={session}>
            {Component.auth ? (
                    <WithAuth options={Component.auth}>
                        <Component {...pageProps} />
                    </WithAuth>
                ) :
                <Component {...pageProps} />}
        </SessionProvider>
    );
};

export default trpc.withTRPC(MyApp);
