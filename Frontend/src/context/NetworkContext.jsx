import { createContext, useState, useContext } from "react";

const NetworkContext = createContext();

export const useNetwork = () => useContext(NetworkContext);

export const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState("mainnet-beta");

  const endpointMap = {
    "mainnet-beta": "https://mainnet.helius-rpc.com/?api-key=f69af4d8-b86b-43f1-810e-633b06b5469a",
    devnet: "https://api.devnet.solana.com",
    testnet: "https://api.testnet.solana.com",
  };

  const value = {
    network,
    setNetwork,
    endpoint: endpointMap[network],
  };

  return (
    <NetworkContext.Provider value={value}>
      {children}
    </NetworkContext.Provider>
  );
};
