import { useState } from "react";
import { BrowserProvider } from "ethers";
import { Card } from "@/components/ui/card";
import { Wallet, CheckCircle2, AlertCircle } from "lucide-react";

export default function Web3WalletDemo() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    setError("");
    setIsLoading(true);

    try {
      if (typeof window.ethereum === "undefined") {
        setError("MetaMask is not installed. Please install MetaMask to try this demo.");
        setIsLoading(false);
        return;
      }

      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      
      if (accounts.length > 0) {
        const address = accounts[0];
        const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
        setWalletAddress(shortAddress);
        setIsConnected(true);
      }
    } catch (err: any) {
      setError(err.message || "Failed to connect wallet");
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress("");
    setIsConnected(false);
    setError("");
  };

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Web3 Wallet Connect</h3>
          <p className="text-sm text-muted-foreground">
            Live demonstration of blockchain integration and Web3 wallet connectivity
          </p>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[16rem] space-y-4">
          {!isConnected ? (
            <>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Wallet className="w-10 h-10 text-primary" />
              </div>
              <button
                onClick={connectWallet}
                disabled={isLoading}
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover-elevate active-elevate-2 disabled:opacity-50"
                data-testid="button-connect-wallet"
              >
                {isLoading ? "Connecting..." : "Connect MetaMask Wallet"}
              </button>
            </>
          ) : (
            <>
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Connected Wallet</p>
                <p className="font-mono font-semibold" data-testid="text-wallet-address">
                  {walletAddress}
                </p>
              </div>
              <button
                onClick={disconnectWallet}
                className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover-elevate active-elevate-2"
                data-testid="button-disconnect-wallet"
              >
                Disconnect
              </button>
            </>
          )}

          {error && (
            <div className="flex items-start gap-2 p-3 rounded-md bg-destructive/10 text-destructive text-sm max-w-md">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p data-testid="text-error-message">{error}</p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t text-xs text-muted-foreground">
          <p>This demo showcases Web3 wallet integration capabilities for blockchain applications, NFT platforms, and decentralized exchanges.</p>
        </div>
      </div>
    </Card>
  );
}
