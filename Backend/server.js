import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

// 🟢 Route: /api/tokens — fetches top 10 tokens
app.get("/api/tokens", async (req, res) => {
  try {
    const response = await axios.get("https://token.jup.ag/all");
    const tokens = response.data;

    console.log("✅ Total tokens fetched:", tokens.length);

    // Slice top 10 and return useful metadata
    const top10 = tokens.slice(0, 100).map((token) => ({
      mint: token.address,
      symbol: token.symbol,
      name: token.name,
      logo: token.logoURI,
    }));

    res.json(top10);
  } catch (err) {
    console.error("❌ Failed to fetch token list:", err.message);
    res.status(500).json({ error: "Could not fetch token list" });
  }
});

app.post("/api/risk", async (req, res) => {
  const { mint } = req.body;

  if (!mint) return res.status(400).json({ error: "Mint address required" });

  try {
    const url = `https://lite-api.jup.ag/ultra/v1/shield?mints=${mint}`;
    const response = await axios.get(url, {
      headers: { Accept: "application/json" },
    });

    const riskData = response.data?.warnings?.[mint];

    if (!riskData) {
      return res.status(200).json({
        mint,
        warnings: [],
        message: "No warnings, token not flagged",
      });
    }

    res.json({ mint, warnings: riskData });
  } catch (err) {
    console.error("Shield API error:", err.message);
    res.status(500).json({ error: "Shield API fetch failed" });
  }
});


// ✅ Server running
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
