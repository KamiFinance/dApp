import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContract } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import Particles from '../components/Particles';

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  const router = useRouter();
  const Banner9 = (
    <div className={styles.slide} role="button"
    onClick={() => router.push(`https://bscscan.com/`)} >
      <Image src="/bscscan.svg" height="38" width="258" alt="bscscan" />
    </div>
  );
  const Banner6 = (
    <div className={styles.slide1} role="button"
    onClick={() => router.push(`https://www.coinbase.com/de/wallet`)}>
      <Image src="/coinbase.png" height="48" width="208" alt="coinbase" />
    </div>
  ); 
  const Banner2 = (
    <div className={styles.slide2} role="button"
    onClick={() => router.push(`https://www.bnbchain.org/en/`)}>
      <Image src="/binance.svg" height="38" width="208" alt="BinanceSmartChain" />
    </div>
  );
  const Banner3 = (
    <div className={styles.slide3} role="button"
    onClick={() => router.push(`https://www.online-empire-webdesign.com/`)}>
      <Image src="/online-empire.png" height="48" width="208" alt="online-empire" />
    </div>
  );
  const Banner4 = (
    <div className={styles.slide4} role="button"
    onClick={() => router.push(`https://metamask.io/`)}>
      <Image src="/metamask.png" height="35" width="208" alt="metamask" />
    </div>
  );
  const Banner5 = (
    <div className={styles.slide5} role="button"
    onClick={() => router.push(`https://walletconnect.com/`)}>
      <Image src="/walletconnect.png" height="30" width="208" alt="walletconnect" />
    </div>
  );
  const Banner1 = (
    <div className={styles.slide6} role="button"
    onClick={() => router.push(`https://kami.finance`)}>
      <Image src="/Kami-Finance.png" height="38" width="188" alt="Kami.Finance" />
    </div>
  ); 
  const Banner7 = (
    <div className={styles.slide7} role="button"
    onClick={() => router.push(`https://pancakeswap.finance/?chain=bsc`)}>
      <Image src="/Pancakeswap.svg" height="38" width="250" alt="PanecakeSwap" />
    </div>
  ); 
  const Banner8 = (
    <div className={styles.slide8} role="button"
    onClick={() => router.push(`http://eventloge.de/`)}>
      <Image src="/Eventloge.png" height="35" width="230" alt="Eventloge" />
    </div>
  ); 
  const Banner = (
    <div className={styles.slide9} role="button"
    onClick={() => router.push(`http://deificusart.com/`)}>
      <Image src="/deificuslogo.png" height="35" width="230" alt="deificus" />
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/home1.jpeg"
              width={1360}
              height={640}
              alt="Home"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                WE ARE THE FUTURE OF 
                </span>
                <br />
                THE ART MARKET.
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://www.artchaincircle.com/"
                  target="_blank"
                >
                  Artchain Circle 
                </Link>{" "}
                 is the first of its kind, a unique and innovative collective that builds bridges between <b>physical</b> art and <b>blockchain</b>.
              </p>

              <div className={styles.heroCtaContainer}>
              <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {Banner1}
        {Banner2}
        {Banner3}
        {Banner4}
        {Banner5}
        {Banner6}
        {Banner7}
        {Banner8}
        {Banner9}
        {Banner}
        {Banner1}
        {Banner2}
        {Banner3}
        {Banner4}
        {Banner5}
        {Banner6}
        {Banner7}
        {Banner8}
        {Banner9}
        {Banner}
      </div>
    </div>
              </div>
              <Particles id="tsparticles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
