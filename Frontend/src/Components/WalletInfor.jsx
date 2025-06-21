import { useEffect, useState } from "react";
import { useWalletInfo } from "../hooks/useWalletInfo";
import "./WalletInfo.css";

export default function WalletInfo() {
  const { sol, tokens, publicKey } = useWalletInfo();
  const [tokenRisks, setTokenRisks] = useState({});

  useEffect(() => {
    const fetchRisks = async () => {
      const risks = {};
      for (const token of tokens) {
        try {
          const res = await fetch("https://jupi-jj8t.onrender.com/api/risk", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mint: token.mint }),
          });
          const data = await res.json();
          risks[token.mint] = data;
        } catch (err) {
          risks[token.mint] = { warnings: [] }; // Assume safe if fail
        }
      }
      setTokenRisks(risks);
    };

    if (tokens.length) fetchRisks();
  }, [tokens]);

  if (!publicKey) return null;

  return (
    <div className="wallet-section">
      <h2 className="section-title">Wallet Info</h2>

      <div className="address-container">
        <span className="address-label">Address:</span>
        <span className="address-value font-mono">{publicKey.toBase58()}</span>
      </div>

      <div className="balance-container">
        <span className="balance-label">SOL Balance:</span>
        <span className="balance-value">{sol ?? "Loading..."} SOL</span>
      </div>

      <div className="tokens-header">
        <span className="text-text-main font-medium">SPL Tokens</span>
      </div>

      <div className="token-list">
        {tokens.length === 0 ? (
          <div className="token-item text-text-secondary">No tokens found</div>
        ) : (
          tokens.map((token, i) => {
            const risk = tokenRisks[token.mint];
            let badge = "🟢 Safe";

            if (risk?.warnings?.length) {
              const hasLowOrganic = risk.warnings.some(w => w.type === "LOW_ORGANIC_ACTIVITY");
              badge = hasLowOrganic ? "🔴 High Risk" : "🟡 Warning";
            }

            return (
              <div className="token-item" key={i}>
                <span className="token-address font-mono">
                  {token.mint.slice(0, 6)}...{token.mint.slice(-4)}
                </span>
                <span className="token-balance">{token.amount}</span>
                <span className={`risk-badge ${badge.includes("High") ? "high" : badge.includes("Warning") ? "warning" : "safe"}`}>
                  {badge}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
