
import WalletConnect from "./WalletConnection";
import WalletInfo from "./WalletInfor";
// import TokenSelector from "../components/TokenSelector"; // optional
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🧠 SafeSwap Dashboard</h1>
        <WalletConnect />
      </header>

      <main className="dashboard-main">
        <WalletInfo />
        {/* <TokenSelector />  // Uncomment if needed */}
      </main>
    </div>
  );
}
