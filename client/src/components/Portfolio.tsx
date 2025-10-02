import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";
import taxiAppImg from "@assets/stock_images/taxi_cab_car_yellow__4f428e56.jpg";
import hotelAppImg from "@assets/stock_images/luxury_hotel_room_bo_97b745d5.jpg";
import salonAppImg from "@assets/stock_images/beauty_salon_hair_st_3eaead1c.jpg";
import carAppImg from "@assets/stock_images/auto_mechanic_car_re_0fd8939f.jpg";
import handymanAppImg from "@assets/stock_images/home_repair_handyman_babd5e64.jpg";
import foodDeliveryImg from "@assets/stock_images/fresh_food_plate_res_ed324129.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "RideNow Taxi App",
      description: "Real-time ride-hailing platform with driver matching and live tracking",
      timeline: "13 days",
      result: "500+ rides in week 1",
      tech: ["React Native", "Node.js", "Google Maps", "Socket.io"],
      image: taxiAppImg,
    },
    {
      title: "StayEasy Hotel Booking",
      description: "Hotel reservation system with payments and booking management",
      timeline: "12 days",
      result: "50+ hotels onboarded",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      image: hotelAppImg,
    },
    {
      title: "GlamBook Salon App",
      description: "Beauty salon booking app with stylist profiles and appointment scheduling",
      timeline: "11 days",
      result: "30 salons, 1K bookings",
      tech: ["React Native", "Firebase", "Twilio"],
      image: salonAppImg,
    },
    {
      title: "AutoCare Clinic",
      description: "Car service booking platform with mechanic scheduling and service tracking",
      timeline: "13 days",
      result: "20 clinics connected",
      tech: ["React", "Node.js", "MongoDB"],
      image: carAppImg,
    },
    {
      title: "FixIt Handyman",
      description: "On-demand home services marketplace for AC, electrical, pool, and repairs",
      timeline: "14 days",
      result: "100+ service pros",
      tech: ["React Native", "Node.js", "Stripe", "Google Maps"],
      image: handymanAppImg,
    },
    {
      title: "FreshMeal Delivery",
      description: "Food delivery platform connecting restaurants with customers and delivery partners",
      timeline: "12 days",
      result: "150+ restaurants, 5K orders",
      tech: ["React Native", "Node.js", "Stripe", "Google Maps"],
      image: foodDeliveryImg,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real MVPs we've built and launched for startups worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate bg-background"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-5">{project.description}</p>
                
                <div className="flex flex-wrap gap-6 mb-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                      <div className="font-semibold text-sm">{project.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Result</div>
                      <div className="font-semibold text-sm">{project.result}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
