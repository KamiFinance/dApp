import type { NextPage } from "next";
import styles from "../styles/Membership.module.css";
import { Web3Button } from '@thirdweb-dev/react';
import Link from "next/link";
import Particles from '../components/Particles';
import Image from "next/image";

const member: NextPage = () => {
  
  // Initialize our Edition Drop contract
  const editionDropAddress = "0x58f602B9098Ef521E3df4b78965c0201c39D9875";
  
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Privat Memberships</h1>
      <div className={styles.nftBoxGrid}>

        {/* Mint Gold Membership */}

        <div
          className={styles.optionSelectBox1}

        >
          
            <Image src="/goldcard.gif" width={350} height={200} alt="Gold Membership" />
            <h2 className={styles.selectBoxTitle1}>GOLD MEMBERSHIP</h2>
            <h2 className={styles.selectBoxTitle1_1}>1,500 USD</h2>
            <h2 className={styles.selectBoxTitle1_2}>1,500 ARTCM Tokens</h2>
            <a className={styles.selectBoxDescription1_1}>
            <p className={styles.selectBoxDescription1}>Physical Metal Card Gold</p>
            <p className={styles.selectBoxDescription1}>Virtual NFT Card</p>
            <p className={styles.selectBoxDescription1}>Lifetime Membership</p>
            <p className={styles.selectBoxDescription1}>Exclusive previews, talks, & Art-Show Events</p>
            <p className={styles.selectBoxDescription1}>Exclusive Limited Editions for Members</p>
            <p className={styles.selectBoxDescription1}>Exclusive pre-sale advantages</p>
            <p className={styles.selectBoxDescription1}>Access to Community Pool</p> 
            <p className={styles.selectBoxDescription1}>Contact to Artists</p> 
            <p className={styles.selectBoxDescription1}>Airdrop ARTCC Tokens</p> 
            <p className={styles.selectBoxDescription1}>Voting Rights</p>
            </a>
            <Web3Button
          contractAddress={editionDropAddress}
          action={(contract) => {
            contract.erc1155.claim(0, 1);
          }}
          onSuccess={() => {
            console.log(
              `🌊 Successfully Minted! `,
            );
          }}
          onError={(error) => {
            console.error('Failed to mint NFT', error);
          }}
        >
          Mint for 1,500 USD
        </Web3Button>
        <p></p>
        </div>


        {/* Mint Platin Membership */}

        <div
          className={styles.optionSelectBox2}
          
        >
          
          <Image src="/platincard.gif" width={350} height={200} alt="Platin Membership" />
            <h2 className={styles.selectBoxTitle2}>PLATIN MEMBERSHIP</h2>
            <h2 className={styles.selectBoxTitle2_1}>5,000 USD</h2>
            <h2 className={styles.selectBoxTitle2_2}>5,000 ARTCM Tokens</h2>
            <a className={styles.selectBoxDescription2_1}>
            <p className={styles.selectBoxDescription2}>Physical Metal Card Platin</p>
            <p className={styles.selectBoxDescription2}>Virtual NFT Card</p>
            <p className={styles.selectBoxDescription2}>Lifetime Membership</p>
            <p className={styles.selectBoxDescription2}>Exclusive previews, talks, & Art-Show Events</p>
            <p className={styles.selectBoxDescription2}>Exclusive Limited Editions for Members</p>
            <p className={styles.selectBoxDescription2}>Exclusive pre-sale advantages</p>
            <p className={styles.selectBoxDescription2}>Access to Community Pool</p>
            <p className={styles.selectBoxDescription2}>Contact to Artists</p>
            <p className={styles.selectBoxDescription2}>5% Cashback on Art/NFT*</p>
            <p className={styles.selectBoxDescription2}>Airdrop ARTCC Tokens</p> 
            <p className={styles.selectBoxDescription2}>Voting Rights</p>
            </a>
            <Web3Button
          contractAddress={editionDropAddress}
          action={(contract) => {
            contract.erc1155.claim(1, 1);
          }}
          onSuccess={() => {
            console.log(
              `🌊 Successfully Minted!`,
            );
          }}
          onError={(error) => {
            console.error('Failed to mint NFT', error);
          }}
        >
          Mint for 5,000 USD
        </Web3Button>
        <p></p>
        </div>

        <div className={styles.container}>
      {/* Second Section */}
      <h1 className={styles.h2}>Corporate Memberships</h1>
      </div>

        {/* Mint Black Membership */}

        <div
          className={styles.optionSelectBox3}
          
          >
            <Image src="/BlackMember.gif" width={350} height={200} alt="Black Member" />
            <h2 className={styles.selectBoxTitle3}>Black Membership</h2>
            <h2 className={styles.selectBoxTitle3_1}>20,000 USD</h2>
            <h2 className={styles.selectBoxTitle3_2}>20,000 ARTCM Tokens</h2>
            <a className={styles.selectBoxDescription3_1}>
            <p className={styles.selectBoxDescription3}>Physical Metal Card Black</p>    
            <p className={styles.selectBoxDescription3}>Virtual NFT Card</p>
            <p className={styles.selectBoxDescription3}>Lifetime Membership</p>
            <p className={styles.selectBoxDescription3}>Exclusive previews, talks, & Art-Show Events</p>
            <p className={styles.selectBoxDescription3}>Exclusive Limited Editions for Members</p>
            <p className={styles.selectBoxDescription3}>Exclusive pre-sale advantages</p>
            <p className={styles.selectBoxDescription3}>Access to Community Pool</p>
            <p className={styles.selectBoxDescription3}>Contact to Artists</p>
            <p className={styles.selectBoxDescription3}>10% Cashback on Art/NFT*</p>
            <p className={styles.selectBoxDescription3}>Airdrop ARTCC Tokens</p> 
            <p className={styles.selectBoxDescription3}>Voting Rights</p>
            <p className={styles.selectBoxDescription3}>Table on 1 Event</p>
            </a>
            <Web3Button
          contractAddress={editionDropAddress}
          action={(contract) => {
            contract.erc1155.claim(2, 1);
          }}
          onSuccess={() => {
            console.log(
              `🌊 Successfully Minted!  `,
            );
          }}
          onError={(error) => {
            console.error('Failed to mint NFT', error);
          }}
        >
          Mint for 20,000 USD
        </Web3Button>
        <p></p>
        </div>

         {/* Mint Black Membership */}

        <div
          className={styles.optionSelectBox4}
          
        >
          <Image src="/diamantcard.gif" width={350} height={200} alt="DiamantMember" />

          <h2 className={styles.selectBoxTitle4}>DIAMOND MEMBERSHIP</h2>
          <h2 className={styles.selectBoxTitle4_1}>PRICE UPON REQUEST</h2>
          <h2 className={styles.selectBoxTitle4_2}>Includes ARTCM Tokens</h2>
          <a className={styles.selectBoxDescription4}>
          <p className={styles.selectBoxDescription4}>Physical Metal Card Diamand</p>  
          <p className={styles.selectBoxDescription4}>Virtual NFT Card</p>
          <p className={styles.selectBoxDescription4}>Lifetime Membership</p>
          <p className={styles.selectBoxDescription4}>Exclusive previews, talks, & Art-Show Events</p>
          <p className={styles.selectBoxDescription4}>Exclusive Limited Editions for Members</p>
          <p className={styles.selectBoxDescription4}>Exclusive pre-sale advantages</p>
          <p className={styles.selectBoxDescription4}>Access to Community Pool</p>
          <p className={styles.selectBoxDescription4}>Contact to Artists</p>
          <p className={styles.selectBoxDescription4}>20% Cashback on Art/NFT*</p>
          <p className={styles.selectBoxDescription4}>Airdrop ARTCC Tokens</p> 
          <p className={styles.selectBoxDescription4}>Voting Rights</p>
          <p className={styles.selectBoxDescription4}>Branding on all Events</p>
          <p className={styles.selectBoxDescription4}>Exclusive Partner</p>
          <p className={styles.selectBoxDescription4}>Company Logo on Website</p>
          <p className={styles.selectBoxDescription4}>2 Tables at all Events</p>
          <p className={styles.selectBoxDescription4}>Shares of ARTCC Tokens</p>
          </a>
          <button>
           <Link
                  className={styles.link}
                  href="https://www.artchaincircle.com/contact"
                  target="_blank"
                >
                  Contact us
           </Link>
           </button>
        <p></p>
        </div>
        <Particles id="tsparticles" />
      </div>
    </div>
  );
};

export default member;



