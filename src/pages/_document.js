import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="누구나 접근할 수 있는 항공사 웹사이트" />
          <title>웹 접근성 미션</title>
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main>
            <div id="root"></div>
          </Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
