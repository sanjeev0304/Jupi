import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./WalletConnect.css";

export default function WalletConnect() {
  return (
    <div className="wallet-button-container">
      <WalletMultiButton className="custom-wallet-button" />
    </div>
  );
}


