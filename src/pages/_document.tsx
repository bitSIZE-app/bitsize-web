import {Html, Head, Main, NextScript} from 'next/document'
import {getCssText} from "../styles/bitTheme";

export default function Document() {
    return (
        <Html lang="en" id="no-fouc">
            <Head>
                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
