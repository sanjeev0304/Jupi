import { useEffect, useState } from "react";
import "./TokenSelector.css";

const SOL_MINT = "So11111111111111111111111111111111111111112";

export default function TokenSelector() {
  const [tokens, setTokens] = useState([]);
  const [selectedToken, setSelectedToken] = useState(null);
  const [riskData, setRiskData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [riskLoading, setRiskLoading] = useState(false);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const res = await fetch("https://jupi-jj8t.onrender.com/api/tokens");
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
    if (!selectedToken) return alert("Please select a token.");
    setRiskLoading(true);
    setRiskData(null);

    try {
      const res = await fetch("https://jupi-jj8t.onrender.com/api/risk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mint: selectedToken.mint }),
      });

      const data = await res.json();
      setRiskData(data);
    } catch (err) {
      console.error("Risk fetch error:", err);
      alert("Risk check failed. Try again.");
    } finally {
      setRiskLoading(false);
    }
  };

  const handleSwapNow = () => {
    const explorer = `https://jup.ag/swap/SOL-${selectedToken.symbol}?amount=1`;
    window.open(explorer, "_blank");
  };

  const isHighRisk = () => {
    if (!riskData?.warnings) return false;
    return riskData.warnings.some(
      (warn) => warn.type === "LOW_ORGANIC_ACTIVITY" 
    );
  };

  return (
    <div className="token-wrapper">
      <h2 className="title">🛡️ Token Risk Analyzer</h2>

      {loading ? (
        <p className="loading-text">Loading tokens...</p>
      ) : (
        <>
          <div className="selector-box">
            <select
              className="dropdown"
              onChange={(e) => {
                const selected = tokens.find(t => t.mint === e.target.value);
                setSelectedToken(selected);
                setRiskData(null);
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
              disabled={!selectedToken || riskLoading}
              className="check-button"
            >
              {riskLoading ? "Checking..." : "Check Risk"}
            </button>
          </div>

          {riskData && (
            <div className="risk-report">
              <h3 className="report-title">📊 Risk Report</h3>

              {riskData.warnings.length === 0 ? (
                <div className="safe-box">✅ No warnings — token looks safe!</div>
              ) : (
                <div className="warning-box">
                  ⚠️ <strong>Warnings Detected</strong>
                  <ul>
                    {riskData.warnings.map((w, i) => (
                      <li key={i}>
                        {w.type} 
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {isHighRisk() && (
                <button className="swap-button" onClick={handleSwapNow}>
                  🚨 Swap Risky Token
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
