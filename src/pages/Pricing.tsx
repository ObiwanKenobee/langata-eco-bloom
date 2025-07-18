import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Zap, Users, Crown, Star, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "Perfect for individual households starting their regenerative journey",
      features: [
        "Basic energy & water tracking",
        "Access to community marketplace",
        "Educational resources",
        "Monthly impact reports",
        "Community forum access"
      ],
      icon: Users,
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Green Business",
      price: "$29",
      period: "/month",
      description: "For local green tech providers and service businesses",
      features: [
        "Everything in Community",
        "Business profile & listings",
        "Customer management tools",
        "Advanced analytics dashboard",
        "Priority customer support",
        "ESG impact reporting",
        "Lead generation tools"
      ],
      icon: Zap,
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations and community development projects",
      features: [
        "Everything in Green Business",
        "Custom integrations & APIs",
        "White-label solutions",
        "Dedicated account manager",
        "Advanced reporting & insights",
        "Multi-location management",
        "Training & onboarding support"
      ],
      icon: Crown,
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "How does the free Community plan work?",
      answer: "The Community plan gives households access to basic tracking tools, educational resources, and the community marketplace at no cost. Perfect for getting started with regenerative practices."
    },
    {
      question: "What's included in the Green Business plan?",
      answer: "Green Business includes all Community features plus business listings, customer management, advanced analytics, and priority support to help local providers grow their regenerative services."
    },
    {
      question: "Can I switch plans anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Do you offer discounts for community organizations?",
      answer: "We offer special pricing for registered NGOs, community groups, and educational institutions. Contact us to learn more about our community discount programs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header Navigation */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">LRIP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-4 w-4 mr-1" />
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Choose Your Impact Level
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From individual households to large enterprises, we have the right plan to amplify your regenerative impact in Langata.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative transition-all duration-300 hover:shadow-impact hover:scale-105 ${
                  plan.popular 
                    ? 'border-primary shadow-soft ring-2 ring-primary/20' 
                    : 'border-border/50 hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary/10' : 'bg-secondary'}`}>
                      <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-primary' : 'text-secondary-foreground'}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Regenerative Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Langata residents, businesses, and organizations building a sustainable future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Today
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Langata Regenerative Innovation Platform. Building sustainable communities together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;