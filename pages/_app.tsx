import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Next13App</title>
      <link rel="shortcut icon" href="thirteen.svg" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </>;
}
