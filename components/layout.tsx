import { PropsWithChildren } from "react";
import Head from "next/head";

interface Props {
  //
}

const Layout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>a11y-airline</title>
      </Head>
      <main className="h-full w-full p-10">{children}</main>
    </>
  );
};

export default Layout;
