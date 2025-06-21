import { useWalletInfo } from "../hooks/useWalletInfo";

export default function WalletInfo() {
  const { sol, tokens, publicKey } = useWalletInfo();

  if (!publicKey) return null;

  return (
    <div className="p-4 bg-white rounded shadow mx-auto mt-4 max-w-md">
      <h2 className="text-lg font-bold mb-2">Wallet Info</h2>
      <p><strong>Address:</strong> {publicKey.toBase58()}</p>
      <p><strong>SOL Balance:</strong> {sol ?? "Loading..."} SOL</p>
      <div className="mt-2">
        <strong>SPL Tokens:</strong>
        <ul className="list-disc ml-5">
          {tokens.length === 0 && <li>No tokens</li>}
          {tokens.map((token, i) => (
            <li key={i}>
              {token.mint.slice(0, 6)}...: {token.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
