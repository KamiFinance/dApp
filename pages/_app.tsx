import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK_ID } from "../const/contractAddresses";
import "../styles/globals.css";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={NETWORK_ID}>
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      
      {/* Render the actual component (page) */}
      <Head>
        <title>Artchain Circle dApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Artchain Circle dApp is the first of its kind, a unique and innovative collective that builds bridges between physical art and blockchain. "
        />
        <meta
          name="keywords"
          content="Artchain Circle, Buy BEP20, NFC Marketplace, NFT Auction, Dao "
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
