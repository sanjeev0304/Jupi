import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";

import {
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import "@solana/wallet-adapter-react-ui/styles.css";

// 🆕 Import NetworkContext
import { NetworkProvider, useNetwork } from "./context/NetworkContext";

// 🆕 Create component that consumes dynamic network
const AppWithProviders = () => {
  const { endpoint } = useNetwork();
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

// 🧠 Wrap entire app with NetworkProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <NetworkProvider>
    <AppWithProviders />
  </NetworkProvider>
);
