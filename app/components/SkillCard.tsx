// components/SkillCard.tsx
import React from 'react';
import Image from 'next/image';

interface SkillCardProps {
  title: string;
  description: string;
  headerIconPath: string; // Icon besar di sebelah judul (misal: gambar awan/laptop)
  children: React.ReactNode; // Area Kanan yang Fleksibel (Isi ikon-ikon tools)
}

const SkillCard: React.FC<SkillCardProps> = ({ 
    title, 
    description, 
    headerIconPath, 
    children 
}) => {
  return (
    // 1. PARENT: 'items-stretch' WAJIB ADA. 
    // Ini yang bikin garis tengah (border) tingginya FULL mengikuti sisi yang paling tinggi.
    <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch transition duration-300 hover:shadow-2xl">
        
        {/* BAGIAN KIRI: Header & Description (Width 35%) */}
        <div className="w-full md:w-[40%] flex flex-col shrink-0 space-y-2">
            
            {/* Header: Icon + Title */}
            <div className="pb-4 border-b border-gray-800"> {/* Border bottom di sini kuncinya! */}
                <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className="relative w-12 h-12 shrink-0">
                        <Image 
                            src={headerIconPath} 
                            alt={`${title} icon`} 
                            fill 
                            className="object-contain" 
                        />
                    </div>
                    {/* Title */}
                    <h3 className="text-gray-black text-4xl font-bold tracking-tight">
                        {title}
                    </h3>
                </div>
            </div>

            {/* Description */}
            {/* Kita render sebagai div biar bisa styling paragraf di dalamnya */}
            <div className="text-gray-black text-sm leading-relaxed tracking-tight text-justify space-y-4">
                {/* Kita gunakan dangerouslySetInnerHTML atau parsing manual di parent, 
                    tapi biar aman kita anggap description itu string/element di parent.
                    Untuk sekarang, kita render children text biasa dulu. */}
                 {/* UPDATE: Biar fleksibel, description kita ganti jadi children di implementasi nanti.
                     Tapi ikut props sekarang: */}
                 <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>

        {/* BAGIAN KANAN: Playground (Width 65%) */}
        {/* Border Left tipis hanya di desktop */}
        <div className="w-full md:w-[60%] md:pl-8  flex flex-col justify-center">
            {children}
        </div>

    </div>
  );
};

export default SkillCard;