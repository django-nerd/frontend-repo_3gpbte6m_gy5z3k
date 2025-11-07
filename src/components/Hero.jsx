import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Dog, Phone, Menu, X } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
  >
    {children}
  </a>
);

export default function Hero({ onOpenContact }) {
  const [open, setOpen] = React.useState(false);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden isolate">
      {/* Accessible skip link target */}
      <div id="main-content" className="sr-only" aria-hidden="true">Main Content</div>

      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          aria-label="Luxury living room ambiance conveying premium comfort"
        />
      </div>

      {/* Gradient overlay to ensure text contrast (does not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Navigation */}
      <nav aria-label="Primary" className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 text-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
              <Dog className="h-7 w-7" aria-hidden="true" />
              <span className="sr-only">Loving Homes</span>
              <span aria-hidden className="font-serif text-xl tracking-wide">Loving Homes</span>
            </a>
            <div className="hidden md:flex items-center gap-2 text-emerald-50">
              <NavLink href="#packages">Packages</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button
                onClick={onOpenContact}
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg backdrop-blur hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Enquire or book now"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Book Now
              </button>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-50 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
            <div className="space-y-1 px-4 pb-4">
              <a href="#packages" onClick={() => setOpen(false)} className="block px-3 py-2 text-emerald-50">Packages</a>
              <a href="#gallery" onClick={() => setOpen(false)} className="block px-3 py-2 text-emerald-50">Gallery</a>
              <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 text-emerald-50">Contact</a>
              <button
                onClick={() => { setOpen(false); onOpenContact?.(); }}
                className="mt-2 w-full rounded-md bg-emerald-400/90 px-4 py-2 font-medium text-emerald-950"
              >Book Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-24 md:pt-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
            Hong Kong’s Premier Dog Hotel
          </h1>
          <p className="mt-4 text-emerald-50/90 text-lg">
            Luxury boarding, spa, chauffeur service, and 24/7 veterinary support. A serene retreat designed for comfort, joy, and complete peace of mind.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#packages"
              className="rounded-full bg-white/90 px-6 py-3 text-emerald-950 font-semibold shadow-lg hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Explore Packages
            </a>
            <button
              onClick={onOpenContact}
              className="rounded-full border border-white/40 px-6 py-3 text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Enquire Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
