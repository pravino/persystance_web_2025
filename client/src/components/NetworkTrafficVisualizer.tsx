import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

interface Packet {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  type: "GET" | "POST" | "ERROR" | "CACHE";
  progress: number;
  route: Node[];
  routeIndex: number;
}

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  color: string;
  load: number;
}

const PACKET_COLORS = {
  GET: "#3b82f6",    // blue
  POST: "#10b981",   // green
  ERROR: "#ef4444",  // red
  CACHE: "#a855f7",  // purple
};

export default function NetworkTrafficVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);
  const isRunningRef = useRef(isRunning);
  const packetsRef = useRef<Packet[]>([]);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();
  const packetCounter = useRef(0);
  const [stats, setStats] = useState({ total: 0, errors: 0, avgLatency: 0 });

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initializeNodes();
    };

    const initializeNodes = () => {
      const w = canvas.width;
      const h = canvas.height;
      
      nodesRef.current = [
        { id: "client", x: w * 0.1, y: h * 0.5, label: "Client", color: "#60a5fa", load: 0 },
        { id: "api", x: w * 0.35, y: h * 0.5, label: "API Gateway", color: "#34d399", load: 0 },
        { id: "cache", x: w * 0.6, y: h * 0.3, label: "Cache", color: "#c084fc", load: 0 },
        { id: "db", x: w * 0.6, y: h * 0.7, label: "Database", color: "#f97316", load: 0 },
        { id: "server", x: w * 0.85, y: h * 0.5, label: "Server", color: "#06b6d4", load: 0 },
      ];
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Spawn packets periodically
    const spawnPacket = () => {
      if (!isRunningRef.current || !nodesRef.current.length) return;

      const types: Array<"GET" | "POST" | "ERROR" | "CACHE"> = ["GET", "GET", "GET", "POST", "POST", "ERROR", "CACHE"];
      const type = types[Math.floor(Math.random() * types.length)];
      
      // Determine route based on type
      let route: Node[];
      if (type === "CACHE") {
        route = [nodesRef.current[0], nodesRef.current[1], nodesRef.current[2], nodesRef.current[1], nodesRef.current[0]];
      } else if (type === "ERROR") {
        route = [nodesRef.current[0], nodesRef.current[1]];
      } else {
        route = [nodesRef.current[0], nodesRef.current[1], nodesRef.current[3], nodesRef.current[4], nodesRef.current[3], nodesRef.current[1], nodesRef.current[0]];
      }

      const startNode = route[0];
      packetsRef.current.push({
        id: packetCounter.current++,
        x: startNode.x,
        y: startNode.y,
        targetX: route[1].x,
        targetY: route[1].y,
        type,
        progress: 0,
        route,
        routeIndex: 1,
      });

      setStats(prev => ({ 
        ...prev, 
        total: prev.total + 1,
        errors: type === "ERROR" ? prev.errors + 1 : prev.errors 
      }));
    };

    // Spawn packets at varying intervals for realistic burst traffic
    let spawnInterval: NodeJS.Timeout;
    const scheduleNextSpawn = () => {
      const delay = Math.random() < 0.3 ? 100 : Math.random() * 800 + 200; // Burst or normal
      spawnInterval = setTimeout(() => {
        spawnPacket();
        scheduleNextSpawn();
      }, delay);
    };
    scheduleNextSpawn();

    const animate = () => {
      if (!isRunningRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Clear canvas
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(nodesRef.current[0].x, nodesRef.current[0].y);
      ctx.lineTo(nodesRef.current[1].x, nodesRef.current[1].y);
      ctx.moveTo(nodesRef.current[1].x, nodesRef.current[1].y);
      ctx.lineTo(nodesRef.current[2].x, nodesRef.current[2].y);
      ctx.moveTo(nodesRef.current[1].x, nodesRef.current[1].y);
      ctx.lineTo(nodesRef.current[3].x, nodesRef.current[3].y);
      ctx.moveTo(nodesRef.current[3].x, nodesRef.current[3].y);
      ctx.lineTo(nodesRef.current[4].x, nodesRef.current[4].y);
      ctx.stroke();

      // Update and draw packets
      packetsRef.current = packetsRef.current.filter((packet) => {
        packet.progress += 0.02;

        // Check if packet reached current target
        if (packet.progress >= 1) {
          // Update node load when packet arrives
          const currentNode = packet.route[packet.routeIndex];
          if (currentNode) {
            const nodeIndex = nodesRef.current.findIndex(n => n.id === currentNode.id);
            if (nodeIndex !== -1) {
              nodesRef.current[nodeIndex].load = Math.min(nodesRef.current[nodeIndex].load + 0.5, 3);
            }
          }

          // Move to next waypoint in route
          packet.routeIndex++;
          if (packet.routeIndex >= packet.route.length) {
            return false; // Remove packet when route complete
          }

          // Set new target
          const nextNode = packet.route[packet.routeIndex];
          packet.targetX = nextNode.x;
          packet.targetY = nextNode.y;
          packet.progress = 0;
        }

        // Lerp position
        packet.x = packet.x + (packet.targetX - packet.x) * 0.08;
        packet.y = packet.y + (packet.targetY - packet.y) * 0.08;

        // Draw packet
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = PACKET_COLORS[packet.type];
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = PACKET_COLORS[packet.type];
        ctx.fill();
        ctx.shadowBlur = 0;

        return true;
      });

      // Draw nodes
      nodesRef.current.forEach((node) => {
        // Node circle
        const baseSize = 20;
        const loadSize = baseSize + node.load * 10;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, loadSize, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Node label
        ctx.fillStyle = "#ffffff";
        ctx.font = "12px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y + loadSize + 15);

        // Decay load
        node.load *= 0.95;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      clearTimeout(spawnInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Network Traffic Monitor</h3>
          <p className="text-sm text-muted-foreground">
            Real-time visualization of distributed system data flow and microservice communication
          </p>
        </div>

        <canvas
          ref={canvasRef}
          className="w-full h-64 rounded-md bg-black"
          data-testid="canvas-network-traffic"
        />

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-md bg-muted/50">
            <div className="text-xs text-muted-foreground">Total Requests</div>
            <div className="text-lg font-semibold" data-testid="text-total-requests">{stats.total}</div>
          </div>
          <div className="p-2 rounded-md bg-muted/50">
            <div className="text-xs text-muted-foreground">Errors</div>
            <div className="text-lg font-semibold text-destructive" data-testid="text-error-count">{stats.errors}</div>
          </div>
          <div className="p-2 rounded-md bg-muted/50">
            <div className="text-xs text-muted-foreground">Success Rate</div>
            <div className="text-lg font-semibold" data-testid="text-success-rate">
              {stats.total > 0 ? Math.round(((stats.total - stats.errors) / stats.total) * 100) : 100}%
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PACKET_COLORS.GET }}></div>
            <span className="text-muted-foreground">GET</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PACKET_COLORS.POST }}></div>
            <span className="text-muted-foreground">POST</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PACKET_COLORS.CACHE }}></div>
            <span className="text-muted-foreground">Cache Hit</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PACKET_COLORS.ERROR }}></div>
            <span className="text-muted-foreground">Error</span>
          </div>
        </div>

        <Button
          onClick={() => setIsRunning(!isRunning)}
          size="sm"
          variant="secondary"
          data-testid="button-toggle-traffic"
        >
          <Activity className="w-3 h-3 mr-2" />
          {isRunning ? "Pause" : "Resume"} Traffic
        </Button>

        <div className="pt-2 text-xs text-muted-foreground border-t">
          <p>Demonstrates real-time monitoring, distributed systems, and infrastructure visualization for DEX platforms and trading engines</p>
        </div>
      </div>
    </Card>
  );
}
