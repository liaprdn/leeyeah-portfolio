"use client";

import { useState } from 'react'; // 1. Import useState
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white-ish py-6 px-6 md:px-12 flex justify-between items-center relative z-50 shadow-sm">
      
      {/* Logo Area (TETAP SAMA) */}
      <div className="flex-shrink-0">
        <Link href="#hero">
          <Image src="/images/logos/logo.png" alt="Lee Logo" width={80} height={80} className="object-contain hover:scale-105 transition-transform" />
        </Link>
      </div>

      {/* Navigation Links (Desktop) - THIS IS THE MAGIC PART! 🪄 */}
      <nav className="hidden md:flex gap-10 text-gray-black font-bold text-xl tracking-tight">
        {['Home', 'Projects', 'Skills', 'Resume', 'Contact'].map((item) => (
           <Link 
             key={item}
             href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase() === 'resume' || item.toLowerCase() === 'contact' ? 'resume-contact' : item.toLowerCase()}`}
             // 👇 INI CLASS AJAIBNYA:
             className="relative group hover:text-black transition-colors duration-300"
           >
             {item}
             {/* Garis Bawah Animasi:
                - absolute bottom-0 left-0: Nempel di bawah kiri.
                - w-0: Awalnya lebarnya 0 (ilang).
                - h-[3px]: Tebal garis (sesuaiin selera, 2px-4px oke).
                - bg-mustard: Warnanya kuning signature kamu.
                - group-hover:w-full: Pas dihover, lebarnya jadi 100%.
                - transition-all duration-300: Animasinya mulusss.
             */}
             <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-mustard transition-all duration-300 group-hover:w-full"></span>
           </Link>
        ))}
      </nav>

      {/* Mobile Menu Button (TETAP SAMA) */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-black focus:outline-none">
        {isMenuOpen ? (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      {/* Mobile Dropdown (TETAP SAMA) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white-ish shadow-xl border-t border-gray-100 flex flex-col items-center py-8 gap-6 md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
           {['Home', 'Projects', 'Skills', 'Resume', 'Contact'].map((item) => (
             <Link 
               key={item}
               href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase() === 'resume' || item.toLowerCase() === 'contact' ? 'resume-contact' : item.toLowerCase()}`}
               onClick={() => setIsMenuOpen(false)}
               className="text-gray-black font-bold text-xl tracking-tight hover:text-black transition-colors"
             >
               {item}
             </Link>
           ))}
        </div>
      )}

    </header>
  );
}