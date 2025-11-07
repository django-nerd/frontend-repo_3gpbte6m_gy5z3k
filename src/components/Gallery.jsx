import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Happy dog enjoying outdoor play area',
  },
  {
    src: 'https://images.unsplash.com/photo-1640450785505-b2d656408818?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXBweSUyMGRvZyUyMGVuam95aW5nJTIwb3V0ZG9vcnxlbnwwfDB8fHwxNzYyNTI4NzU5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Grooming spa session with gentle care',
  },
  {
    src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
    alt: 'Dog relaxing in a cozy luxury suite',
  },
  {
    src: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Agility track fun and enrichment',
  },
  {
    src: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Secure outdoor paddock time',
  },
  {
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop',
    alt: 'Indoor play barn social time',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-emerald-950">Our Space</h2>
          <p className="mt-2 text-emerald-900/70">A peek into the comfort, safety, and joy at Loving Homes.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-emerald-900/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-sm text-white/90">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
