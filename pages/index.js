import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const App = () => (
  <section>
    <Head>
      <title>항공사 웹사이트</title>
    </Head>
    <h1>누구나 접근할 수 있는 항공사 웹사이트</h1>
    <Link href="/Mission1">
      <a>Mission 1</a>
    </Link>
  </section>
);

export default App;
