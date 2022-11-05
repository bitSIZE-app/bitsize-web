import { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@components/layout';
import { SearchBar } from '@components/page-headers/SearchBar';
import { SearchFeed } from '@components/feeds/SearchFeed';
import { trpc } from '@utils/trpc';
import { useMemo, useState } from 'react';

const Search:NextPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = trpc.search.searchBitsUsers.useQuery({ searchTerm });

    const onSearchChange = (val: string) => {
        setSearchTerm(val);
    }

    return (
        <Layout title="Search">
            <>
                <Head>
                    <title>Search :: bitSIZE :: The bite sized social app</title>
                    <meta name="description"
                          content="The bite sized social app with end-to-end encrypted messaging."/>
                    <link rel="icon" href="/favicon.png"/>
                </Head>

                <SearchBar onSearchChange={onSearchChange}/>
                <SearchFeed searchResults={searchResults.data} />
            </>
        </Layout>
    )
}

export default Search;