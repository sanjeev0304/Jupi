import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";

export function useWalletInfo() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [sol, setSol] = useState(null);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (!publicKey) return;

    (async () => {
        console.log(publicKey);
      const lamports = await connection.getBalance(publicKey);
      setSol(lamports / 1e9); // Convert lamports to SOL

      const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        {
          programId: new PublicKey(
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          ),
        }
      );

      const formatted = tokenAccounts.value.map((accountInfo) => {
        const info = accountInfo.account.data.parsed.info;
        return {
          mint: info.mint,
          amount: info.tokenAmount.uiAmount,
        };
      });

      setTokens(formatted);
    })();
  }, [publicKey, connection]);

  return { sol, tokens, publicKey };
}
