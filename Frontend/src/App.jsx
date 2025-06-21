import WalletConnect from "./Components/WalletConnection";
import WalletInfo from "./Components/WalletInfor";
import NetworkSelector from "./Components/NetwrokSelector";
import TokenSelector from "./Components/TokenSelector";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mt-10">SafeSwap</h1>
      {/* <NetworkSelector /> */}
      <WalletConnect />
      < WalletInfo />
      <TokenSelector />

    </div>
  );
}

export default App;
