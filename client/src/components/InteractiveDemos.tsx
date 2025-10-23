import TapToEarnGame from "./TapToEarnGame";
import Web3WalletDemo from "./Web3WalletDemo";
import DataVisualizationDemo from "./DataVisualizationDemo";
import NetworkTrafficVisualizer from "./NetworkTrafficVisualizer";
import { Sparkles } from "lucide-react";

export default function InteractiveDemos() {
  return (
    <section className="py-20 px-4 bg-muted/30" id="demos">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Live Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive Technology Demos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our technical capabilities firsthand. These live demonstrations showcase real-world applications, not just standalone effects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <TapToEarnGame />
          <Web3WalletDemo />
          <DataVisualizationDemo />
          <NetworkTrafficVisualizer />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            These demos prove our ability to build production-ready features for Telegram mini-apps, Web3 games, trading platforms, and enterprise dashboards.
          </p>
        </div>
      </div>
    </section>
  );
}
