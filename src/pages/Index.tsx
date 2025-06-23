
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Camera, Code, Search, Star, Check, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send to your backend
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch within 24 hours to discuss how we can help grow your practice."
    });
    
    setEmail("");
    setName("");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">
            Aesthetic<span className="text-blue-600">Growth</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('results')} className="text-slate-600 hover:text-blue-600 transition-colors">Results</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-blue-600 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Contact</button>
          </nav>
          <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Transform Your Practice with 
              <span className="text-blue-600 block">Premium Content & Ads</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help aesthetic and plastic surgeons attract more qualified patients through 
              high-converting content creation and targeted advertising campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
              >
                Schedule Free Consultation
              </Button>
              <Button 
                onClick={() => scrollToSection('results')} 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50"
              >
                See Our Results
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-slate-600">Surgeons Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-slate-600">Average Lead Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.8M+</div>
              <div className="text-slate-600">Revenue Generated</div>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Specialized Services for Aesthetic Practices
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven system combines compelling content creation with targeted advertising 
              to attract your ideal patients and grow your practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Content Creation</h3>
                <p className="text-slate-600 mb-6">
                  Professional before/after galleries, educational content, and engaging social media posts 
                  that showcase your expertise and build trust with potential patients.
                </p>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Before/After Photography</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Educational Videos</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Social Media Content</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Blog Articles</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Targeted Advertising</h3>
                <p className="text-slate-600 mb-6">
                  Data-driven advertising campaigns on Google and social media platforms 
                  that reach patients actively seeking aesthetic procedures.
                </p>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Google Ads Management</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Facebook & Instagram Ads</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Audience Targeting</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Campaign Optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Website Optimization</h3>
                <p className="text-slate-600 mb-6">
                  Convert more visitors into consultations with optimized landing pages, 
                  streamlined booking systems, and trust-building elements.
                </p>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Landing Page Design</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Booking Integration</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Mobile Optimization</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Conversion Tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Proven Results for Our Clients
            </h2>
            <p className="text-xl text-slate-600">
              See how we've helped aesthetic practices grow their patient base and revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-slate-600">Average ROI</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">65%</div>
              <div className="text-slate-600">More Consultations</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-slate-600">Cost Per Lead Reduction</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-slate-600">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Case Study: Beverly Hills Plastic Surgery</h3>
                  <p className="text-blue-100 text-lg">
                    How we helped Dr. Johnson increase monthly consultations by 180% in just 6 months
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">12</div>
                    <div className="text-blue-100">Consultations/Month Before</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">34</div>
                    <div className="text-blue-100">Consultations/Month After</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$180K</div>
                    <div className="text-blue-100">Additional Monthly Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Trusted by leading plastic surgeons across the country
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "AestheticGrowth transformed our online presence. We went from struggling to fill our schedule 
                  to having a 3-month waiting list for consultations."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-slate-800">Dr. Sarah Martinez</div>
                    <div className="text-slate-500">Beverly Hills Aesthetic Center</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "The quality of leads has improved dramatically. We're seeing patients who are genuinely 
                  interested and ready to move forward with procedures."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-slate-800">Dr. Michael Chen</div>
                    <div className="text-slate-500">Elite Plastic Surgery</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "Professional, results-driven, and they truly understand the aesthetic industry. 
                  Our ROI has been exceptional from day one."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-slate-800">Dr. Jennifer Williams</div>
                    <div className="text-slate-500">Coastal Plastic Surgery</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Grow Your Practice?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Schedule a free consultation to discuss how we can help you attract more qualified patients 
              and increase your revenue with our proven marketing strategies.
            </p>

            <Card className="bg-white p-8 max-w-2xl mx-auto">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Get Your Free Marketing Audit
                </h3>
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 text-lg"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 text-lg"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg"
                  >
                    Schedule Free Consultation
                  </Button>
                </form>
                <p className="text-sm text-slate-500">
                  No commitment required. We'll analyze your current marketing and show you 
                  specific opportunities to grow your practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Aesthetic<span className="text-blue-400">Growth</span>
            </div>
            <p className="text-slate-300 mb-8">
              Specialized digital marketing for aesthetic and plastic surgery practices
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-slate-300">
              <span>hello@aestheticgrowth.com</span>
              <span>|</span>
              <span>(555) 123-4567</span>
              <span>|</span>
              <span>Beverly Hills, CA</span>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 text-sm text-slate-400">
              © 2024 AestheticGrowth. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
