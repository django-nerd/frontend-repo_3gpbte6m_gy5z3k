import React from 'react';
import Hero from './components/Hero';
import PackageComparison from './components/PackageComparison';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AccessibilityBar from './components/AccessibilityBar';

function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-3 text-sm text-emerald-900/80">
          <div>
            <h4 className="font-semibold text-emerald-950">Loving Homes</h4>
            <p className="mt-2">Premium dog hotel and spa in Hong Kong, offering luxury suites, grooming, and 24/7 veterinary care.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="space-y-2">
              <li><a href="#packages" className="hover:underline">Packages</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </nav>
          <div>
            <p>Follow us</p>
            <div className="mt-2 flex gap-3">
              <a aria-label="Instagram" href="#" className="rounded-md bg-emerald-100 px-2 py-1">IG</a>
              <a aria-label="Facebook" href="#" className="rounded-md bg-emerald-100 px-2 py-1">FB</a>
              <a aria-label="TikTok" href="#" className="rounded-md bg-emerald-100 px-2 py-1">TT</a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-emerald-900/60">© {new Date().getFullYear()} Loving Homes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [openContact, setOpenContact] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-emerald-950">
      {/* High-contrast helper styles */}
      <style>{`
        .hc * { color: #000 !important; background: #fff !important; border-color: #000 !important; }
        .font-serif { font-family: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
      `}</style>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded bg-white px-3 py-2 shadow">Skip to content</a>

      <Hero onOpenContact={() => setOpenContact(true)} />
      <main id="main-content">
        <PackageComparison />
        <Gallery />
        <Contact open={openContact} setOpen={setOpenContact} />
      </main>
      <Footer />

      <AccessibilityBar />
    </div>
  );
}
