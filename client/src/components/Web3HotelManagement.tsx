import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hotel, Wallet, Key, TrendingUp, Users, Bed, Sparkles, Calendar as CalendarIcon, ClipboardCheck } from "lucide-react";

type RoomStatus = "available" | "booked" | "occupied" | "checkout";
type CleaningStatus = "clean" | "needs_cleaning" | "cleaning_in_progress";

interface Room {
  id: number;
  type: "Standard" | "Deluxe" | "Suite" | "Penthouse";
  number: string;
  status: RoomStatus;
  cleaningStatus: CleaningStatus;
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
  { id: 1, type: "Standard", number: "101", status: "available", cleaningStatus: "clean", pricePerNight: 0.5, features: ["Queen Bed", "City View", "WiFi"] },
  { id: 2, type: "Standard", number: "102", status: "available", cleaningStatus: "clean", pricePerNight: 0.5, features: ["Queen Bed", "City View", "WiFi"] },
  { id: 3, type: "Standard", number: "103", status: "occupied", cleaningStatus: "clean", pricePerNight: 0.5, features: ["Queen Bed", "City View", "WiFi"], guestName: "John Smith" },
  { id: 4, type: "Deluxe", number: "201", status: "available", cleaningStatus: "clean", pricePerNight: 1.2, features: ["King Bed", "Ocean View", "WiFi", "Minibar"] },
  { id: 5, type: "Deluxe", number: "202", status: "booked", cleaningStatus: "clean", pricePerNight: 1.2, features: ["King Bed", "Ocean View", "WiFi", "Minibar"], guestName: "Sarah Johnson" },
  { id: 6, type: "Deluxe", number: "203", status: "checkout", cleaningStatus: "needs_cleaning", pricePerNight: 1.2, features: ["King Bed", "Ocean View", "WiFi", "Minibar"] },
  { id: 7, type: "Suite", number: "301", status: "available", cleaningStatus: "clean", pricePerNight: 2.5, features: ["King Bed", "Ocean View", "Living Room", "Jacuzzi", "Premium WiFi"] },
  { id: 8, type: "Suite", number: "302", status: "occupied", cleaningStatus: "clean", pricePerNight: 2.5, features: ["King Bed", "Ocean View", "Living Room", "Jacuzzi", "Premium WiFi"], guestName: "Michael Chen" },
  { id: 9, type: "Penthouse", number: "401", status: "available", cleaningStatus: "clean", pricePerNight: 5.0, features: ["2 King Beds", "360° View", "Full Kitchen", "Private Pool", "Butler Service"] },
];

const STATUS_COLORS = {
  available: "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400",
  booked: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
  occupied: "bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400",
  checkout: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400",
};

const CLEANING_COLORS = {
  clean: "text-green-600 dark:text-green-400",
  needs_cleaning: "text-red-600 dark:text-red-400",
  cleaning_in_progress: "text-yellow-600 dark:text-yellow-400",
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
    const interval = setInterval(() => {
      setRooms((prevRooms) => 
        prevRooms.map((room) => {
          // Checkout + Clean → Available
          if (room.status === "checkout" && room.cleaningStatus === "clean" && Math.random() > 0.6) {
            return { ...room, status: "available", guestName: undefined, checkIn: undefined, checkOut: undefined, nftKey: undefined };
          }
          // Cleaning in progress → Clean (after some time)
          if (room.cleaningStatus === "cleaning_in_progress" && Math.random() > 0.7) {
            return { ...room, cleaningStatus: "clean" };
          }
          // Occupied → Checkout + Needs Cleaning
          if (room.status === "occupied" && Math.random() > 0.7) {
            return { ...room, status: "checkout", cleaningStatus: "needs_cleaning" };
          }
          // Booked → Occupied
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

    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === selectedRoom.id
          ? { ...room, status: "booked", guestName, nftKey }
          : room
      )
    );

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
    setTotalRevenue((prev) => prev + totalPrice);

    setShowBookingModal(false);
    setSelectedRoom(null);
    setGuestName("");
    setNights(2);
  };

  const markForCleaning = (roomId: number) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, cleaningStatus: "cleaning_in_progress" } : room
      )
    );
  };

  const markRoomReady = (roomId: number) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? {
              ...room,
              cleaningStatus: "clean",
              status: room.status === "checkout" ? "available" : room.status,
              guestName: room.status === "checkout" ? undefined : room.guestName,
              checkIn: room.status === "checkout" ? undefined : room.checkIn,
              checkOut: room.status === "checkout" ? undefined : room.checkOut,
              nftKey: room.status === "checkout" ? undefined : room.nftKey,
            }
          : room
      )
    );
  };

  const openBookingModal = (room: Room) => {
    if (room.status === "available") {
      setSelectedRoom(room);
      setShowBookingModal(true);
    }
  };

  const availableRooms = rooms.filter((r) => r.status === "available" && r.cleaningStatus === "clean").length;
  const occupancyRate = Math.round(((rooms.length - availableRooms) / rooms.length) * 100);
  const needsCleaningCount = rooms.filter((r) => r.cleaningStatus === "needs_cleaning").length;
  const checkoutRooms = rooms.filter((r) => r.status === "checkout");

  // Calendar data - current month
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Web3 Hotel Management</h3>
          <p className="text-sm text-muted-foreground">
            Decentralized booking platform with housekeeping operations
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard" data-testid="tab-dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="calendar" data-testid="tab-calendar">Calendar</TabsTrigger>
            <TabsTrigger value="housekeeping" data-testid="tab-housekeeping">Housekeeping</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-4">
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

            <div className="max-h-48 overflow-y-auto space-y-2">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className={`p-3 rounded-md border transition-all ${STATUS_COLORS[room.status]} ${
                    room.status === "available" && room.cleaningStatus === "clean" ? "cursor-pointer hover-elevate" : "cursor-default"
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
                        <span className={`text-xs ${CLEANING_COLORS[room.cleaningStatus]}`}>
                          {room.cleaningStatus === "clean" ? "✓" : room.cleaningStatus === "cleaning_in_progress" ? "🧹" : "⚠"}
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
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" />
                <span className="font-semibold">{currentMonth}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {availableRooms} rooms available
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="font-semibold text-muted-foreground p-2">
                  {day}
                </div>
              ))}
              {emptyDays.map((_, i) => (
                <div key={`empty-${i}`} className="p-2"></div>
              ))}
              {calendarDays.map((day) => {
                const isToday = day === currentDate.getDate();
                const availableForDay = Math.floor(Math.random() * (availableRooms + 1));
                return (
                  <div
                    key={day}
                    className={`p-2 rounded-md ${
                      isToday ? "bg-primary/20 font-bold" : "bg-muted/30"
                    }`}
                    data-testid={`calendar-day-${day}`}
                  >
                    <div>{day}</div>
                    <div className="text-xs text-primary mt-1">{availableForDay}</div>
                  </div>
                );
              })}
            </div>
            <div className="text-xs text-muted-foreground text-center">
              Numbers show available rooms per day
            </div>
          </TabsContent>

          {/* Housekeeping Tab */}
          <TabsContent value="housekeeping" className="space-y-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3 h-3 text-red-600 dark:text-red-400" />
                  <span className="text-xs text-muted-foreground">Needs Cleaning</span>
                </div>
                <div className="text-lg font-semibold text-red-600 dark:text-red-400" data-testid="text-needs-cleaning">
                  {needsCleaningCount}
                </div>
              </div>
              <div className="p-3 rounded-md bg-purple-500/10 border border-purple-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <ClipboardCheck className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs text-muted-foreground">Checkout Today</span>
                </div>
                <div className="text-lg font-semibold text-purple-600 dark:text-purple-400" data-testid="text-checkout-count">
                  {checkoutRooms.length}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Rooms Needing Attention</div>
              <div className="max-h-56 overflow-y-auto space-y-2">
                {rooms.filter(r => r.cleaningStatus !== "clean" || r.status === "checkout").map((room) => (
                  <div
                    key={room.id}
                    className="p-3 rounded-md border bg-muted/30"
                    data-testid={`housekeeping-room-${room.number}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-semibold text-sm">Room {room.number}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {room.status} • {room.cleaningStatus.replace('_', ' ')}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {room.cleaningStatus === "needs_cleaning" && (
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => markForCleaning(room.id)}
                            data-testid={`button-start-cleaning-${room.number}`}
                          >
                            Start Cleaning
                          </Button>
                        )}
                        {room.cleaningStatus === "cleaning_in_progress" && (
                          <Button
                            size="sm"
                            variant="default"
                            onClick={() => markRoomReady(room.id)}
                            data-testid={`button-mark-ready-${room.number}`}
                          >
                            Mark Ready
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {rooms.every(r => r.cleaningStatus === "clean" && r.status !== "checkout") && (
                  <div className="text-center text-sm text-muted-foreground py-4">
                    All rooms are clean and ready! ✓
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="pt-2 text-xs text-muted-foreground border-t">
          <p>Demonstrates decentralized hospitality platform with housekeeping operations, blockchain reservations, and NFT access keys</p>
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
