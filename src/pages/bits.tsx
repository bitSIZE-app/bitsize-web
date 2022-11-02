import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@components/layout';
import { BitFeed } from '@components/BitFeed';
import { WithAuth } from '@components/WithAuth';
import { BitCreator } from '@components/page-header/BitCreator';

const Bits: NextPage = () => {
    return (
        <WithAuth>
            <Layout title="Bits">
                <>
                    <Head>
                        <title>Home :: bitSIZE :: The bite sized social app</title>
                        <meta name="description"
                              content="The bite sized social app with end-to-end encrypted messaging."/>
                        <link rel="icon" href="/favicon.png"/>
                    </Head>

                    <BitCreator />
                    <BitFeed/>
                </>
            </Layout>
        </WithAuth>
    );
};

export default Bits;