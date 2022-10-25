import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// src/pages/_app.tsx
import {globalCss} from '@stitches/react';

import type {AppType} from "next/app";
import "../styles/globals.css"; // TODO: Remove the important on body->background color and let selected theme handle it.

import {trpc} from "../utils/trpc";

dayjs.extend(relativeTime);

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

const MyApp: AppType = ({Component, pageProps}) => {
    globalStyles();
    return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
