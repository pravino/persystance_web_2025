import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import { Coins, Zap, TrendingUp, Wallet } from "lucide-react";

interface GameState {
  tokens: number;
  energy: number;
  maxEnergy: number;
  tokensPerClick: number;
  tokensPerSecond: number;
  upgrades: {
    autoMiner: number;
    clickMultiplier: number;
    energyCapacity: number;
  };
  walletAddress: string | null;
}

const INITIAL_STATE: GameState = {
  tokens: 0,
  energy: 100,
  maxEnergy: 100,
  tokensPerClick: 1,
  tokensPerSecond: 0,
  upgrades: {
    autoMiner: 0,
    clickMultiplier: 0,
    energyCapacity: 0,
  },
  walletAddress: null,
};

const UPGRADE_COSTS = {
  autoMiner: (level: number) => Math.floor(50 * Math.pow(1.5, level)),
  clickMultiplier: (level: number) => Math.floor(100 * Math.pow(1.8, level)),
  energyCapacity: (level: number) => Math.floor(75 * Math.pow(1.6, level)),
};

export default function TapToEarnGame() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [clickAnimations, setClickAnimations] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [showUpgrades, setShowUpgrades] = useState(false);
  const lastEnergyRefill = useRef<number>(Date.now());
  const animationCounter = useRef(0);

  // Load game state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("tapToEarnGame");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setGameState(parsed);
        lastEnergyRefill.current = Date.now();
      } catch (e) {
        console.warn("Failed to load saved game state");
      }
    }
  }, []);

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("tapToEarnGame", JSON.stringify(gameState));
  }, [gameState]);

  // Energy refill system (1 energy per second)
  useEffect(() => {
    const interval = setInterval(() => {
      setGameState((prev) => {
        if (prev.energy < prev.maxEnergy) {
          return { ...prev, energy: Math.min(prev.energy + 1, prev.maxEnergy) };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto-mining (passive income)
  useEffect(() => {
    if (gameState.tokensPerSecond > 0) {
      const interval = setInterval(() => {
        setGameState((prev) => ({
          ...prev,
          tokens: prev.tokens + prev.tokensPerSecond / 10,
        }));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [gameState.tokensPerSecond]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (gameState.energy < 1) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add click animation
    const animId = animationCounter.current++;
    setClickAnimations((prev) => [...prev, { id: animId, x, y }]);
    setTimeout(() => {
      setClickAnimations((prev) => prev.filter((anim) => anim.id !== animId));
    }, 1000);

    setGameState((prev) => ({
      ...prev,
      tokens: prev.tokens + prev.tokensPerClick,
      energy: prev.energy - 1,
    }));
  };

  const buyUpgrade = (type: keyof GameState["upgrades"]) => {
    const cost = UPGRADE_COSTS[type](gameState.upgrades[type]);
    if (gameState.tokens < cost) return;

    setGameState((prev) => {
      const newUpgrades = { ...prev.upgrades, [type]: prev.upgrades[type] + 1 };
      
      let newTokensPerClick = prev.tokensPerClick;
      let newTokensPerSecond = prev.tokensPerSecond;
      let newMaxEnergy = prev.maxEnergy;

      if (type === "autoMiner") {
        newTokensPerSecond = newUpgrades.autoMiner * 0.5;
      } else if (type === "clickMultiplier") {
        newTokensPerClick = 1 + newUpgrades.clickMultiplier;
      } else if (type === "energyCapacity") {
        newMaxEnergy = 100 + newUpgrades.energyCapacity * 20;
      }

      return {
        ...prev,
        tokens: prev.tokens - cost,
        upgrades: newUpgrades,
        tokensPerClick: newTokensPerClick,
        tokensPerSecond: newTokensPerSecond,
        maxEnergy: newMaxEnergy,
      };
    });
  };

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        
        // Sign a message to verify ownership
        const message = `Tap-to-Earn Game\nTokens: ${Math.floor(gameState.tokens)}`;
        await signer.signMessage(message);

        setGameState((prev) => ({ ...prev, walletAddress: accounts[0] }));
      } else {
        alert("MetaMask not installed");
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return Math.floor(num).toLocaleString();
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-1">Tap-to-Earn Game</h3>
            <p className="text-sm text-muted-foreground">
              Telegram mini-app style clicker with Web3 integration
            </p>
          </div>
          {gameState.walletAddress ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 text-primary text-xs">
              <Wallet className="w-3 h-3" />
              <span data-testid="text-wallet-address">{formatAddress(gameState.walletAddress)}</span>
            </div>
          ) : (
            <Button size="sm" variant="outline" onClick={connectWallet} data-testid="button-connect-wallet-game">
              <Wallet className="w-3 h-3 mr-1" />
              Connect
            </Button>
          )}
        </div>

        {/* Token Display */}
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Coins className="w-8 h-8 text-primary" />
            <div className="text-5xl font-bold" data-testid="text-token-count">
              {formatNumber(gameState.tokens)}
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {gameState.tokensPerSecond > 0 && (
              <span data-testid="text-tokens-per-second">+{gameState.tokensPerSecond.toFixed(1)}/s</span>
            )}
          </div>
        </div>

        {/* Click Button */}
        <div className="relative">
          <button
            onClick={handleClick}
            disabled={gameState.energy < 1}
            className="relative w-full h-32 rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-xl hover-elevate active-elevate-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            data-testid="button-tap-earn"
          >
            <div className="flex items-center justify-center gap-2">
              <Coins className="w-6 h-6" />
              <span>TAP TO MINE</span>
            </div>
            <div className="text-sm mt-1">+{gameState.tokensPerClick} per click</div>

            {/* Click animations */}
            {clickAnimations.map((anim) => (
              <div
                key={anim.id}
                className="absolute text-2xl font-bold animate-ping pointer-events-none"
                style={{
                  left: anim.x,
                  top: anim.y,
                  animation: "float 1s ease-out forwards",
                }}
              >
                +{gameState.tokensPerClick}
              </div>
            ))}
          </button>
        </div>

        {/* Energy Bar */}
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Zap className="w-3 h-3" />
              <span>Energy</span>
            </div>
            <span className="font-medium" data-testid="text-energy">
              {gameState.energy}/{gameState.maxEnergy}
            </span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(gameState.energy / gameState.maxEnergy) * 100}%` }}
            />
          </div>
        </div>

        {/* Upgrades Section */}
        <div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowUpgrades(!showUpgrades)}
            className="w-full"
            data-testid="button-toggle-upgrades"
          >
            <TrendingUp className="w-3 h-3 mr-2" />
            {showUpgrades ? "Hide" : "Show"} Upgrades
          </Button>

          {showUpgrades && (
            <div className="mt-3 space-y-2">
              <UpgradeCard
                title="Auto Miner"
                description={`+0.5 tokens/sec per level`}
                level={gameState.upgrades.autoMiner}
                cost={UPGRADE_COSTS.autoMiner(gameState.upgrades.autoMiner)}
                canAfford={gameState.tokens >= UPGRADE_COSTS.autoMiner(gameState.upgrades.autoMiner)}
                onBuy={() => buyUpgrade("autoMiner")}
                testId="upgrade-autominer"
              />
              <UpgradeCard
                title="Click Multiplier"
                description={`+1 token per click`}
                level={gameState.upgrades.clickMultiplier}
                cost={UPGRADE_COSTS.clickMultiplier(gameState.upgrades.clickMultiplier)}
                canAfford={gameState.tokens >= UPGRADE_COSTS.clickMultiplier(gameState.upgrades.clickMultiplier)}
                onBuy={() => buyUpgrade("clickMultiplier")}
                testId="upgrade-multiplier"
              />
              <UpgradeCard
                title="Energy Capacity"
                description={`+20 max energy`}
                level={gameState.upgrades.energyCapacity}
                cost={UPGRADE_COSTS.energyCapacity(gameState.upgrades.energyCapacity)}
                canAfford={gameState.tokens >= UPGRADE_COSTS.energyCapacity(gameState.upgrades.energyCapacity)}
                onBuy={() => buyUpgrade("energyCapacity")}
                testId="upgrade-energy"
              />
            </div>
          )}
        </div>

        <div className="pt-2 text-xs text-muted-foreground border-t">
          <p>Showcases game mechanics, progression systems, and Web3 wallet integration for Telegram mini-apps</p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px);
          }
        }
      `}</style>
    </Card>
  );
}

function UpgradeCard({
  title,
  description,
  level,
  cost,
  canAfford,
  onBuy,
  testId,
}: {
  title: string;
  description: string;
  level: number;
  cost: number;
  canAfford: boolean;
  onBuy: () => void;
  testId: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
      <div className="flex-1">
        <div className="font-medium text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
        <div className="text-xs text-muted-foreground mt-0.5">Level: {level}</div>
      </div>
      <Button
        size="sm"
        variant={canAfford ? "default" : "secondary"}
        disabled={!canAfford}
        onClick={onBuy}
        data-testid={`button-${testId}`}
      >
        <Coins className="w-3 h-3 mr-1" />
        {cost}
      </Button>
    </div>
  );
}
