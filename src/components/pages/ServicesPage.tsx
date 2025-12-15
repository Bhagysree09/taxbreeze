import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  FileText,
  Receipt,
  ShieldCheck,
  Building2,
  UtensilsCrossed,
} from 'lucide-react';

import { Card, CardContent } from '../ui/card';

interface ServiceCategory {
  icon: LucideIcon;
  category: string;
  services: string[];
  color: string;
  emoji: string;
}

export function ServicesPage() {
  const serviceCategories: ServiceCategory[] = [
    {
      icon: FileText,
      category: 'Income Tax Filing',
      services: ['Salaried', 'Capital Gains', 'NRIs', 'ESOP/RSU'],
      color: 'from-blue-500 to-blue-600',
      emoji: '📋',
    },
    {
      icon: Receipt,
      category: 'GST Services',
      services: ['Registration', 'Monthly Filing', 'Compliance Review'],
      color: 'from-green-500 to-green-600',
      emoji: '📊',
    },
    {
      icon: ShieldCheck,
      category: 'Trademark Services',
      services: ['Registration', 'Objection Reply'],
      color: 'from-purple-500 to-purple-600',
      emoji: '🛡️',
    },
    {
      icon: Building2,
      category: 'Business Registrations',
      services: ['Pvt Ltd', 'LLP', 'Proprietorship', 'MSME'],
      color: 'from-orange-500 to-orange-600',
      emoji: '🏢',
    },
    {
      icon: UtensilsCrossed,
      category: 'Licensing',
      services: ['Food License (FSSAI)'],
      color: 'from-red-500 to-red-600',
      emoji: '🍽️',
    },
  ];

  return (
    <div className="bg-[#F7F7FB]">
      {/* HERO */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-[#1A1A1A] mb-4"
        >
          Our Professional Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#6F6F6F] max-w-2xl mx-auto"
        >
          End-to-end compliance, taxation, and registration services trusted by businesses across India.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-sm hover:shadow-xl transition-all h-full">
                    {/* Floating Icon */}
                    <div
                      className={`absolute -top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color}
                      flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <CardContent className="pt-12 pb-8 px-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{category.emoji}</span>
                        <h3 className="text-xl font-semibold text-[#1A1A1A]">
                          {category.category}
                        </h3>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {category.services.map((service) => (
                          <li
                            key={service}
                            className="text-sm text-[#6F6F6F] pl-4 relative"
                          >
                            <span
                              className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}
                            />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
