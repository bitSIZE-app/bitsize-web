import type { NextPage } from "next";
import Head from "next/head";

import { LoginForm } from '../components/LoginForm';
import { styled } from '../styles/bitTheme';

const LoginFormWrapper = styled('div', {
    height: '100%'
});

const Home: NextPage = () => {

  return (
    <>
        <Head>
            <title>bitSIZE :: The bite sized social app</title>
            <meta name="description" content="The bite sized social app with end-to-end encrypted messaging." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <LoginFormWrapper>
            <LoginForm />
        </LoginFormWrapper>
    </>
  );
};

export default Home;