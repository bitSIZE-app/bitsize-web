// src/pages/_app.tsx
import {globalCss} from '@stitches/react';
import type {AppType} from "next/app";

import "../styles/globals.css"; // TODO: Remove the important on body->background color and let selected theme handle it.
import {trpc} from "../utils/trpc";

const globalStyles = globalCss({
    '*': {
        color: '$mauve12',
        fontFamily: 'font-family: "Source Sans Pro", sans-serif'
    }
})

const MyApp: AppType = ({Component, pageProps}) => {
    globalStyles();
    return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
