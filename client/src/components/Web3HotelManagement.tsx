import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Hotel, Wallet, Key, TrendingUp, Users, Bed } from "lucide-react";

type RoomStatus = "available" | "booked" | "occupied" | "checkout";

interface Room {
  id: number;
  type: "Standard" | "Deluxe" | "Suite" | "Penthouse";
  number: string;
  status: RoomStatus;
  pricePerNight: number;
  features: string[];
  guestName?: string;
  checkIn?: string;
  checkOut?: string;
  nftKey?: string;
}

interface Booking {
  roomNumber: string;
  roomType: string;
  guestName: string;
  nights: number;
  totalPrice: number;
  nftKey: string;
  timestamp: number;
}

const INITIAL_ROOMS: Room[] = [
  { id: 1, type: "Standard", number: "101", status: "available", pricePerNight: 0.5, features: ["Queen Bed", "City View", "WiFi"] },
  { id: 2, type: "Standard", number: "102", status: "available", pricePerNight: 0.5, features: ["Queen Bed", "City View", "WiFi"] },
  { id: 3, type: "Standard", number: "103", status: "occupied", pricePerNight: 0.5, features: ["Queen Bed", "City View", "WiFi"], guestName: "John Smith" },
  { id: 4, type: "Deluxe", number: "201", status: "available", pricePerNight: 1.2, features: ["King Bed", "Ocean View", "WiFi", "Minibar"] },
  { id: 5, type: "Deluxe", number: "202", status: "booked", pricePerNight: 1.2, features: ["King Bed", "Ocean View", "WiFi", "Minibar"], guestName: "Sarah Johnson" },
  { id: 6, type: "Deluxe", number: "203", status: "available", pricePerNight: 1.2, features: ["King Bed", "Ocean View", "WiFi", "Minibar"] },
  { id: 7, type: "Suite", number: "301", status: "available", pricePerNight: 2.5, features: ["King Bed", "Ocean View", "Living Room", "Jacuzzi", "Premium WiFi"] },
  { id: 8, type: "Suite", number: "302", status: "occupied", pricePerNight: 2.5, features: ["King Bed", "Ocean View", "Living Room", "Jacuzzi", "Premium WiFi"], guestName: "Michael Chen" },
  { id: 9, type: "Penthouse", number: "401", status: "available", pricePerNight: 5.0, features: ["2 King Beds", "360° View", "Full Kitchen", "Private Pool", "Butler Service"] },
];

const STATUS_COLORS = {
  available: "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400",
  booked: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
  occupied: "bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400",
  checkout: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400",
};

export default function Web3HotelManagement() {
  const [rooms, setRooms] = useState<Room[]>(INITIAL_ROOMS);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [nights, setNights] = useState(2);
  const [walletConnected, setWalletConnected] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState(15.8);

  useEffect(() => {
    // Simulate room status changes
    const interval = setInterval(() => {
      setRooms((prevRooms) => 
        prevRooms.map((room) => {
          // Checkout → Available (room cleaned and ready)
          if (room.status === "checkout" && Math.random() > 0.6) {
            return { ...room, status: "available", guestName: undefined, checkIn: undefined, checkOut: undefined, nftKey: undefined };
          }
          // Occupied → Checkout (guest checking out)
          if (room.status === "occupied" && Math.random() > 0.7) {
            return { ...room, status: "checkout" };
          }
          // Booked → Occupied (guest checked in)
          if (room.status === "booked" && Math.random() > 0.8) {
            return { ...room, status: "occupied" };
          }
          return room;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateNFTKey = () => {
    return `NFT-KEY-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  };

  const handleBookRoom = () => {
    if (!selectedRoom || !guestName.trim()) return;

    const nftKey = generateNFTKey();
    const totalPrice = selectedRoom.pricePerNight * nights;

    // Update room status
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === selectedRoom.id
          ? { ...room, status: "booked", guestName, nftKey }
          : room
      )
    );

    // Add to bookings
    const newBooking: Booking = {
      roomNumber: selectedRoom.number,
      roomType: selectedRoom.type,
      guestName,
      nights,
      totalPrice,
      nftKey,
      timestamp: Date.now(),
    };
    setBookings((prev) => [newBooking, ...prev].slice(0, 5));

    // Update revenue
    setTotalRevenue((prev) => prev + totalPrice);

    // Reset
    setShowBookingModal(false);
    setSelectedRoom(null);
    setGuestName("");
    setNights(2);
  };

  const openBookingModal = (room: Room) => {
    if (room.status === "available") {
      setSelectedRoom(room);
      setShowBookingModal(true);
    }
  };

  const availableRooms = rooms.filter((r) => r.status === "available").length;
  const occupancyRate = Math.round(((rooms.length - availableRooms) / rooms.length) * 100);

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Web3 Hotel Management</h3>
          <p className="text-sm text-muted-foreground">
            Decentralized booking platform with crypto payments and NFT room keys
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-md bg-muted/50">
            <div className="flex items-center gap-2 mb-1">
              <Bed className="w-3 h-3 text-primary" />
              <span className="text-xs text-muted-foreground">Available</span>
            </div>
            <div className="text-lg font-semibold" data-testid="text-available-rooms">
              {availableRooms}/{rooms.length}
            </div>
          </div>
          <div className="p-3 rounded-md bg-muted/50">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-3 h-3 text-primary" />
              <span className="text-xs text-muted-foreground">Occupancy</span>
            </div>
            <div className="text-lg font-semibold" data-testid="text-occupancy-rate">
              {occupancyRate}%
            </div>
          </div>
          <div className="p-3 rounded-md bg-muted/50">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span className="text-xs text-muted-foreground">Revenue</span>
            </div>
            <div className="text-lg font-semibold text-primary" data-testid="text-total-revenue">
              {totalRevenue.toFixed(1)} MATIC
            </div>
          </div>
        </div>

        {/* Room Grid */}
        <div className="max-h-48 overflow-y-auto space-y-2">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`p-3 rounded-md border transition-all ${STATUS_COLORS[room.status]} ${
                room.status === "available" ? "cursor-pointer hover-elevate" : "cursor-default"
              }`}
              onClick={() => openBookingModal(room)}
              data-testid={`room-card-${room.number}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Hotel className="w-3 h-3" />
                    <span className="font-semibold text-sm">
                      Room {room.number} - {room.type}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {room.features.slice(0, 2).join(" • ")}
                  </div>
                  {room.guestName && (
                    <div className="text-xs mt-1 font-medium">Guest: {room.guestName}</div>
                  )}
                </div>
                <div className="text-right">
                  <div className="font-semibold text-sm">{room.pricePerNight} MATIC</div>
                  <div className="text-xs capitalize">{room.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        {bookings.length > 0 && (
          <div className="space-y-2">
            <div className="text-sm font-medium">Recent Bookings</div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {bookings.map((booking, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-md bg-muted/30 text-xs"
                  data-testid={`booking-${idx}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{booking.guestName}</span>
                    <span className="text-primary font-semibold">
                      {booking.totalPrice.toFixed(1)} MATIC
                    </span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-2 mt-1">
                    <span>Room {booking.roomNumber}</span>
                    <span>•</span>
                    <span>{booking.nights}N</span>
                    <span>•</span>
                    <Key className="w-2 h-2" />
                    <span className="font-mono">{booking.nftKey}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2 text-xs text-muted-foreground border-t">
          <p>Demonstrates decentralized hospitality platform with blockchain reservations, NFT access keys, and crypto payments</p>
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent data-testid="dialog-booking">
          <DialogHeader>
            <DialogTitle>Book Room {selectedRoom?.number}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-2">{selectedRoom?.type} Room</div>
              <div className="text-xs text-muted-foreground space-y-1">
                {selectedRoom?.features.map((feature, idx) => (
                  <div key={idx}>• {feature}</div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Guest Name</label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-3 py-2 rounded-md border bg-background text-sm"
                placeholder="Enter guest name"
                data-testid="input-guest-name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Number of Nights</label>
              <input
                type="number"
                min="1"
                max="30"
                value={nights}
                onChange={(e) => setNights(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 rounded-md border bg-background text-sm"
                data-testid="input-nights"
              />
            </div>

            <div className="p-3 rounded-md bg-primary/10 border border-primary/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Total Cost</span>
                <span className="text-lg font-bold text-primary" data-testid="text-total-cost">
                  {selectedRoom ? (selectedRoom.pricePerNight * nights).toFixed(1) : "0"} MATIC
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                {selectedRoom?.pricePerNight} MATIC × {nights} night{nights > 1 ? "s" : ""}
              </div>
            </div>

            {!walletConnected ? (
              <Button
                onClick={() => setWalletConnected(true)}
                className="w-full"
                data-testid="button-connect-wallet"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet to Book
              </Button>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                  <Wallet className="w-3 h-3" />
                  <span>Wallet Connected: 0x742d...35Bd</span>
                </div>
                <Button
                  onClick={handleBookRoom}
                  disabled={!guestName.trim()}
                  className="w-full"
                  data-testid="button-confirm-booking"
                >
                  <Key className="w-4 h-4 mr-2" />
                  Confirm Booking & Mint NFT Key
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
