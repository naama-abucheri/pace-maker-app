import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254795716772', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "0795716772",
      link: "tel:+254795716772"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@front-pace.com",
      link: "mailto:info@front-pace.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nairobi, Kenya",
      link: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8AM - 6PM",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          {item.link ? (
                            <a 
                              href={item.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* WhatsApp Section */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-700">
                  <MessageCircle size={20} />
                  <span>WhatsApp Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 mb-4">
                  Get instant responses to your questions. Chat with us on WhatsApp for quick support and booking assistance.
                </p>
                <Button
                  variant="whatsapp"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2" size={16} />
                  Talk to us on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    rows={5}
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full" variant="default">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Office Hours */}
        <div className="mt-16 text-center bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Office Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground">
            <div>
              <p className="font-semibold">Monday - Friday</p>
              <p>8:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Saturday</p>
              <p>9:00 AM - 4:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Sunday</p>
              <p>Emergency calls only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;