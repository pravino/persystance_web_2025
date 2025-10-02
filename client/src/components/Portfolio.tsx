import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";
import taxiAppImg from "@assets/stock_images/smartphone_displayin_b7501d26.jpg";
import hotelAppImg from "@assets/stock_images/luxury_hotel_room_bo_97b745d5.jpg";
import salonAppImg from "@assets/stock_images/beauty_salon_hair_st_3eaead1c.jpg";
import carAppImg from "@assets/stock_images/auto_mechanic_car_re_0fd8939f.jpg";
import handymanAppImg from "@assets/stock_images/home_repair_handyman_babd5e64.jpg";
import homeserveAppImg from "@assets/stock_images/house_maintenance_hv_fcbd4934.jpg";

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
      title: "HomeServe Pro",
      description: "Comprehensive household and office repair booking with talent matching",
      timeline: "12 days",
      result: "200+ bookings/week",
      tech: ["Next.js", "PostgreSQL", "Twilio", "Stripe"],
      image: homeserveAppImg,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-chart-2/5 to-background" />
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real MVPs we've built and launched for startups worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2 cursor-default transition-all duration-500 hover:scale-[1.02] border-2 shadow-xl hover:shadow-2xl"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 to-chart-2/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="font-bold">{project.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-chart-2/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-chart-2" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Result</div>
                      <div className="font-bold">{project.result}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-medium px-3 py-1">
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
