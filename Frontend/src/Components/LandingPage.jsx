import { Link } from "react-router-dom";
import "./LandingPage.css";
import tradeImg from "./trade.jpg";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1 className="hero-title">Jupi Shield 🛡️</h1>
        <p className="hero-subtitle">
          Protect your crypto swaps from rugpulls. Detect high-risk tokens with
          real-time intelligence powered by the Jupiter API.
        </p>
        <Link to="/dashboard" className="cta-button">
          Launch Dashboard
        </Link>
      </section>

      <div className="section-image">
          <img
            src={tradeImg}
            alt="Crypto dashboard"
          />
        </div>

      <section className="info-section">
        <h2>🕳️ What is a Rugpull?</h2>
        <p>
          A rugpull is a type of scam in the crypto world where the creators of
          a token or project withdraw all funds and vanish — leaving investors
          with worthless assets.
        </p>
        <p>They often fake credibility with:</p>
        <ul>
          <li>🚨 Fake audits and team identities</li>
          <li>💰 Artificial liquidity and volume</li>
          <li>🔊 Overhyped marketing and influencer backing</li>
        </ul>

        

        <h2>🧠 How to Identify Rugpulls</h2>
        <ul>
          <li>❌ Sudden changes in contract or dev wallet activity</li>
          <li>📉 Extremely high APYs or unrealistic rewards</li>
          <li>🔒 Liquidity not locked or controlled by single wallet</li>
          <li>📊 Low organic token activity (flagged by Jupi Shield)</li>
        </ul>

        <div className="section-image">
          {/* <img
            src="https://images.unsplash.com/photo-1621418560261-888fcf98f11e?auto=format&fit=crop&w=1000&q=80"
            alt="Trading screen"
          /> */}
        </div>

        <h2>🛡️ Stay Safe with Jupi Shield</h2>
        <p>
          Jupi Shield integrates Jupiter's Shield API to analyze risk data for SPL
          tokens. It warns you about:
        </p>
        <ul>
          <li>⚠️ Low organic activity</li>
          <li>⚠️ Suspicious contract behavior</li>
          <li>⚠️ Potential rugpull signs based on on-chain analysis</li>
        </ul>

        <div className="section-image">
          
        </div>

        <p>
          Don’t guess. <strong>Analyze before you swap.</strong>
        </p>
        <Link to="/dashboard" className="cta-secondary">
          Try Jupi Shield Now →
        </Link>
      </section>
    </div>
  );
}
