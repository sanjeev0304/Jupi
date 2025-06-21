import { useNetwork } from "../context/NetworkContext";

export default function NetworkSelector() {
  const { network, setNetwork } = useNetwork();

  return (
    <div className="p-4">
      <label className="mr-2 font-medium">Select Network:</label>
      <select
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
        className="border p-1 rounded"
      >
        <option value="mainnet-beta">Mainnet</option>
        <option value="devnet">Devnet</option>
        <option value="testnet">Testnet</option>
      </select>
    </div>
  );
}
