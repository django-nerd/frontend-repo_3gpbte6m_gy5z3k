import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Premium',
    color: 'from-emerald-600 to-emerald-400',
    badge: <Crown className="h-5 w-5" aria-hidden="true" />,
    features: [
      'Four walks/activities per day',
      'Private grass area',
      'Daily updates and photos',
      'Treats as agreed with owner',
      'Underfloor heating/cooling suite',
    ],
    highlight: true,
  },
  {
    name: 'Classic',
    color: 'from-teal-600 to-teal-400',
    badge: <Star className="h-5 w-5" aria-hidden="true" />,
    features: [
      'Three walks/activities per day',
      'Indoor play barn',
      'Zen zone wind-down',
      'Grooming session',
      'TV in-room entertainment',
    ],
  },
  {
    name: 'Day',
    color: 'from-lime-600 to-lime-400',
    badge: <Star className="h-5 w-5" aria-hidden="true" />,
    features: [
      'Two walks per day',
      'External play area',
      'Agility track',
      'Sand digging pit',
      'Chauffeur pick-up available',
    ],
  },
];

export default function PackageComparison() {
  return (
    <section id="packages" className="relative py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-emerald-950">Packages</h2>
          <p className="mt-2 text-emerald-900/70">
            Choose the level of luxury that suits your dog’s personality and needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm ${
                tier.highlight ? 'ring-2 ring-emerald-300' : ''
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tier.color}`} aria-hidden="true" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-emerald-900">
                  {tier.badge}
                  <h3 className="text-xl font-semibold">{tier.name} Package</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-emerald-900/80">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-600" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex rounded-full bg-emerald-600 px-5 py-2 text-white shadow hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities strip */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'Grooming parlour & spa',
            '24/7 on-call veterinary',
            'Secure outdoor paddocks',
            'Chauffeur collect & return',
          ].map((a) => (
            <div key={a} className="rounded-xl border border-emerald-900/10 bg-white/70 px-4 py-3 text-center text-emerald-900/80 shadow-sm">
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
