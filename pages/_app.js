/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import GlobalStyles from '../GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
