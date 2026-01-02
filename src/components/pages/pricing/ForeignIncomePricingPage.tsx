import { motion } from 'motion/react';
import { Check, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { Link } from 'react-router-dom';

export function ForeignIncomePricingPage() {
  const features = [
    'Everything in Capital Gains Income Plan',
    'Income earned outside India',
    'Foreign salary and wages',
    'Income from NRE/NRO accounts',
    'Foreign investment income',
    'DTAA (Double Taxation Avoidance Agreement) guidance',
    'Foreign tax credit calculations',
    'TDS on foreign income',
    'Schedule FA and FSI preparation',
    'Residential status determination',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div 
        className="relative bg-gradient-to-r from-[#6A23F5] to-[#A855F7] text-white py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1758519289022-5f9dea0d8cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2lhbCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NDU2OTYyMXww&ixlib=rb-4.1.0&q=80&w=1080)',
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">🌍</div>
            <h1 className="text-5xl md:text-6xl mb-6">Foreign Income Tax Filing</h1>
            <p className="text-xl mb-8 text-white/90">
              For NRIs and individuals with foreign income
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-white">4.8/5 (1,200+ reviews)</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white/80 line-through text-xl">₹16,249</p>
              <p className="text-5xl">₹4,999</p>
              <p className="text-green-300 mt-2">Save 60%</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl text-[#1A1A1A] mb-6">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-[#1A1A1A]">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <p className="text-gray-500 line-through text-xl mb-2">₹16,249</p>
                    <p className="text-5xl text-[#1A1A1A] mb-2">₹4,999</p>
                    <p className="text-green-600">Save 60%</p>
                  </div>
                  <div className="space-y-4 mb-6">
                    <Button className="w-full bg-gradient-to-r from-[#6A23F5] to-[#A855F7] text-white h-14 text-lg rounded-xl">
                      Get Started Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full h-14 text-lg rounded-xl border-2 border-[#6A23F5] text-[#6A23F5]">
                        Talk to Expert
                      </Button>
                    </Link>
                  </div>
                  <div className="border-t pt-6 space-y-4">
                    <a href="tel:9740564642" className="flex items-center gap-3 text-gray-700 hover:text-[#6A23F5]">
                      <Phone className="w-5 h-5" />
                      <span>+91 97405 64642</span>
                    </a>
                    <a href="mailto:info@taxbreeze.in" className="flex items-center gap-3 text-gray-700 hover:text-[#6A23F5]">
                      <Mail className="w-5 h-5" />
                      <span>info@taxbreeze.in</span>
                    </a>
                              <a href="https://wa.me/9740564642" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0CAB63] text-white rounded-xl hover:bg-[#0a9052] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp Us
                    </a>
                     <div className="mt-6 p-4 bg-green-50 rounded-xl">
                    <p className="text-sm text-center text-gray-700">
                      ✓ 100% Secure & Confidential<br />
                      ✓ Money Back Guarantee<br />
                      ✓ Expert CA Support
                    </p>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
