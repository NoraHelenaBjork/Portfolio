import Head from "next/head";
import React, { useEffect } from 'react';
import '../styles/globals.scss';
import DiamondLoader from "../components/utils/diamondLoader";
import { keyframes, css } from "styled-components";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `;

  function stopLoading() {
    const loader = document.getElementById('globalLoader');
    if (loader) {

      // Then hide it after animation
      setTimeout(() => {
        loader.classList.add('fade-out');
        //loader.style.display = 'none';
      }, 1650);

      setTimeout(() => {
        loader.style.display = 'none';
      }, 2150);

    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      stopLoading();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Nora Björk</title>
        <meta name="description" content="Swedish full stack developer and startup founder" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="appleIcon.png" />
        <meta name='Nora Björk' content='Nora Björks website'></meta>
        <meta name="theme-color" content="#11041D" ></meta>
      </Head>
      <div id='globalLoader'>
        <DiamondLoader />
      </div>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
