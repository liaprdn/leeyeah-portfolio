import React from 'react';
import Image from 'next/image';

export default function ResumeContact() {
  return (
    <section id="resume-contact" className="w-full py-20 px-6 md:px-12 bg-gray-black">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Title */}
        <div className="relative inline-block pb-4">
            <h2 className="text-mustard text-4xl md:text-4xl font-bold tracking-tight">
                Resume + Contacts
            </h2>
            <div className="h-0.5 w-full bg-mustard mt-1"></div>
        </div>

        {/* THE BIG WHITE CARD */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8 md:p-12">
            
            {/* === HEADLINE === */}
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center tracking-tight">
                What my <span className="underline decoration-mustard decoration-4 underline-offset-4">
                    journey
                </span> looks like so far
            </h3>

            {/* === SPLIT CONTENT (50:50) === */}
            {/* items-stretch: Biar tingginya sama, jadi kita bisa bikin border tanpa div terpisah kalau mau, 
                tapi pakai div divider juga gapapa biar kontrol opacity-nya enak. */}
            <div className="flex flex-col md:flex-row items-center justify-center">
                
                {/* 1. LEFT COLUMN (Persis 50%) */}
                {/* pr-0 md:pr-12: Kasih jarak di kanan biar ga nabrak garis tengah */}
                <div className="w-full md:w-1/2 md:pr-12 flex flex-col justify-center"> 
                    <ul className="space-y-4 list-disc list-outside ml-5 text-gray-600 leading-relaxed text-sm md:text-base font-regular tracking-tight">
                        <li><strong>Mentored 46+ participants</strong> during Google Cloud Arcade Indonesia 2025</li>
                        <li><strong>Completed 900+ hours</strong> of cloud engineering training through Bangkit Program</li>
                        <li>Built serverless APIs & automated Cloud Run / Cloud Function pipelines</li>
                        <li>Shipped real, functional solutions for production-level projects</li>
                    </ul>
                </div>

                {/* 2. VERTICAL DIVIDER (Center) */}
                {/* Gak perlu margin aneh-aneh, dia kejepit di antara 2 div 50% */}
                <div className="hidden md:block w-[1px] h-32 bg-gray-800 shrink-0"></div>

                {/* 3. RIGHT COLUMN (Persis 50%) */}
                {/* pl-0 md:pl-12: Kasih jarak di kiri biar ga nabrak garis tengah */}
                <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center items-center mt-8 md:mt-0">
                    <p className="text-gray-black font-semibold text-xl mb-4 tracking-tight">
                        Want the <span className='italic'>details?</span>
                    </p>
                    <a 
                        href="/resume-liaprdn.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-mustard text-gray-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition shadow-md hover:shadow-lg transform hover:-translate-y-1 tracking-tight"
                    >
                        Download Resume
                    </a>
                </div>

            </div>

            {/* === DIVIDER HORIZONTAL === */}
            <div className="w-full h-[1px] bg-gray-800 mx-auto max-w-[95%] my-10"></div>

            {/* === SOCIAL ICONS === */}
            <div className="flex flex-col items-center justify-center space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
                    Get in touch!
                </h3>
                <div className="flex gap-8 items-center justify-center">
                    <a href="https://linkedin.com/in/liaprdn" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 transition-opacity duration-300 opacity-50 hover:opacity-100">
                        <Image src="/images/icons/linkedin.png" alt="LinkedIn" fill className="object-contain" />
                    </a>
                    <a href="mailto:liaprdn.work@gmail.com" className="relative w-12 h-12 transition-opacity duration-300 opacity-50 hover:opacity-100">
                         <Image src="/images/icons/gmail.png" alt="Gmail" fill className="object-contain" />
                    </a>
                    <a href="https://github.com/liaprdn" target="_blank" rel="noopener noreferrer" className="relative w-12 h-12 transition-opacity duration-300 opacity-50 hover:opacity-100">
                         <Image src="/images/icons/github.png" alt="GitHub" fill className="object-contain" />
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}