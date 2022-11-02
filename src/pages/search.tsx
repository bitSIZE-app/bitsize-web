import { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@components/layout';
import { SearchFeed } from '@components/SearchFeed';
import { SearchBar } from '@components/search/SearchBar';

const Search:NextPage = () => {
    return (
        <Layout title="Search">
            <>
                <Head>
                    <title>Search :: bitSIZE :: The bite sized social app</title>
                    <meta name="description"
                          content="The bite sized social app with end-to-end encrypted messaging."/>
                    <link rel="icon" href="/favicon.png"/>
                </Head>

                <SearchBar />
                <SearchFeed />
            </>
        </Layout>
    )
}

export default Search;