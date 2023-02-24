import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";


export function Navbar() {
  const address = useAddress();

  return (
    
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="Artchain-Circle logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            
          <Link href="/market" className={styles.link}>
              Marketplace
            </Link>
            <Link href="/membership" className={styles.link}>
              Memberships
            </Link>
            <Link href="/voting" className={styles.link}>
              Voting
            </Link>
            <Link href="/stake" className={styles.link}>
              Stake ARTCM
            </Link>
            <Link href="/stakeNFT" className={styles.link}>
              Stake NFT
            </Link>
            <Link href="/BuyARTCC" className={styles.link}>
              Buy ARTCC
            </Link>
          
          </div>
          
        </div>

        <div className={styles.navRight}>

          <div className={styles.navConnect}>
          <ConnectWallet />
          </div>
          {address && (
            <Link className={styles.link1} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon1.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>

      </nav>
    </div>
  );
}
