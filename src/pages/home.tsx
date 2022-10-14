import type { NextPage } from "next";
import Head from "next/head";
import {Layout} from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
        <Head>
            <title>Home :: bitSIZE :: The bite sized social app</title>
            <meta name="description" content="The bite sized social app with end-to-end encrypted messaging." />
            <link rel="icon" href="/favicon.png" />
        </Head>
    </Layout>
  );
};

export default Home;