import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  useAddress, ConnectWallet } from "@thirdweb-dev/react";

//INTERNAL IMPORT
import Style from "./TokenList.module.css";
import images from "../../assets";

const TokenList = ({ tokenDate, setopenTokenBox }) => {
  const address = useAddress();
  
  return (
    <div className={Style.TokenList}>
      <p className={Style.TokenList_close}
        onClick={() => setopenTokenBox(false)}
        >
          <Image src={images.close} alt="close" width={20} height={20} />
        </p>
        

        <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/market" passHref role="button">
             Marketplace
          </Link>
          </div> 
        
        <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/membership" passHref role="button">
             Membership´s
          </Link>
          </div> 

          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/stakeNFT" passHref role="button" >
          Stake Membership
          </Link>
          </div>

        <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/stake" passHref role="button">
             Stake ARTCM
          </Link>
          </div>
          
          

          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/BuyARTCC" passHref role="button">
          Buy ARTCC
          </Link>
          </div> 

          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/voting" passHref role="button">
             DAO Voting 
          </Link>
          <p></p>
          
          

          </div>
          <p></p>
          <div className={Style.mainButton3}>
          <ConnectWallet  />
          </div>
          
          </div>
          
       
          
              
             
            
         
  );  
};

export default TokenList;
