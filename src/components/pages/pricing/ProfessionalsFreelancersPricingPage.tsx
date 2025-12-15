import { motion } from 'motion/react';
import {
  Check,
  Star,
  Shield,
  Clock,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
} from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';


export function ProfessionalsFreelancersPricingPage() {
  const features = [
    'Short-term & long-term capital gains (STCG / LTCG)',
    'Capital gains from stocks & mutual funds',
    'Property sale capital gains',
    'Cryptocurrency & digital asset gains',
    'Indexed cost calculation',
    'Exemptions under Section 54 / 54EC / 54F',
    'Tax-loss harvesting support',
    'Interest, dividend & other income',
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Tax Optimization',
      description: 'Legally minimize tax liability with expert planning',
    },
    {
      icon: Shield,
      title: 'Accurate Calculations',
      description: 'Complex capital gains handled with precision',
    },
    {
      icon: Clock,
      title: 'Quick Filing',
      description: 'ITR filing within 48 hours',
    },
  ];

  const process = [
    'Upload capital gains statements & documents',
    'Our CA calculates gains and exemptions',
    'You review and approve',
    'We file your return and share acknowledgment',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* HERO */}
      <div
        className="relative bg-gradient-to-r from-[#6A23F5] to-[#A855F7] text-white py-24 overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1666467831470-8f26f983391f)',
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
            <div className="text-6xl mb-6">💹</div>

            <h1 className="text-5xl md:text-6xl mb-6">
              Capital Gains Income Tax Filing
            </h1>

            <p className="text-xl mb-8 text-white/90">
              Perfect for investors with capital gains from stocks, mutual funds,
              property, or crypto
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-white">
                  4.5/5 (1,800+ reviews)
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/80 line-through text-xl">₹8,749</p>
              <p className="text-5xl">₹2,999</p>
              <p className="text-green-300 mt-2">Save 60%</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-12">
            {/* INCLUDED */}
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}>
              <h2 className="text-[#1A1A1A] mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1" />
                    <p className="text-[#6F6F6F]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* BENEFITS */}
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}>
              <h2 className="text-[#1A1A1A] mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((b, i) => (
                  <Card key={i} className="border-2 border-[#E9D9FF]">
                    <CardContent className="p-6">
                      <b.icon className="w-8 h-8 text-[#6A23F5] mb-4" />
                      <h3 className="mb-2">{b.title}</h3>
                      <p className="text-sm text-[#6F6F6F]">
                        {b.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* PROCESS */}
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}>
              <h2 className="text-[#1A1A1A] mb-6">Our Process</h2>
              <div className="space-y-4">
                {process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#6A23F5] text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <p className="text-[#6F6F6F]">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT CTA */}
          <div>
            <Card className="border-2 border-[#E9D9FF] sticky top-20">
              <CardContent className="p-8">
                <h3 className="text-xl mb-4">Ready to File?</h3>
                <p className="text-[#6F6F6F] mb-6">
                  Expert CA handling with maximum tax savings
                </p>

                <Button className="w-full bg-[#6A23F5] text-white rounded-xl mb-4">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="space-y-3">
                  <a href="tel:9740564642">
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                  </a>
                  <a href="mailto:info@taxbreeze.in">
                    <Button variant="outline" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
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
