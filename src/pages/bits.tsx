import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@components/layout';
import { BitFeed } from '@components/BitFeed';

const Bits: NextPage = () => {
    return (
        <Layout>
            <>
                <Head>
                    <title>Home :: bitSIZE :: The bite sized social app</title>
                    <meta name="description"
                          content="The bite sized social app with end-to-end encrypted messaging."/>
                    <link rel="icon" href="/favicon.png"/>
                </Head>

                <BitFeed/>
            </>
        </Layout>
    );
};

export default Bits;