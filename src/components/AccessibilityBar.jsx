import React from 'react';
import { Moon, Sun, Plus, Minus, Volume2 } from 'lucide-react';

export default function AccessibilityBar() {
  const [fontScale, setFontScale] = React.useState(100);
  const [highContrast, setHighContrast] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

  React.useEffect(() => {
    document.documentElement.classList.toggle('hc', highContrast);
  }, [highContrast]);

  const increase = () => setFontScale((s) => Math.min(140, s + 10));
  const decrease = () => setFontScale((s) => Math.max(80, s - 10));

  const speak = () => {
    const selection = window.getSelection()?.toString();
    const text = selection || document.title;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.05;
    window.speechSynthesis.speak(utter);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <button aria-label="Decrease font size" onClick={decrease} className="rounded-full p-2 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><Minus className="h-4 w-4" /></button>
      <button aria-label="Increase font size" onClick={increase} className="rounded-full p-2 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><Plus className="h-4 w-4" /></button>
      <button aria-label="Toggle high contrast" onClick={() => setHighContrast(v => !v)} className="rounded-full p-2 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
        {highContrast ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
      <button aria-label="Read selection" onClick={speak} className="rounded-full p-2 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><Volume2 className="h-4 w-4" /></button>
    </div>
  );
}
