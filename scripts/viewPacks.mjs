import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "BinanceSmartChainTestnet");

  const pack = await sdk.getContract(
    "0xdbe894dF5679896eEe35E4B5A5Dae0c8Da4C1f8F",
    'pack',
  );

  const packNfts = await pack.getAll();

  console.log(packNfts);
})();
