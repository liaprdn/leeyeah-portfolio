import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  projectNumber: string; // e.g., "No 01"
  logoPath: string;      // e.g., "/images/logos/blackstroke-logo.png"
  description: string;   // e.g., "Redact your document in one go."
  onClick?: () => void; 
}

// We assume this component will be placed in components/ProjectCard.tsx
const ProjectCard: React.FC<ProjectCardProps> = ({ 
    projectNumber, 
    logoPath, 
    description,
    onClick  // Added link prop for completeness
}) => {
  return (
    // Card Container: White background, shadow, hover effects for a premium feel
   <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-start space-y-3 transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
        
        {/* Project Number dan Logo Area TETAP SAMA */}
        <h3 className="text-gray-black text-3xl font-bold tracking-tight pb-1">
            {projectNumber}
        </h3>
        
        <div className="relative w-full h-32 flex-grow flex items-center justify-start">
            <Image 
                src={logoPath} 
                alt={`Logo for project ${projectNumber}`} 
                fill // Ensures the image fills the parent div
                className="object-contain" 
                sizes="(max-width: 768px) 100vw, 15vw" 
            />
        </div>

        {/* FIX 2: Footer Area dibungkus Flexbox biar sejajar! */}
        {/* Border dipindah ke sini, Tombol & Deskripsi diletakkan di dalam container Flex */}
        <div className="flex justify-between items-end w-full pt-4 border-t border-gray-800">
            
            {/* Description Text: Dibatasi lebar maksimum biar nggak nabrak tombol */}
            <p className="text-gray-black text-sm font-semibold tracking-tight max-w-[60%]">
                {description}
            </p>

            {/* View More Button: Pakai whitespace-nowrap biar tombolnya nggak pecah */}
            <button 
                onClick={onClick} 
                className="bg-mustard text-gray-black px-4 py-2 rounded text-sm font-bold hover:bg-yellow-400 transition whitespace-nowrap tracking-tight"
            >
                View More
            </button>
        </div>
    </div>
  );
};

export default ProjectCard;