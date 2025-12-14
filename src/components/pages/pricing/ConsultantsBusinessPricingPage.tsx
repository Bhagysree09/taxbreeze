import { motion } from 'motion/react';
import { Check, Star, Shield, Clock, Users, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { Link } from 'react-router-dom';

export function ConsultantsBusinessPricingPage() {
  const features = [
    'Consulting business income from multiple clients',
    'Contractor and vendor payments tracking',
    'Office expenses and overhead deductions',
    'Travel and accommodation expenses',
    'Equipment and technology expenses',
    'Professional liability insurance deductions',
    'Business loss carry forward',
    'Quarterly estimated tax planning',
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Business Tax Expert',
      description: 'Specialists in business and consulting taxation'
    },
    {
      icon: Clock,
      title: 'Year-Round Support',
      description: 'Quarterly tax planning and optimization'
    },
    {
      icon: Users,
      title: 'Growth Focused',
      description: 'Help you scale while minimizing tax burden'
    }
  ];

  const process = [
    'Share your business income and expense details',
    'Our specialist will identify tax-saving opportunities',
    'We prepare and file your business tax return',
    'Ongoing quarterly guidance for tax efficiency'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-r from-[#6A23F5] to-[#A855F7] text-white py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1553531088-e18cf0801263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnR8ZW58MXx8fHwxNzY0NTcwNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#6A23F5]/95 to-[#A855F7]/95" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-5xl md:text-6xl mb-6">
              For Consultants & Business Owners
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Comprehensive tax planning for consulting businesses and entrepreneurs
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-white">4.9/5 (1,500+ reviews)</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-white/80 line-through text-xl">₹19,999</p>
                <p className="text-5xl">₹4,999</p>
                <p className="text-green-300 mt-2">Save 65%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1A1A1A] mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-[#6F6F6F]">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="border-2 border-[#E9D9FF]">
                      <CardContent className="p-6">
                        <Icon className="w-8 h-8 text-[#6A23F5] mb-4" />
                        <h3 className="text-[#1A1A1A] mb-2">{benefit.title}</h3>
                        <p className="text-[#6F6F6F] text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Our Process</h2>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6A23F5] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-[#6F6F6F]">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - CTA */}
          <div>
            <Card className="border-2 border-[#E9D9FF] sticky top-20">
              <CardContent className="p-8">
                <h3 className="text-[#1A1A1A] text-xl mb-4">Ready to File?</h3>
                <p className="text-[#6F6F6F] mb-6">
                  Optimize your business taxes with expert guidance
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-[#6A23F5] hover:bg-[#571BD0] text-white rounded-xl mb-4">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <div className="space-y-3">
                  <a href="tel:9740564642">
                    <Button variant="outline" className="w-full border-2 border-[#6A23F5] text-[#6A23F5] rounded-xl">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                  </a>
                  <a href="https://wa.me/919740564642" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-2 border-[#6A23F5] text-[#6A23F5] rounded-xl">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
