import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Zap, 
  Droplets, 
  Users, 
  TrendingUp, 
  MapPin, 
  Heart, 
  Recycle,
  ArrowRight,
  Play,
  Target,
  Shield,
  Globe
} from "lucide-react";
import heroCommunity from "@/assets/hero-community.jpg";

const Index = () => {
  const [activeImpact, setActiveImpact] = useState(0);

  const impactStats = [
    { icon: Zap, label: "kWh Generated", value: "125,430", color: "text-yellow-600" },
    { icon: Droplets, label: "Liters Harvested", value: "89,250", color: "text-blue-600" },
    { icon: Recycle, label: "Kg Composted", value: "15,678", color: "text-green-600" },
    { icon: Users, label: "Community Members", value: "2,847", color: "text-purple-600" }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Interactive Impact Map",
      description: "Visualize solar installations, water systems, and community projects across Langata in real-time."
    },
    {
      icon: TrendingUp,
      title: "Eco Dashboard",
      description: "Track your environmental impact with detailed metrics on energy, water, and waste reduction."
    },
    {
      icon: Heart,
      title: "Community Marketplace",
      description: "Connect with vetted local green tech providers and join regenerative initiatives."
    },
    {
      icon: Target,
      title: "Micro-Investment Tracker",
      description: "Contribute to and monitor neighborhood regenerative projects with transparent impact tracking."
    }
  ];

  const userTypes = [
    {
      title: "Residents",
      description: "Access solar installations, water harvesting, and join community challenges",
      icon: Users,
      color: "bg-gradient-primary"
    },
    {
      title: "Green Tech Businesses",
      description: "Register services, manage requests, and track ESG impact metrics",
      icon: Leaf,
      color: "bg-gradient-nature"
    },
    {
      title: "Community Leaders",
      description: "Plan regenerative zones and organize community workshops",
      icon: Globe,
      color: "bg-gradient-earth"
    },
    {
      title: "Platform Admins",
      description: "Oversee platform growth and connect with donors and investors",
      icon: Shield,
      color: "bg-gradient-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">LRIP</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">Impact</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              Join Platform
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCommunity} 
            alt="Langata Community Regeneration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Leaf className="w-4 h-4 mr-2" />
              Regenerative Innovation Platform
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Empowering <span className="text-primary">Langata</span> Through 
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Regenerative Technology
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join our community-centric platform connecting residents, businesses, and leaders 
              to collaboratively design, manage, and benefit from solar energy, water harvesting, 
              composting, and urban farming initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-impact">
                Start Your Green Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="impact" className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Community Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real numbers from our regenerative initiatives across Langata
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card 
                key={index}
                className={`p-6 text-center hover:shadow-soft transition-all duration-300 cursor-pointer ${
                  activeImpact === index ? 'ring-2 ring-primary shadow-impact' : ''
                }`}
                onClick={() => setActiveImpact(index)}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Platform Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to manage and optimize your regenerative impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 animate-slide-in-up">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section id="community" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're a resident, business owner, or community leader, there's a place for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTypes.map((type, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300 group">
                <div className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Langata Together?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of community members already making a difference through regenerative technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-impact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">LRIP</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering Langata through regenerative innovation and community collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Impact Map</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Langata, Nairobi</li>
                <li>hello@lrip.community</li>
                <li>+254 700 000 000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Langata Regenerative Innovation Platform. Building a sustainable future together.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
