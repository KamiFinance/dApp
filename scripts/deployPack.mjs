import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "BinanceSmartChainTestnet");

  const packAddress = await sdk.deployer.deployPack({
    name: "Artchain-Circle Wrapped NFTs",
    primary_sale_recipient: "0x08A4D2f4f0E056a723Fbf1674881AA4D8D7e4a87",
  });

  console.log(`Pack address: ${packAddress}`);
})();
