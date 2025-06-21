import TokenSelector from "../Components/TokenSelector";
import "./RiskPrediction.css";

export default function RiskPrediction() {
  return (
    <div className="risk-page">
      <section className="risk-header">
        <h1 className="risk-title">🧠 Risk Prediction</h1>
        <p className="risk-subtitle">
          Analyze tokens for rugpull risks using Jupiter Shield API.
        </p>
      </section>

      <section className="risk-token-section">
        <TokenSelector />
      </section>
    </div>
  );
}
