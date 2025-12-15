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
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-medium text-[#6A23F5] shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#6A23F5]" />
              Tailored solutions for individuals & businesses
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight"
            >
              Professional Tax & Compliance Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-[#6F6F6F] max-w-2xl"
            >
              End-to-end income tax, GST, and business registration support so you can focus on
              growing your business while we handle the compliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center gap-4 text-sm text-[#4B4B4B]"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Trusted by businesses across India</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-[#E0E0EA]" />
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Expert CA & legal professionals</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                Explore our core service categories
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#6F6F6F] max-w-xl">
                Pick a category to discover specific services tailored to your tax, GST, licensing,
                and business needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="h-full"
                >
                  <Card className="relative flex h-full flex-col bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                    {/* Floating Icon */}
                    <div
                      className={`absolute -top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color}
                      flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <CardContent className="pt-12 pb-6 px-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl" aria-hidden="true">
                          {category.emoji}
                        </span>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">
                          {category.category}
                        </h3>
                      </div>

                      <ul className="mt-3 space-y-2">
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
