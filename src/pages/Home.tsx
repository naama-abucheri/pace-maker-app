import { ArrowRight, Play, Camera, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Every Brand Has a Story
              <span className="block text-white/90">Worth Sharing</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                At Front Pace, we believe every brand has a story worth sharing. Our mission is to bring those stories to life through exceptional videography, photography, and audio production. From small businesses to large-scale campaigns, we partner with you to deliver custom content that resonates, engages, and leaves a lasting impact.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                With a team of creative professionals passionate about storytelling, we combine cutting-edge technology with a deep understanding of branding to produce visuals and sounds that stand out in a crowded marketplace. Whether you need a bold marketing video, stunning product photography, or immersive audio content, we're here to make your brand unforgettable.
              </p>
            </div>
            <Link to="/book-gear">
              <Button
                variant="hero"
                size="lg"
                className="text-lg px-8 py-4 animate-slide-up"
              >
                Book a Shoot
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional content creation that makes your brand stand out
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Videography</h3>
                <p className="text-muted-foreground">
                  From marketing videos to documentaries, we create compelling visual stories that captivate your audience.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Camera className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Photography</h3>
                <p className="text-muted-foreground">
                  Professional product photography and brand imagery that makes your business shine.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mic className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Audio Production</h3>
                <p className="text-muted-foreground">
                  Crystal-clear audio production for podcasts, commercials, and branded content.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Book your equipment and start your project today.
          </p>
          <Link to="/book-gear">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Book Equipment Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;