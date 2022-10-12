import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data } = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
        <Head>
            <title>bitSIZE :: The bite sized social app</title>
            <meta name="description" content="The bite sized social app with end-to-end encrypted messaging." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        {data ? <p>{data.greeting}</p> : <p>Loading...</p>}
    </>
  );
};

export default Home;