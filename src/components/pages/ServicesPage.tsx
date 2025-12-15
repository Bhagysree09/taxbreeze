import { Link } from 'react-router-dom';
import {
  FileText,
  Receipt,
  ShieldCheck,
  Building2,
  UtensilsCrossed,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export function ServicesPage() {
  const serviceCategories = [
    {
      icon: FileText,
      category: 'Income Tax Filing',
      services: ['Salaried', 'Capital Gains', 'NRIs', 'ESOP/RSU'],
      link: '/services/income-tax',
    },
    {
      icon: Receipt,
      category: 'GST Services',
      services: ['Registration', 'Monthly Filing', 'Compliance Review'],
      links: ['/services/gst-registration', '/services/gst-filing', '/services/gst-compliance'],
    },
    {
      icon: ShieldCheck,
      category: 'Trademark Services',
      services: ['Registration', 'Objection Reply'],
      links: ['/services/trademark-registration', '/services/trademark-objection'],
    },
    {
      icon: Building2,
      category: 'Business Registrations',
      services: ['Pvt Ltd', 'LLP', 'Proprietorship', 'MSME'],
      link: '/company',
    },
    {
      icon: UtensilsCrossed,
      category: 'Licensing',
      services: ['Food License (FSSAI)'],
      link: '/services/food-license',
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <Card
                  key={index}
                  className="group relative border border-[#E9D9FF] rounded-2xl transition-all
                             hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Icon Banner */}
                  <div className="h-24 bg-gradient-to-r from-[#6A23F5]/10 to-[#8B4FFF]/10 rounded-t-2xl flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-[#6A23F5]" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-[#1A1A1A] mb-4 text-lg font-semibold">
                      {category.category}
                    </h3>

                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-[#6F6F6F] text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#6A23F5] mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>

                    {/* Single Link */}
                    {category.link && (
                      <Link to={category.link}>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-[#6A23F5] text-[#6A23F5]
                                     hover:bg-[#6A23F5] hover:text-white rounded-xl"
                        >
                          Know More
                        </Button>
                      </Link>
                    )}

                    {/* Multiple Links */}
                    {category.links && (
                      <div className="space-y-2">
                        {category.links.map((link, idx) => (
                          <Link key={idx} to={link}>
                            <Button
                              variant="outline"
                              className="w-full border-2 border-[#6A23F5] text-[#6A23F5]
                                         hover:bg-[#6A23F5] hover:text-white rounded-xl"
                            >
                              {category.services[idx]}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E9D9FF]/40 to-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-[#1A1A1A] mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-[#6F6F6F] mb-10 text-lg">
            Talk to our experts and get the right compliance solution today.
          </p>
          <Link to="/contact">
            <Button className="bg-[#6A23F5] hover:bg-[#571BD0] text-white rounded-xl px-10 py-6 text-lg">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
