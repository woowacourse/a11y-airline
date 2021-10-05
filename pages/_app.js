import '../global.css';

import Link from 'next/link';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/SpinButton">
            <a>Spin Button</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/message">
            <a>Message</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </>
  );
};

export default App;
