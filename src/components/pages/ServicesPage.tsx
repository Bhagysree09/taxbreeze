import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  FileText,
  Receipt,
  ShieldCheck,
  Building2,
  UtensilsCrossed,
  ArrowRight,
} from 'lucide-react';

import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

/* ------------------------------------
   Types
------------------------------------ */

interface ServiceCategory {
  icon: LucideIcon;
  category: string;
  services: string[];
  link?: string;
  links?: string[];
  color: string;
  bgColor: string;
  emoji: string;
}

/* ------------------------------------
   Component
------------------------------------ */

export function ServicesPage() {

  const serviceCategories: ServiceCategory[] = [
    {
      icon: FileText,
      category: 'Income Tax Filing',
      services: ['Salaried', 'Capital Gains', 'NRIs', 'ESOP/RSU'],
      link: '/services/income-tax',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      emoji: '📋',
    },
    {
      icon: Receipt,
      category: 'GST Services',
      services: ['Registration', 'Monthly Filing', 'Compliance Review'],
      links: [
        '/services/gst-registration',
        '/services/gst-filing',
        '/services/gst-compliance',
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      emoji: '📊',
    },
    {
      icon: ShieldCheck,
      category: 'Trademark Services',
      services: ['Registration', 'Objection Reply'],
      links: [
        '/services/trademark-registration',
        '/services/trademark-objection',
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      emoji: '🛡️',
    },
    {
      icon: Building2,
      category: 'Business Registrations',
      services: ['Pvt Ltd', 'LLP', 'Proprietorship', 'MSME'],
      link: '/company',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      emoji: '🏢',
    },
    {
      icon: UtensilsCrossed,
      category: 'Licensing',
      services: ['Food License (FSSAI)'],
      link: '/services/food-license',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      emoji: '🍽️',
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="mb-4">Explore Our Services</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Comprehensive tax, GST, and business compliance solutions tailored for you.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-[#1A1A1A] mb-4"
            >
              Our Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#6F6F6F] max-w-2xl mx-auto"
            >
              Comprehensive solutions designed to simplify your financial and business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                    {/* Banner */}
                    <div
                      className={`relative h-48 bg-gradient-to-br ${category.color} flex items-center justify-center`}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -ml-20 -mb-20" />
                      </div>

                      <div className="relative flex flex-col items-center gap-2">
                        <span className="text-6xl">{category.emoji}</span>
                        <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#6A23F5] transition-colors">
                        {category.category}
                      </h3>

                      <ul className="space-y-3 mb-6">
                        {category.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-center text-[#6F6F6F] text-sm font-medium"
                          >
                            <span
                              className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${category.color}`}
                            />
                            {service}
                          </li>
                        ))}
                      </ul>

                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E9D9FF] to-transparent mb-6" />

                      {/* Single link */}
                      {category.link && (
                        <Link to={category.link}>
                          <Button
                            className={`w-full bg-gradient-to-r ${category.color} text-white font-semibold rounded-xl flex items-center justify-center gap-2`}
                          >
                            Explore More
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}

                      {/* Multiple links */}
                      {category.links && (
                        <div className="space-y-2.5">
                          {category.links.map((link, idx) => (
                            <Link key={link} to={link}>
                              <Button
                                variant="outline"
                                className={`w-full border-2 border-[#E9D9FF] text-[#6A23F5]
                                hover:bg-gradient-to-r ${category.color} hover:text-white`}
                              >
                                {category.services[idx]}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-r from-[#6A23F5] to-[#8B4FFF] overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Our expert team is ready to guide you to the right compliance solution
          </p>

          <Link to="/contact">
            <Button className="bg-white text-[#6A23F5] font-bold rounded-xl px-12 py-4 text-lg shadow-xl flex items-center gap-2 mx-auto">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
