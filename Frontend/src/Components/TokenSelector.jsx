import { useEffect, useState } from "react";

export default function TokenSelector() {
  const [tokens, setTokens] = useState([]);
  const [selectedToken, setSelectedToken] = useState(null);
  const [riskData, setRiskData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [riskLoading, setRiskLoading] = useState(false);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/tokens");
        const data = await res.json();
        setTokens(data);
      } catch (err) {
        console.error("Error fetching tokens:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  const handleCheckRisk = async () => {
    if (!selectedToken) return alert("Select a token first");
    setRiskLoading(true);
    setRiskData(null);

    try {
      const res = await fetch("http://localhost:3001/api/risk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mint: selectedToken.mint }),
      });

      const data = await res.json();
      setRiskData(data);
    } catch (err) {
      console.error("Risk check failed:", err);
    } finally {
      setRiskLoading(false);
    }
  };

  return (
    <div className="p-4">
      <label className="block font-semibold mb-2">Select Token to Buy:</label>

      {loading ? (
        <p>Loading tokens...</p>
      ) : (
        <>
          <select
            className="w-full border p-2 rounded bg-white"
            onChange={(e) => {
              const selected = tokens.find(t => t.mint === e.target.value);
              setSelectedToken(selected);
            }}
          >
            <option value="">-- Choose a Token --</option>
            {tokens.map((token) => (
              <option key={token.mint} value={token.mint}>
                {token.symbol} - {token.name || token.mint.slice(0, 4) + "..." + token.mint.slice(-4)}
              </option>
            ))}
          </select>

          <button
            onClick={handleCheckRisk}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            {riskLoading ? "Checking..." : "Check Risk"}
          </button>

          {riskData && (
            <div className="mt-4 p-3 bg-gray-100 rounded border">
              <h3 className="font-semibold mb-2">🛡️ Shield Warnings</h3>
              {riskData.warnings.length === 0 ? (
                <p className="text-green-600">No warnings — token looks safe.</p>
              ) : (
                riskData.warnings.map((warn, i) => (
                  <div key={i} className="mb-2">
                    <strong>{warn.type} ({warn.severity}):</strong> {warn.message}
                  </div>
                ))
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}



