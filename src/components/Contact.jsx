import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact({ open, setOpen }) {
  const formRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    if (!name || !email) {
      alert('Please provide your name and email.');
      return;
    }
    alert('Thanks! Your enquiry has been captured. We will respond shortly.');
    e.currentTarget.reset();
    setOpen(false);
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow"
          >
            <h3 className="font-serif text-2xl text-emerald-950">Online Enquiry</h3>
            <p className="mt-1 text-sm text-emerald-900/70">Custom packages available for longer stays and special requirements.</p>
            <form onSubmit={handleSubmit} ref={formRef} className="mt-6 space-y-4" aria-label="Enquiry form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-900">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-emerald-900/20 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-900">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-emerald-900/20 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-emerald-900">Phone</label>
                  <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-md border border-emerald-900/20 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
              </div>
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-emerald-900">Package</label>
                <select id="package" name="package" className="mt-1 w-full rounded-md border border-emerald-900/20 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                  <option>Premium</option>
                  <option>Classic</option>
                  <option>Day</option>
                  <option>Custom</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-900">Details / Requirements</label>
                <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-md border border-emerald-900/20 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-900/70">
                  <input id="consent" type="checkbox" className="h-4 w-4 rounded border-emerald-900/30 text-emerald-600 focus:ring-emerald-500" />
                  <label htmlFor="consent">I agree to the privacy policy.</label>
                </div>
                <button type="submit" className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Send Enquiry</button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden border border-emerald-900/10 bg-white shadow">
              <iframe
                title="Map of Loving Homes Dog Hotel in Hong Kong"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.1041469034756!2d114.1694!3d22.3193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400edf8b9c0ab%3A0x6c9b7d2da1fb2f5!2sHong%20Kong!5e0!3m2!1sen!2shk!4v1700000000000"
              />
            </div>
            <ul className="grid gap-3 sm:grid-cols-3" aria-label="Contact methods">
              <li className="flex items-center gap-2 rounded-lg border border-emerald-900/10 bg-white p-3 text-emerald-900/80">
                <Phone className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                <a href="tel:+85212345678" className="hover:underline">+852 1234 5678</a>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-emerald-900/10 bg-white p-3 text-emerald-900/80">
                <Mail className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                <a href="mailto:hello@lovinghomes.hk" className="hover:underline">hello@lovinghomes.hk</a>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-emerald-900/10 bg-white p-3 text-emerald-900/80">
                <MessageSquare className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                <a href="https://wa.me/85212345678" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
