import {
    ConnectWallet,
    useAddress,
    useContract,
    useContractRead,
    useContractWrite,
    useTokenBalance,
    Web3Button,
  } from "@thirdweb-dev/react";
  
  import { ethers } from "ethers";
  
  import { useEffect, useState } from "react";
  import styles from "../styles/stake.module.css";
  import Particles from '../components/Particles';
  
  const stakingContractAddress = "0x62690632B3e5957f00c48e58fd69bd9b47024C1E";
  
  export default function Home() {
    const address = useAddress();
    const [amountToStake, setAmountToStake] = useState(0);
  
    // Initialize all the contracts
    const { contract: staking, isLoading: isStakingLoading } = useContract(
      stakingContractAddress,
      "custom"
    );
  
    // Get contract data from staking contract
    const { data: rewardTokenAddress } = useContractRead(staking, "rewardToken");
    const { data: stakingTokenAddress } = useContractRead(
      staking,
      "stakingToken"
    );
  
    // Initialize token contracts
    const { contract: stakingToken, isLoading: isStakingTokenLoading } =
      useContract(stakingTokenAddress, "token");
    const { contract: rewardToken, isLoading: isRewardTokenLoading } =
      useContract(rewardTokenAddress, "token");
  
    // Token balances
    const { data: stakingTokenBalance, refetch: refetchStakingTokenBalance } =
      useTokenBalance(stakingToken, address);
    const { data: rewardTokenBalance, refetch: refetchRewardTokenBalance } =
      useTokenBalance(rewardToken, address);
  
    // Get staking data
    const {
      data: stakeInfo,
      refetch: refetchStakingInfo,
      isLoading: isStakeInfoLoading,
    } = useContractRead(staking, "getStakeInfo", address || "0");
  
    useEffect(() => {
      setInterval(() => {
        refetchData();
      }, 10000);
    }, []);
  
    const refetchData = () => {
      refetchRewardTokenBalance();
      refetchStakingTokenBalance();
      refetchStakingInfo();
    };
  
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Stake your ARTCM to get ARTCC!</h1>
  
          <p></p>
  
          <div className={styles.connect}>
            <ConnectWallet />
          </div>
  
          <div className={styles.stakeContainer}>
            <input
              className={styles.textbox}
              type="number"
              value={amountToStake}
              onChange={(e) => setAmountToStake(e.target.value)}
            />
  
            <Web3Button
              className={styles.button}
              contractAddress={stakingContractAddress}
              action={async (contract) => {
                await stakingToken.setAllowance(
                  stakingContractAddress,
                  amountToStake
                );
                await contract.call(
                  "stake",
                  ethers.utils.parseEther(amountToStake)
                );
                alert("Tokens staked successfully!");
              }}
            >
              Stake!
            </Web3Button>
  
            <Web3Button
              className={styles.button}
              contractAddress={stakingContractAddress}
              action={async (contract) => {
                await contract.call(
                  "withdraw",
                  ethers.utils.parseEther(amountToStake)
                );
                alert("Tokens unstaked successfully!");
              }}
            >
              Unstake!
            </Web3Button>
  
            <Web3Button
              className={styles.button}
              contractAddress={stakingContractAddress}
              action={async (contract) => {
                await contract.call("claimRewards");
                alert("Rewards claimed successfully!");
              }}
            >
              Claim rewards!
            </Web3Button>
          </div>
  
          <div className={styles.grid}>
            <a className={styles.card}>
              <h2>ARTCM balance</h2>
              <p>{stakingTokenBalance?.displayValue}</p>
            </a>
  
            <a className={styles.card}>
              <h2>ARTCC balance</h2>
              <p>{rewardTokenBalance?.displayValue}</p>
            </a>
  
            <a className={styles.card}>
              <h2>Staked amount</h2>
              <p>
                {stakeInfo && ethers.utils.formatEther(stakeInfo[0].toString())}
              </p>
            </a>
  
            <a className={styles.card}>
              <h2>Current reward</h2>
              <p>
                {stakeInfo && ethers.utils.formatEther(stakeInfo[1].toString())}
              </p>
            </a>
          </div>
          <Particles id="tsparticles" />
        </main>
      </div>
    );
  }