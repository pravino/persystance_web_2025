import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Star, Wallet, Clock } from "lucide-react";

type RideStatus = "idle" | "searching" | "driver_assigned" | "picking_up" | "in_transit" | "completed";

interface Driver {
  id: number;
  name: string;
  rating: number;
  vehicle: string;
  distance: number;
  eta: number;
  priceInMatic: number;
}

const AVAILABLE_DRIVERS: Driver[] = [
  { id: 1, name: "Alex Kumar", rating: 4.9, vehicle: "Tesla Model 3", distance: 0.5, eta: 3, priceInMatic: 12.5 },
  { id: 2, name: "Sarah Chen", rating: 4.8, vehicle: "Toyota Prius", distance: 0.8, eta: 5, priceInMatic: 11.2 },
  { id: 3, name: "Mike Johnson", rating: 4.7, vehicle: "Honda Accord", distance: 1.2, eta: 7, priceInMatic: 10.8 },
];

export default function Web3TaxiDemo() {
  const [rideStatus, setRideStatus] = useState<RideStatus>("idle");
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [walletBalance, setWalletBalance] = useState(145.8);
  const [countdown, setCountdown] = useState(0);
  const [tripProgress, setTripProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (rideStatus === "searching") {
      const timer = setTimeout(() => {
        setRideStatus("driver_assigned");
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (rideStatus === "driver_assigned") {
      setCountdown(selectedDriver?.eta || 3);
      const timer = setTimeout(() => {
        setRideStatus("picking_up");
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (rideStatus === "picking_up") {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setRideStatus("in_transit");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    if (rideStatus === "in_transit") {
      setCountdown(8);
      interval = setInterval(() => {
        setTripProgress((prev) => {
          if (prev >= 100) {
            setRideStatus("completed");
            if (selectedDriver) {
              setWalletBalance((prevBalance) => prevBalance - selectedDriver.priceInMatic);
            }
            return 100;
          }
          return prev + 12.5;
        });
        setCountdown((prev) => Math.max(0, prev - 1));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [rideStatus, selectedDriver]);

  const handleBookRide = (driver: Driver) => {
    setSelectedDriver(driver);
    setRideStatus("searching");
  };

  const handleNewRide = () => {
    setRideStatus("idle");
    setSelectedDriver(null);
    setCountdown(0);
    setTripProgress(0);
  };

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Web3 Taxi App</h3>
          <p className="text-sm text-muted-foreground">
            Decentralized ride-hailing with crypto payments and smart contract escrow
          </p>
        </div>

        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
          <div className="flex items-center gap-2">
            <Wallet className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Wallet Balance</span>
          </div>
          <span className="font-semibold" data-testid="text-wallet-balance">{walletBalance.toFixed(2)} MATIC</span>
        </div>

        {rideStatus === "idle" && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Available drivers nearby</span>
            </div>
            
            {AVAILABLE_DRIVERS.map((driver) => (
              <div
                key={driver.id}
                className="p-3 rounded-md border hover-elevate"
                data-testid={`driver-card-${driver.id}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium">{driver.name}</div>
                    <div className="text-xs text-muted-foreground">{driver.vehicle}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-medium">{driver.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{driver.distance} mi</span>
                    <span>•</span>
                    <span>{driver.eta} min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary">{driver.priceInMatic} MATIC</span>
                    <Button
                      size="sm"
                      onClick={() => handleBookRide(driver)}
                      data-testid={`button-book-${driver.id}`}
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {rideStatus === "searching" && (
          <div className="py-8 text-center space-y-3">
            <div className="flex justify-center">
              <Car className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <div className="font-medium">Searching for driver...</div>
            <div className="text-sm text-muted-foreground">Confirming on blockchain</div>
          </div>
        )}

        {rideStatus === "driver_assigned" && selectedDriver && (
          <div className="space-y-3">
            <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-semibold">{selectedDriver.name}</div>
                  <div className="text-sm text-muted-foreground">{selectedDriver.vehicle}</div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-medium">{selectedDriver.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Driver assigned</span>
                <span className="font-medium text-primary">{selectedDriver.priceInMatic} MATIC</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">Driver arriving in {selectedDriver.eta} minutes</span>
            </div>
          </div>
        )}

        {rideStatus === "picking_up" && selectedDriver && (
          <div className="space-y-3">
            <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
              <div className="font-medium mb-2">Driver on the way</div>
              <div className="text-2xl font-bold text-primary" data-testid="text-pickup-countdown">
                {countdown} min
              </div>
              <div className="text-sm text-muted-foreground mt-1">Arriving soon</div>
            </div>
            <div className="text-xs text-muted-foreground text-center">
              Smart contract locked: {selectedDriver.priceInMatic} MATIC
            </div>
          </div>
        )}

        {rideStatus === "in_transit" && selectedDriver && (
          <div className="space-y-3">
            <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
              <div className="font-medium mb-3">Trip in progress</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium" data-testid="text-trip-progress">{Math.round(tripProgress)}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${tripProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>ETA: {countdown} min</span>
                  <span>{selectedDriver.priceInMatic} MATIC</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {rideStatus === "completed" && selectedDriver && (
          <div className="space-y-3">
            <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
              <div className="font-semibold text-green-600 dark:text-green-400 mb-2">
                Trip Completed
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Driver</span>
                  <span className="font-medium">{selectedDriver.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount Paid</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {selectedDriver.priceInMatic} MATIC
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">New Balance</span>
                  <span className="font-medium">
                    {walletBalance.toFixed(2)} MATIC
                  </span>
                </div>
              </div>
            </div>
            <Button
              onClick={handleNewRide}
              className="w-full"
              data-testid="button-new-ride"
            >
              Book New Ride
            </Button>
          </div>
        )}

        <div className="pt-2 text-xs text-muted-foreground border-t">
          <p>Demonstrates decentralized ride-hailing, smart contract escrow, and crypto payment integration for Web3 applications</p>
        </div>
      </div>
    </Card>
  );
}
