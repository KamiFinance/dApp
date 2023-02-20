import type { NextPage } from "next";
import styles from "../styles/Voting.module.css";
import { Web3Button } from '@thirdweb-dev/react';
import Link from "next/link";
import Particles from '../components/Particles';
import Image from "next/image";


const member: NextPage = () => {
  
  
  
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Artchain-Circle DAO</h1>
      <div className={styles.nftBoxGrid}>

        {/* Mint Gold Membership */}

        <div
          className={styles.optionSelectBox1}

        >
          
          <Image src="/goldcard.gif" width={350} height={200} alt="Gold Membership" />
            <h2 className={styles.selectBoxTitle1}>Gold Members Vote</h2>
            <h2 className={styles.selectBoxTitle1_1}></h2>
            <h2 className={styles.selectBoxTitle1_2}>1,500 ARTCM Vote Power</h2>
            <p></p>
            <button>
            <Link href="/GoldVote" className={styles.link}>
              Vote Now !
            </Link>
            </button>
        <p></p>
        </div>


        {/* Mint Platin Membership */}

        <div
          className={styles.optionSelectBox2}
          
        >
            <Image src="/platincard.gif" width={350} height={200} alt="Platin Member" />
            <h2 className={styles.selectBoxTitle2}>Platin Members Vote</h2>
            <h2 className={styles.selectBoxTitle2_1}></h2>
            <h2 className={styles.selectBoxTitle2_2}>5,000 ARTCM Vote Power</h2>
            <p></p>
            <button>
            <Link href="/PlatinumVote" className={styles.link}>
              Vote Now!
            </Link>
            </button>
        <p></p>
        </div>

      

        {/* Mint Black Membership */}

        <div
          className={styles.optionSelectBox3}
          
          >
            <Image src="/BlackMember.gif" width={350} height={200} alt="Black Member" />
            <h2 className={styles.selectBoxTitle3}>Black Members Vote</h2>
            <h2 className={styles.selectBoxTitle3_1}></h2>
            <h2 className={styles.selectBoxTitle3_2}>20,000 ARTCM Voting Power</h2>
            <p></p>
            <button>
            <Link href="/BlackVote" className={styles.link}>
              Vote Now !
            </Link>
            </button>
        <p></p>
        </div>

         {/* Mint Black Membership */}

        <div
          className={styles.optionSelectBox4}
         
        >
          <Image src="/diamantcard.gif" width={350} height={200} alt="DiamantMember" />
          <h2 className={styles.selectBoxTitle4}>Diamond Members Vote</h2>
          <h2 className={styles.selectBoxTitle4_1}></h2>
          <h2 className={styles.selectBoxTitle4_2}>xxx ARTCM Voting Power</h2>
          <p></p>
          <button>
            <Link href="/DiamantVote" className={styles.link}>
             Vote Now !
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



