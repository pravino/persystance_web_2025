import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";
import taxiAppImg from "@assets/stock_images/mobile_app_interface_be877588.jpg";
import hotelAppImg from "@assets/stock_images/hotel_booking_app_in_2433916f.jpg";
import salonAppImg from "@assets/stock_images/beauty_salon_appoint_72e84a4c.jpg";
import carAppImg from "@assets/stock_images/car_repair_service_b_19584506.jpg";
import handymanAppImg from "@assets/stock_images/home_services_handym_76f545a8.jpg";
import homeserveAppImg from "@assets/stock_images/household_repair_ser_11f93b3d.jpg";

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
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real MVPs we've built and launched for startups worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2 cursor-default transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-chart-2" />
                    <span className="font-medium">{project.result}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
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
