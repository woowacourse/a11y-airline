import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ko">
        <Head>
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="항공사 웹사이트의 컴포넌트 접근성 높이기 미션을 수행하는 웹 페이지입니다."
            />
            <title>항공사 웹사이트 컴포넌트</title>
          </head>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
