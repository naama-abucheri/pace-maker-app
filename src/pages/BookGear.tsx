import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import cameraGear from "@/assets/camera-gear.jpg";
import lightingGear from "@/assets/lighting-gear.jpg";
import audioGear from "@/assets/audio-gear.jpg";

const BookGear = () => {
  const gearItems = [
    {
      id: 1,
      name: "Professional Cinema Camera Kit",
      description: "High-end DSLR camera with professional lenses, perfect for videography and photography projects. Includes tripod and stabilizer.",
      image: cameraGear,
      price: "From KSh 5,000/day"
    },
    {
      id: 2,
      name: "Professional Lighting Setup",
      description: "Complete lighting kit with softboxes, LED panels, and stands. Perfect for studio photography and video production.",
      image: lightingGear,
      price: "From KSh 3,000/day"
    },
    {
      id: 3,
      name: "Audio Recording Equipment",
      description: "Professional microphones, audio mixer, and recording equipment for crystal-clear sound production.",
      image: audioGear,
      price: "From KSh 2,500/day"
    }
  ];

  const handleWhatsAppClick = (gearName: string) => {
    const message = `Hello Front Pace, I'd like to book ${gearName}. Please send me more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254795716772?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Professional Gear
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rent high-quality equipment for your next project. All gear is professionally maintained and ready to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gearItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {item.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{item.description}</p>
                <Button
                  variant="whatsapp"
                  className="w-full"
                  onClick={() => handleWhatsAppClick(item.name)}
                >
                  <MessageCircle className="mr-2" size={16} />
                  Book via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-secondary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Custom Equipment?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see what you're looking for? We have access to a wide range of professional equipment. 
            Contact us directly to discuss your specific needs.
          </p>
          <Button
            variant="outline"
            onClick={() => handleWhatsAppClick("custom equipment package")}
          >
            <MessageCircle className="mr-2" size={16} />
            Request Custom Quote
          </Button>
        </div>

        {/* Rental Terms */}
        <div className="mt-12 bg-muted/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Rental Terms</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Minimum rental period: 1 day</li>
            <li>• Equipment pickup available in Nairobi</li>
            <li>• Delivery available for additional fee</li>
            <li>• Security deposit required for all rentals</li>
            <li>• Professional training available if needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookGear;