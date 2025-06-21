import { useEffect, useState } from "react";

export default function TokenSelector({ selectedToken, setSelectedToken }) {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/tokens");
        if (!res.ok) {
          throw new Error(`Failed to fetch tokens: ${res.status}`);
        }
        const data = await res.json();
        setTokens(data);
      } catch (err) {
        console.error("Token fetch error", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTokens();
  }, []);

  return (
    <div className="p-4">
      <label className="block font-semibold mb-2">Select Token to Buy:</label>

      {loading ? (
        <p className="text-sm text-gray-500">🔄 Loading tokens...</p>
      ) : error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : (
        <select
          className="w-full border p-2 rounded bg-white"
          value={selectedToken}
          onChange={(e) => setSelectedToken(e.target.value)}
        >
          <option value="">-- Choose a Token --</option>
          {tokens.map((token) => (
            <option key={token.mint} value={token.mint}>
              {token.symbol} - {token.name || token.mint.slice(0, 4) + "..." + token.mint.slice(-4)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}