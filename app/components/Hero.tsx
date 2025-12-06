import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-gray-black py-20 px-6 md:px-12 flex items-center justify-center min-h-[600px]">
      
      {/* Container Utama: Flexbox biar sejajar Kiri-Kanan */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        
        {/* BAGIAN KIRI: FOTO */}
        <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] flex-shrink-0">
          <Image 
            src="/images/leeyeah-hero.jpg" 
            alt="Aulia Pradina" 
            fill // Pake fill biar menuhin lingkaran
            className="rounded-full object-cover grayscale" // Grayscale biar item putih kayak desain
            priority // Biar diload duluan
          />
        </div>

        {/* BAGIAN KANAN: TEXT */}
        <div className="flex flex-col text-left space-y-4 max-w-2xl">
          
          {/* Judul + Garis Bawah */}
          <div className="relative inline-block">
            <h1 className="text-mustard text-3xl md:text-6xl font-bold tracking-super-tight mb-2">
              Hello, I'm Aulia Pradina
            </h1>
            {/* Garis Kuning di bawah nama */}
            <div className="h-1 w-full bg-mustard mt-2"></div>
          </div>

          <h2 className="text-white-ish text-2xl md:text-3xl tracking-tight font-semibold mt-2">
            Cloud Engineer & Full-Stack Developer
          </h2>

          <p className="text-white-ish text-lg tracking-tight max-w-xl mt-4">
            Currently exploring how cloud-native apps, clean code, and smart design 
            intersect to build scalable, beautiful solutions.
          </p>

          {/* Buttons Area */}
          <div className="flex flex-wrap gap-4 mt-8">
            {/* Tombol Putih */}
            <a href="#projects" className="bg-white-ish text-gray-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-200 tracking-tight transition">
              View Projects
            </a>
            
            {/* Tombol Kuning */}
            <a href="/resume-liaprdn.pdf" className="bg-mustard text-gray-black px-8 py-3 rounded font-bold text-lg hover:bg-yellow-400 tracking-tight transition">
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}