import { useState, useEffect, useMemo, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown,
  Activity,
  DollarSign,
  Lock,
  Zap
} from "lucide-react";

// Seeded random for deterministic builds (SSR-friendly)
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

interface OrderBookEntry {
  price: number;
  amount: number;
  total: number;
}

interface Trade {
  id: string;
  price: number;
  amount: number;
  time: Date;
  type: "buy" | "sell";
}

export default function NexusTrading() {
  const [currentPrice, setCurrentPrice] = useState(45230.50);
  const [priceChange, setPriceChange] = useState(2.3);
  const seedRef = useRef(0);
  
  // Memoized portfolio data (deterministic)
  const portfolio = useMemo(() => ({
    btc: 2.5,
    usd: 50000,
    totalValue: 163076.25,
    profitLoss: 8542.15,
    profitLossPercent: 5.52
  }), []);

  const [bids, setBids] = useState<OrderBookEntry[]>([]);
  const [asks, setAsks] = useState<OrderBookEntry[]>([]);
  const [recentTrades, setRecentTrades] = useState<Trade[]>([]);

  // Generate realistic order book with seeded random
  useEffect(() => {
    const generateOrderBook = () => {
      const newBids: OrderBookEntry[] = [];
      const newAsks: OrderBookEntry[] = [];
      const localSeed = seedRef.current;
      let currentSeed = localSeed;
      
      // Generate bid side (buyers)
      for (let i = 0; i < 15; i++) {
        const price = currentPrice - (i + 1) * (seededRandom(currentSeed++) * 5 + 2);
        const amount = seededRandom(currentSeed++) * 2 + 0.1;
        newBids.push({
          price: Number(price.toFixed(2)),
          amount: Number(amount.toFixed(4)),
          total: Number((price * amount).toFixed(2))
        });
      }

      // Generate ask side (sellers)
      for (let i = 0; i < 15; i++) {
        const price = currentPrice + (i + 1) * (seededRandom(currentSeed++) * 5 + 2);
        const amount = seededRandom(currentSeed++) * 2 + 0.1;
        newAsks.push({
          price: Number(price.toFixed(2)),
          amount: Number(amount.toFixed(4)),
          total: Number((price * amount).toFixed(2))
        });
      }

      setBids(newBids);
      setAsks(newAsks.reverse());
      seedRef.current += 1;
    };

    generateOrderBook();
    const interval = setInterval(generateOrderBook, 2000);
    return () => clearInterval(interval);
  }, [currentPrice]);

  // Simulate price movements with seeded random
  useEffect(() => {
    let priceSeed = 1000;
    const interval = setInterval(() => {
      const change = (seededRandom(priceSeed++) - 0.5) * 10;
      setCurrentPrice(prev => {
        const newPrice = prev + change;
        setPriceChange(Number(((change / prev) * 100).toFixed(2)));
        return Number(newPrice.toFixed(2));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Generate recent trades with seeded random
  useEffect(() => {
    let tradeSeed = 2000;
    const generateTrade = () => {
      const trade: Trade = {
        id: `trade-${Date.now()}`,
        price: currentPrice + (seededRandom(tradeSeed++) - 0.5) * 20,
        amount: seededRandom(tradeSeed++) * 0.5 + 0.01,
        time: new Date(),
        type: seededRandom(tradeSeed++) > 0.5 ? "buy" : "sell"
      };

      setRecentTrades(prev => [trade, ...prev].slice(0, 20));
    };

    const interval = setInterval(generateTrade, 1500);
    return () => clearInterval(interval);
  }, [currentPrice]);

  return (
    <>
      <SEO
        title="Nexus Trading - Live Demo"
        description="Experience our institutional trading platform in action. See real-time order matching, portfolio management, and risk analytics."
        canonicalUrl="https://persystance.com/nexus-trading"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-6" variant="outline">
              <Activity className="w-3 h-3 mr-1" />
              Live Demo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Nexus Trading Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Experience institutional-grade trading infrastructure built for Liechtenstein operations.
              Real-time matching engine, Fireblocks custody, and comprehensive risk management.
            </p>
            <p className="text-sm text-muted-foreground">
              <Lock className="w-4 h-4 inline mr-1" />
              This is a simulation with mock data for demonstration purposes
            </p>
          </div>
        </section>

        {/* Trading Interface */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Order Book */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4">Order Book</h3>
                  <div className="space-y-1">
                    <div className="grid grid-cols-3 text-xs text-muted-foreground mb-2">
                      <div>Price (USD)</div>
                      <div className="text-right">Amount (BTC)</div>
                      <div className="text-right">Total</div>
                    </div>

                    {/* Asks (sell orders) */}
                    <div className="space-y-0.5">
                      {asks.slice(0, 8).map((ask, i) => (
                        <div key={i} className="grid grid-cols-3 text-xs text-destructive/80 hover:bg-destructive/10 p-1 rounded transition-colors">
                          <div>{ask.price.toLocaleString()}</div>
                          <div className="text-right">{ask.amount.toFixed(4)}</div>
                          <div className="text-right">{ask.total.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>

                    {/* Current Price */}
                    <div className="py-3 my-2 border-y border-border">
                      <div className="text-2xl font-bold flex items-center justify-center gap-2">
                        <span>{currentPrice.toLocaleString()}</span>
                        <span className={`text-sm flex items-center ${priceChange >= 0 ? 'text-green-500' : 'text-destructive'}`}>
                          {priceChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {Math.abs(priceChange).toFixed(2)}%
                        </span>
                      </div>
                    </div>

                    {/* Bids (buy orders) */}
                    <div className="space-y-0.5">
                      {bids.slice(0, 8).map((bid, i) => (
                        <div key={i} className="grid grid-cols-3 text-xs text-green-500/80 hover:bg-green-500/10 p-1 rounded transition-colors">
                          <div>{bid.price.toLocaleString()}</div>
                          <div className="text-right">{bid.amount.toFixed(4)}</div>
                          <div className="text-right">{bid.total.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Center Column - Chart & Trading */}
              <div className="lg:col-span-2 space-y-6">
                {/* Portfolio Summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="p-4 bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Total Value</span>
                    </div>
                    <div className="text-2xl font-bold">${portfolio.totalValue.toLocaleString()}</div>
                  </Card>
                  
                  <Card className="p-4 bg-gradient-to-br from-green-500/5 to-green-500/10">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-muted-foreground">P&L</span>
                    </div>
                    <div className="text-2xl font-bold text-green-500">
                      +${portfolio.profitLoss.toLocaleString()}
                    </div>
                    <div className="text-xs text-green-500/70">+{portfolio.profitLossPercent}%</div>
                  </Card>

                  <Card className="p-4">
                    <div className="text-xs text-muted-foreground mb-2">BTC Holdings</div>
                    <div className="text-2xl font-bold">{portfolio.btc.toFixed(4)}</div>
                    <div className="text-xs text-muted-foreground">${(portfolio.btc * currentPrice).toLocaleString()}</div>
                  </Card>

                  <Card className="p-4">
                    <div className="text-xs text-muted-foreground mb-2">USD Balance</div>
                    <div className="text-2xl font-bold">${portfolio.usd.toLocaleString()}</div>
                  </Card>
                </div>

                {/* Trading Panel */}
                <Card className="p-6">
                  <Tabs defaultValue="buy">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="buy">Buy BTC</TabsTrigger>
                      <TabsTrigger value="sell">Sell BTC</TabsTrigger>
                    </TabsList>

                    <TabsContent value="buy" className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground">Amount (BTC)</label>
                        <input 
                          type="number" 
                          className="w-full mt-1 px-4 py-2 rounded-lg border border-border bg-background"
                          placeholder="0.00"
                          step="0.0001"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Price (USD)</label>
                        <input 
                          type="number" 
                          className="w-full mt-1 px-4 py-2 rounded-lg border border-border bg-background"
                          value={currentPrice}
                          readOnly
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        <Zap className="w-4 h-4 mr-2" />
                        Place Buy Order
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Demo mode - orders are simulated
                      </p>
                    </TabsContent>

                    <TabsContent value="sell" className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground">Amount (BTC)</label>
                        <input 
                          type="number" 
                          className="w-full mt-1 px-4 py-2 rounded-lg border border-border bg-background"
                          placeholder="0.00"
                          step="0.0001"
                          max={portfolio.btc}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Price (USD)</label>
                        <input 
                          type="number" 
                          className="w-full mt-1 px-4 py-2 rounded-lg border border-border bg-background"
                          value={currentPrice}
                          readOnly
                        />
                      </div>
                      <Button className="w-full" size="lg" variant="destructive">
                        <Zap className="w-4 h-4 mr-2" />
                        Place Sell Order
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Demo mode - orders are simulated
                      </p>
                    </TabsContent>
                  </Tabs>
                </Card>

                {/* Recent Trades */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Trades</h3>
                  <div className="space-y-1">
                    <div className="grid grid-cols-4 text-xs text-muted-foreground mb-2">
                      <div>Price</div>
                      <div>Amount</div>
                      <div>Total</div>
                      <div className="text-right">Time</div>
                    </div>
                    {recentTrades.slice(0, 10).map(trade => (
                      <div 
                        key={trade.id}
                        className={`grid grid-cols-4 text-sm p-2 rounded hover:bg-muted/50 transition-colors ${
                          trade.type === 'buy' ? 'text-green-500/80' : 'text-destructive/80'
                        }`}
                      >
                        <div>{trade.price.toFixed(2)}</div>
                        <div>{trade.amount.toFixed(4)}</div>
                        <div>${(trade.price * trade.amount).toFixed(2)}</div>
                        <div className="text-right text-xs">
                          {trade.time.toLocaleTimeString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
