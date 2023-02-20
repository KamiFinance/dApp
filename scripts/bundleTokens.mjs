import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import { ThirdwebStorage } from "@thirdweb-dev/storage";

(async () => {
  const packAddress = "0xdbe894dF5679896eEe35E4B5A5Dae0c8Da4C1f8F";
  const tokenAddress = "0xf76c3a4844249F7A5357D5ec68f80549C7952497";
  const editionAddress = "0x58f602B9098Ef521E3df4b78965c0201c39D9875";

  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "BinanceSmartChainTestnet");

  const pack = await sdk.getContract(packAddress, 'pack');

  // Set approval for the pack contract to act upon token and edition contracts
  const token = await sdk.getContract(tokenAddress, 'token');
  await token.setAllowance(packAddress, 100);

  console.log("Set approval for token");

  const edition = await sdk.getContract(editionAddress, 'edition');
  await edition.setApprovalForAll(packAddress, true);

  console.log("Set Approval for edition");

  // Read in the chest.png as a File using fs
  const chestFile = fs.readFileSync("./scripts/chest.png");

  // Upload the Chest to IPFS
  const storage = new ThirdwebStorage();
  const uri = await storage.upload(chestFile);

  console.log("Uploaded chest asset to IPFS");

  console.log("Creating packs now...");

  const packNfts = await pack.create({
    packMetadata: {
      name: "Artchain-Circle Wrapped NFTs",
      description:
        "Open your Wrapped NFT to get your Membercard and Tokens",
      image: uri,
    },

    // ARTCM ERC-20 Tokens
    erc20Rewards: [
      {
        contractAddress: tokenAddress,
        quantityPerReward: 1,
        quantity: 100,
        totalRewards: 20,
      },
    ],

    erc1155Rewards: [
      // Membership
      {
        contractAddress: editionAddress,
        tokenId: 0,
        quantityPerReward: 1,
        totalRewards: 100,
      },
      

    ],
    rewardsPerPack: 5,
  });

  console.log(`====== Success: Pack NFTs =====`);

  console.log(packNfts);
})();
