import {
    useAddress,
    useNetwork,
    useContract,
    ConnectWallet,
    Web3Button,
    useNFTBalance,
    useContractRead,
  } from '@thirdweb-dev/react';
  import { ChainId } from '@thirdweb-dev/sdk';
  import { useState, useEffect, useMemo } from 'react';
  import { AddressZero } from '@ethersproject/constants';
  import styles from "../styles/dao.module.css";
  import Particles from '../components/Particles';
  import Image from "next/image";
  import Link from "next/link";
  
  const PlatinumVote = () => {
    // Use the hooks thirdweb give us.
    const address = useAddress();
    const network = useNetwork();
    console.log('👋 Address:', address);
    // Initialize our Edition Drop contract
    const editionDropAddress = '0x58f602B9098Ef521E3df4b78965c0201c39D9875';
    const { contract: editionDrop } = useContract(
      editionDropAddress,
       
   
        
    );
    
    // Initialize our token contract
    const { contract: token } = useContract(
      '0xf76c3a4844249F7A5357D5ec68f80549C7952497',
      
    );
    const { contract: vote } = useContract(
      '0x850D08a7901d49af93b375976f66c7e0D88D78BA',
      
    );
    
    // Hook to check if the user has our NFT
    const { data: nftBalance } = useNFTBalance (editionDrop, address, '1' );
    
  
    const hasClaimedNFT = useMemo(() => {
      return nftBalance && nftBalance.gt(0);
    }, [nftBalance]);
  
    // Holds the amount of token each member has in state.
    const [memberTokenAmounts, setMemberTokenAmounts] = useState([]);
    // The array holding all of our members addresses.
    const [memberAddresses, setMemberAddresses] = useState([]);
  
    // A fancy function to shorten someones wallet address, no need to show the whole thing.
    const shortenAddress = (str) => {
      return str.substring(0, 6) + '...' + str.substring(str.length - 4);
    };
  
    const [proposals, setProposals] = useState([]);
    const [isVoting, setIsVoting] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
  
    // Retrieve all our existing proposals from the contract.
    useEffect(() => {
      if (hasClaimedNFT) {
        return;
      }
  
      // A simple call to vote.getAll() to grab the proposals.
      const getAllProposals = async () => {
        try {
          const proposals = await vote.getAll();
          setProposals(proposals);
          console.log('🌈 Proposals:', proposals);
        } catch (error) {
          console.log('failed to get proposals', error);
        }
      };
      getAllProposals();
    }, [hasClaimedNFT, vote]);
  
    // We also need to check if the user already voted.
    useEffect(() => {
      if (!hasClaimedNFT) {
        return;
      }
  
      // If we haven't finished retrieving the proposals from the useEffect above
      // then we can't check if the user voted yet!
      if (!proposals.length) {
        return;
      }
  
      const checkIfUserHasVoted = async () => {
        try {
          const hasVoted = await vote.hasVoted(proposals[0].proposalId, address);
          setHasVoted(hasVoted);
          if (hasVoted) {
            console.log('🥵 User has already voted');
          } else {
            console.log('🙂 User has not voted yet');
          }
        } catch (error) {
          console.error('Failed to check if wallet has voted', error);
        }
      };
      checkIfUserHasVoted();
    }, [hasClaimedNFT, proposals, address, vote]);
  
    // This useEffect grabs all the addresses of our members holding our NFT.
    useEffect(() => {
      if (!hasClaimedNFT) {
        return;
      }
  
      // Just like we did in the 7-airdrop-token.js file! Grab the users who hold our NFT
      // with tokenId 0.
      const getAllAddresses = async () => {
        try {
          const memberAddresses =
            await editionDrop?.history.getAllClaimerAddresses(0);
          setMemberAddresses(memberAddresses);
          console.log('🚀 Members addresses', memberAddresses);
        } catch (error) {
          console.error('failed to get member list', error);
        }
        };
      getAllAddresses();
      
    }, [hasClaimedNFT, editionDrop?.history]);
    
  
    // This useEffect grabs the # of token each member holds.
    useEffect(() => {
      if (!hasClaimedNFT) {
        return;
      }
  
      const getAllBalances = async () => {
        try {
          const amounts = await token?.history.getAllHolderBalances();
          setMemberTokenAmounts(amounts);
          console.log('👜 Amounts', amounts);
        } catch (error) {
          console.error('failed to get member balances', error);
        }
      };
      getAllBalances();
    }, [hasClaimedNFT, token?.history]);
  
    // Now, we combine the memberAddresses and memberTokenAmounts into a single array
    const memberList = useMemo(() => {
      return memberAddresses.map((address) => {
        // We're checking if we are finding the address in the memberTokenAmounts array.
        // If we are, we'll return the amount of token the user has.
        // Otherwise, return 0.
        const member = memberTokenAmounts?.find(
          ({ holder }) => holder === address,
        );
  
        return {
          address,
          tokenAmount: member?.balance.displayValue || '0',
        };
      });
    }, [memberAddresses, memberTokenAmounts]);
  
    if (address && network?.[0].data.chain.id !== ChainId.BinanceSmartChainTestnet) {
      return (
        <div className={styles.unsupported_network}>
          <h2>Please connect to BinanceSmartChain</h2>
          <p>
            This dapp only works on the BinanceSmartChain network, please switch networks in
            your connected wallet.
          </p>
          <Particles id="tsparticles" />
        </div>
      );
    }
  
    // This is the case where the user hasn't connected their wallet
    // to your web app. Let them call connectWallet.
    if (!address) {
      return (
        <div className={styles.landing}>
          <h1>Please Connect Your Wallet</h1>
          <div className={styles.btn_hero}>
            <ConnectWallet />
          </div>
          <Particles id="tsparticles" />
        </div>
      );
    }
  
    // If the user has already claimed their NFT we want to display the interal DAO page to them
    // only DAO members will see this. Render all the members + token amounts.
    if (hasClaimedNFT) {
      return (
        <div className={styles.member_page}>
          <h1>Artchain-Circle Platinum Voting Page</h1>
          <p>Please vote for our next artist</p>
          <div>
            <div>
              <h2>Member List</h2>
              <table className={styles.card}>
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Token Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {memberList.map((member) => {
                    return (
                      <tr key={member.address}>
                        <td>{shortenAddress(member.address)}</td>
                        <td>{member.tokenAmount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h2>Active Proposals</h2>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
  
                  //before we do async things, we want to disable the button to prevent double clicks
                  setIsVoting(true);
  
                  // lets get the votes from the form for the values
                  const votes = proposals.map((proposal) => {
                    const voteResult = {
                      proposalId: proposal.proposalId,
                      //abstain by default
                      vote: 2,
                    };
                    proposal.votes.forEach((vote) => {
                      const elem = document.getElementById(
                        proposal.proposalId + '-' + vote.type,
                      );
  
                      if (elem.checked) {
                        voteResult.vote = vote.type;
                        return;
                      }
                    });
                    return voteResult;
                  });
  
                  // first we need to make sure the user delegates their token to vote
                  try {
                    //we'll check if the wallet still needs to delegate their tokens before they can vote
                    const delegation = await token.getDelegationOf(address);
                    // if the delegation is the 0x0 address that means they have not delegated their governance tokens yet
                    if (delegation === AddressZero) {
                      //if they haven't delegated their tokens yet, we'll have them delegate them before voting
                      await token.delegateTo(address);
                    }
                    // then we need to vote on the proposals
                    try {
                      await Promise.all(
                        votes.map(async ({ proposalId, vote: _vote }) => {
                          // before voting we first need to check whether the proposal is open for voting
                          // we first need to get the latest state of the proposal
                          const proposal = await vote.get(proposalId);
                          // then we check if the proposal is open for voting (state === 1 means it is open)
                          if (proposal.state === 1) {
                            // if it is open for voting, we'll vote on it
                            return vote.vote(proposalId, _vote);
                          }
                          // if the proposal is not open for voting we just return nothing, letting us continue
                          return;
                        }),
                      );
                      try {
                        // if any of the propsals are ready to be executed we'll need to execute them
                        // a proposal is ready to be executed if it is in state 4
                        await Promise.all(
                          votes.map(async ({ proposalId }) => {
                            // we'll first get the latest state of the proposal again, since we may have just voted before
                            const proposal = await vote.get(proposalId);
  
                            //if the state is in state 4 (meaning that it is ready to be executed), we'll execute the proposal
                            if (proposal.state === 4) {
                              return vote.execute(proposalId);
                            }
                          }),
                        );
                        // if we get here that means we successfully voted, so let's set the "hasVoted" state to true
                        setHasVoted(true);
                        // and log out a success message
                        console.log('successfully voted');
                      } catch (err) {
                        console.error('failed to execute votes', err);
                      }
                    } catch (err) {
                      console.error('failed to vote', err);
                    }
                  } catch (err) {
                    console.error('failed to delegate tokens');
                  } finally {
                    // in *either* case we need to set the isVoting state to false to enable the button again
                    setIsVoting(false);
                  }
                }}
              >
                {proposals.map((proposal) => (
                  <div key={proposal.proposalId} className={styles.card}>
                    <h5>{proposal.description}</h5>
                    <div>
                      {proposal.votes.map(({ type, label }) => (
                        <div key={type}>
                          <input
                            type="radio"
                            id={proposal.proposalId + '-' + type}
                            name={proposal.proposalId}
                            value={type}
                            //default the "abstain" vote to checked
                            defaultChecked={type === 2}
                          />
                          <label htmlFor={proposal.proposalId + '-' + type}>
                            {label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <p></p>
                <button disabled={isVoting || hasVoted} type="submit">
                  {isVoting
                    ? 'Voting...'
                    : hasVoted
                    ? 'You Already Voted'
                    : 'Submit Votes'}
                </button>
                <p></p>
                {!hasVoted && (
                  <small>
                    This will trigger multiple transactions that you will need to
                    sign.
                  </small>
                )}
                <p></p>
              </form>
            </div>
            <Particles id="tsparticles" />
          </div>
        </div>
      );
    }
    
    // Render mint nft screen.
    return (
      
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>Please mint a membership to vote</h1>
        <p></p>
        <h1 className={styles.h3}>Privat Memberships</h1>
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
        <h1 className={styles.h3}>Corporate Memberships</h1>
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
    }
  
  export default PlatinumVote;
  