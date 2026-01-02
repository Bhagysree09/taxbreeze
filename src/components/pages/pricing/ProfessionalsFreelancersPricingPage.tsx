import { motion } from 'motion/react';
 
import { Check, Star, Shield, Clock, Users, ArrowRight, Phone, Mail } from 'lucide-react';
=======
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
>>>>>>> 7ddcbfd7df36bd345dd8a664a09a2070ea875c31
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

 
          {/* Right Column - CTA */}
              <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24"
            >
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <p className="text-gray-500 line-through text-xl mb-2">₹4,599</p>
                    <p className="text-5xl text-[#1A1A1A] mb-2">₹2,999</p>
                    <p className="text-green-600">Save 60% Limited Time Offer</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button className="w-full bg-gradient-to-r from-[#6A23F5] to-[#A855F7] hover:from-[#571BD0] hover:to-[#8B4FFF] text-white h-14 text-lg rounded-xl">
                      Get Started Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full h-14 text-lg rounded-xl border-2 border-[#6A23F5] text-[#6A23F5] hover:bg-[#E9D9FF]">
                        Talk to Expert
                      </Button>
                    </Link>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <h3 className="text-lg text-[#1A1A1A] mb-4">Need Help?</h3>
                    <a href="tel:9740564642" className="flex items-center gap-3 text-gray-700 hover:text-[#6A23F5] transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>+91 97405 64642</span>
                    </a>
                    <a href="mailto:info@taxbreeze.in" className="flex items-center gap-3 text-gray-700 hover:text-[#6A23F5] transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>info@taxbreeze.in</span>
                    </a>
                    <a
                      href="https://wa.me/9740564642"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0CAB63] text-white rounded-xl hover:bg-[#0a9052] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-xl">
                    <p className="text-sm text-center text-gray-700">
                      ✓ 100% Secure & Confidential<br />
                      ✓ Money Back Guarantee<br />
                      ✓ Expert CA Support
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
=======
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
>>>>>>> 7ddcbfd7df36bd345dd8a664a09a2070ea875c31
          </div>
        </div>
      </div>
    </div>
  );
}
