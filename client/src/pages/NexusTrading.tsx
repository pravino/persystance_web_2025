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
              UI/UX Showcase Demo • Web Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Nexus Trading Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              This interactive web demo showcases our UI/UX capabilities for building institutional trading platforms.
              Real-time order book, live price updates, and professional trading interface - fully functional client-side.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground mb-2">
                <Lock className="w-4 h-4 inline mr-1" />
                <strong>Platform Note:</strong> This is a web-based UI demonstration with simulated data. It showcases interface design capabilities 
                for institutional platforms. For mobile apps, we use React Native (iOS/Android).
              </p>
              <p className="text-xs text-muted-foreground">
                Actual trading platforms are custom-built based on specific requirements and include backend infrastructure, security, compliance, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Trading Interface */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Order Book */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Order Book</h3>
                    <Badge variant="outline" className="text-xs">
                      <Activity className="w-3 h-3 mr-1" />
                      Live
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="grid grid-cols-3 text-xs font-medium text-muted-foreground mb-3 pb-2 border-b border-border/50">
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

                    {/* Current Price - Enhanced */}
                    <div className="py-4 my-2 border-y-2 border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Current Price</div>
                        <div className="text-3xl font-bold flex items-center justify-center gap-2">
                          <span>${currentPrice.toLocaleString()}</span>
                        </div>
                        <div className={`text-sm font-semibold flex items-center justify-center gap-1 mt-1 ${priceChange >= 0 ? 'text-green-500' : 'text-destructive'}`}>
                          {priceChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
                        </div>
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
                      <DollarSign className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Total Value</span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold break-all">${portfolio.totalValue.toLocaleString()}</div>
                  </Card>
                  
                  <Card className="p-4 bg-gradient-to-br from-green-500/5 to-green-500/10">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">P&L</span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-green-500 break-all">
                      +${portfolio.profitLoss.toLocaleString()}
                    </div>
                    <div className="text-xs text-green-500/70">+{portfolio.profitLossPercent}%</div>
                  </Card>

                  <Card className="p-4">
                    <div className="text-xs text-muted-foreground mb-2">BTC Holdings</div>
                    <div className="text-xl md:text-2xl font-bold break-all">{portfolio.btc.toFixed(4)}</div>
                    <div className="text-xs text-muted-foreground break-all">${(portfolio.btc * currentPrice).toLocaleString()}</div>
                  </Card>

                  <Card className="p-4">
                    <div className="text-xs text-muted-foreground mb-2">USD Balance</div>
                    <div className="text-xl md:text-2xl font-bold break-all">${portfolio.usd.toLocaleString()}</div>
                  </Card>
                </div>

                {/* Trading Panel - Enhanced */}
                <Card className="p-6 border-border/50">
                  <Tabs defaultValue="buy">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="buy" className="data-[state=active]:bg-green-500/10 data-[state=active]:text-green-600">
                        Buy BTC
                      </TabsTrigger>
                      <TabsTrigger value="sell" className="data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive">
                        Sell BTC
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="buy" className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground block mb-2">Amount (BTC)</label>
                        <input 
                          type="number" 
                          className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors text-lg font-mono"
                          placeholder="0.0000"
                          step="0.0001"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground block mb-2">Price (USD)</label>
                        <input 
                          type="number" 
                          className="w-full px-4 py-3 rounded-lg border-2 border-border bg-muted/30 text-lg font-mono"
                          value={currentPrice}
                          readOnly
                        />
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Estimated Total:</span>
                          <span className="font-semibold">-</span>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Available Balance:</span>
                          <span className="font-mono">${portfolio.usd.toLocaleString()}</span>
                        </div>
                      </div>
                      <Button className="w-full shadow-lg hover:shadow-xl transition-shadow" size="lg">
                        <Zap className="w-4 h-4 mr-2" />
                        Place Buy Order
                      </Button>
                      <p className="text-xs text-center p-2 rounded bg-primary/5 border border-primary/20">
                        <Lock className="w-3 h-3 inline mr-1" />
                        Demo mode - orders are simulated
                      </p>
                    </TabsContent>

                    <TabsContent value="sell" className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground block mb-2">Amount (BTC)</label>
                        <input 
                          type="number" 
                          className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-destructive focus:outline-none transition-colors text-lg font-mono"
                          placeholder="0.0000"
                          step="0.0001"
                          max={portfolio.btc}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground block mb-2">Price (USD)</label>
                        <input 
                          type="number" 
                          className="w-full px-4 py-3 rounded-lg border-2 border-border bg-muted/30 text-lg font-mono"
                          value={currentPrice}
                          readOnly
                        />
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Estimated Total:</span>
                          <span className="font-semibold">-</span>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Available BTC:</span>
                          <span className="font-mono">{portfolio.btc.toFixed(4)}</span>
                        </div>
                      </div>
                      <Button className="w-full shadow-lg hover:shadow-xl transition-shadow" size="lg" variant="destructive">
                        <Zap className="w-4 h-4 mr-2" />
                        Place Sell Order
                      </Button>
                      <p className="text-xs text-center p-2 rounded bg-primary/5 border border-primary/20">
                        <Lock className="w-3 h-3 inline mr-1" />
                        Demo mode - orders are simulated
                      </p>
                    </TabsContent>
                  </Tabs>
                </Card>

                {/* Recent Trades - Enhanced */}
                <Card className="p-6 border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Recent Trades</h3>
                    <Badge variant="secondary" className="text-xs">
                      {recentTrades.length} trades
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="grid grid-cols-4 text-xs font-medium text-muted-foreground mb-3 pb-2 border-b border-border/50">
                      <div>Price</div>
                      <div>Amount</div>
                      <div>Total</div>
                      <div className="text-right">Time</div>
                    </div>
                    <div className="max-h-80 overflow-y-auto space-y-0.5">
                      {recentTrades.slice(0, 15).map(trade => (
                        <div 
                          key={trade.id}
                          className={`grid grid-cols-4 text-sm p-2 rounded hover:bg-muted/30 transition-all font-mono ${
                            trade.type === 'buy' 
                              ? 'text-green-600 dark:text-green-400 hover:bg-green-500/5' 
                              : 'text-red-600 dark:text-red-400 hover:bg-destructive/5'
                          }`}
                        >
                          <div className="font-semibold">${trade.price.toFixed(2)}</div>
                          <div>{trade.amount.toFixed(4)}</div>
                          <div className="font-medium">${(trade.price * trade.amount).toFixed(2)}</div>
                          <div className="text-right text-xs text-muted-foreground">
                            {trade.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                          </div>
                        </div>
                      ))}
                    </div>
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
