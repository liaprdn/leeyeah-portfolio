import React, { useState } from 'react';
import Image from 'next/image';

// --- INTERFACES BARU ---
interface TechItem {
  name: string; 
  icon: string; 
}

interface BuildDetail {
  title: string;       
  description: string; 
  image: string;       
}

// Interface baru buat Demo Item
interface DemoItem {
  title: string; // e.g. "Guest (all users)"
  video: string; // path video e.g. "/videos/demo-guest.mp4"
}

// Interface buat struktur Sandwich The Idea
interface IdeaContent {
  text1: string;  // Text Atas
  image: string;  // Gambar Tengah (bisa clickable)
  text2: string;  // Text Bawah
}

interface ProjectData {
  number: string;
  title: string;
  logoPath: string;
  description: string;
  duration: string;
  role: string;
  heroImage: string;
  techStack: {
    cloud: TechItem[];    
    frontend: TechItem[];
    backend: TechItem[];
    uiux: TechItem[];
  };
  // 👇 INI PERUBAHAN UTAMA: Ganti 'problem' jadi 'idea' & Tambah 'demos'
  idea: IdeaContent;     
  demos: DemoItem[];
  buildDetails: BuildDetail[]; 
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectData;
}

const SectionLabel = ({ text }: { text: string }) => (
  <span className="bg-mustard text-gray-black px-2 py-1 text-sm font-semibold mb-2 inline-block tracking-tight">
    {text}
  </span>
);

const TechIcon = ({ item }: { item: TechItem }) => (
  <div className="flex flex-col items-center gap-2 group min-w-[50px]">
    <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300">
      <Image src={item.icon} alt={item.name} fill className="object-contain" />
    </div>
    <span className="text-[12px] font-regular text-gray-500 group-hover:text-gray-800 text-center leading-relaxed tracking-tight">
      {item.name}
    </span>
  </div>
);

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, data }) => {
  const [fullscreenMedia, setFullscreenMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null);

  if (!isOpen) return null;

  const handleOpenMedia = (type: 'image' | 'video', src: string) => {
    setFullscreenMedia({ type, src });
  };

  const handleCloseMedia = () => {
    setFullscreenMedia(null);
  };

  const hasSubStacks = data.techStack.frontend.length > 0 || data.techStack.backend.length > 0 || data.techStack.uiux.length > 0;


  return (
    <>
      {/* === 1. MODAL UTAMA === */}
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70 p-4 md:p-6 backdrop-blur-sm">
        
        <div className="bg-white w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative flex flex-col">
          
          {/* Tombol Close Modal Utama */}
          <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 text-gray-400 hover:text-gray-800 transition p-2 bg-white rounded-full shadow-sm"
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>

          {/* HEADER SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 pb-8">
              
              {/* KIRI: Info Project */}
              <div className="flex flex-col items-start space-y-6">
                  <span className="bg-gray-black text-mustard text-4xl font-bold px-3 py-1">
                      {data.number}
                  </span>
                  <div className="relative w-full max-w-[250px] h-20 md:h-24">
                      <Image src={data.logoPath} alt={data.title} fill className="object-contain object-left" />
                  </div>
                  <p className="text-gray-black  md:text-lg leading-relaxed font-semibold text-justify tracking-tight max-w-lg">
                      {data.description}
                  </p>
                  <p 
                    className="text-gray-black md:text-lg leading-relaxed font-semibold tracking-tight max-w-lg"
                    dangerouslySetInnerHTML={{ __html: data.duration }} 
                    />
                  <div className="text-base tracking-tight">
                      <span className="font-semibold text-gray-800">Role: </span>
                      <span className="text-gray-600">{data.role}</span>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="w-full space-y-4">
                    {/* cloud */}
                     {data.techStack.cloud.length > 0 && (
                      <div className="flex-1 min-w-[140px] bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition">
                          <SectionLabel text="Cloud Infrastructure (Google Cloud)"/>
                          <div className="flex flex-wrap gap-x-8 gap-y-6 pt-2">
                              {data.techStack.cloud.map((item, idx) => (
                                  <TechIcon key={idx} item={item} />
                              ))}
                          </div>
                      </div>
                       )}
                      {hasSubStacks && (
                      <div className="flex flex-wrap gap-4 items-stretch">
                        {/* frontend */}
                        {data.techStack.frontend.length > 0 && (
                          <div className="flex-1 min-w-[140px] bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition">
                              <SectionLabel text="Frontend" />
                             <div className="flex flex-wrap gap-6 pt-2">
                                  {data.techStack.frontend.map((item, idx) => (
                                      <TechIcon key={idx} item={item} />
                                  ))}
                              </div>
                          </div>
                          )}
                          {/* backend */}
                           {data.techStack.backend.length > 0 && (
                           <div className="flex-1 min-w-[140px] bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition">
                              <SectionLabel text="Backend" />
                              <div className="flex flex-wrap gap-6 pt-2">
                                  {data.techStack.backend.map((item, idx) => (
                                      <TechIcon key={idx} item={item} />
                                  ))}
                              </div>
                          </div>
                          )}
                          {/* ui/ux */}
                           {data.techStack.uiux.length > 0 && (
                           <div className="flex-1 min-w-[140px] bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition">
                              <SectionLabel text="UI/UX" />
                             <div className="flex flex-wrap gap-6 pt-2">
                                  {data.techStack.uiux.map((item, idx) => (
                                      <TechIcon key={idx} item={item} />
                                  ))}
                              </div>
                          </div>
                          )}
                      </div>
                      )}
                  </div>
              </div>

              {/* KANAN: Hero Image */}
              <div 
                className="relative w-full rounded-2xl overflow-hidden cursor-zoom-in group self-center shadow-sm"
                onClick={() => handleOpenMedia('image', data.heroImage)}
              >
                  <Image 
                    src={data.heroImage} 
                    alt="Project Screenshot"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="transition duration-500 group-hover:scale-105" 
                  />
                  
              </div>

          </div>
                    
          <hr className="border-t border-gray-800 my-8 mx-8 md:mx-12" /> {/* Ubah border-gray-800 jadi 300 biar lebih soft */}

          {/* === CONTENT DETAILS (DINAMIS!) === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 pt-8">
              
              {/* KOLOM KIRI: The Idea & Demo */}
              <div className="flex flex-col space-y-12">
                  
                  {/* The Idea (SANDWICH STRUCTURE) */}
                  <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-800 underline decoration-mustard decoration-4 underline-offset-4 tracking-tight">The Idea</h3>
                      
                      {/* 1. Text Atas */}
                      <div 
                        className="text-gray-600 text-base text-justify leading-relaxed tracking-tight"
                        dangerouslySetInnerHTML={{ __html: data.idea.text1 }} 
                      />
                      
                      {/* 2. Image Tengah (Clickable) */}
                        <div 
                            className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden border border-gray-100 hover:opacity-90 transition shadow-sm">
                            <Image 
                                src={data.idea.image} 
                                alt="Idea Illustration" 
                                width={0} height={0} sizes="100vw" 
                                style={{ width: '100%', height: 'auto' }} 
                            />
                        </div>

                      {/* 3. Text Bawah */}
                      <div 
                        className="text-gray-600 text-base text-justify leading-relaxed tracking-tight"
                        dangerouslySetInnerHTML={{ __html: data.idea.text2 }} 
                      />
                  </div>

                  {/* Demo Section (Looping Dinamis) */}
                  <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-800 underline decoration-mustard decoration-4 underline-offset-4 tracking-tight">Demo</h3>
                      <div className="space-y-6">
                          {data.demos.map((demo, idx) => (
                              <div key={idx}>
                                  <span className="text-base font-semibold text-gray-700 block mb-2 tracking-tight">{demo.title}</span>
                                  <div 
                                    className="w-full h-48 bg-gray-900 rounded-lg flex flex-col items-center justify-center text-white cursor-pointer hover:bg-gray-800 transition relative group shadow-md"
                                    onClick={() => handleOpenMedia('video', demo.video)} 
                                  >
                                      <div className="w-12 h-12 rounded-full bg-mustard flex items-center justify-center text-gray-black shadow-lg transform group-hover:scale-110 transition">▶</div>
                                      <span className="mt-2 text-xs text-gray-300 font-medium">Click to Play Demo</span>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* KOLOM KANAN: Behind the Build (Looping Dinamis) */}
              <div className="flex flex-col space-y-12 md:border-l md:border-gray-800 md:pl-12">
                  
                  <h3 className="text-2xl font-semibold text-gray-800 underline decoration-mustard decoration-4 underline-offset-4 tracking-tight">Behind the Build</h3>
                  
                  {/* LOOPING AJAIBNYA! */}
                  {data.buildDetails.map((item, idx) => (
                    <div key={idx} className="space-y-4">
                       <h4 className="text-lg font-semibold text-gray-700 block mb-2 tracking-tight">{item.title}</h4>
                       <p className="text-gray-600 text-base text-justify leading-relaxed tracking-tight">{item.description}</p>
                       {/* Image of behind the build */}
                       {item.image && (
                         <div 
                              className="w-full relative rounded-xl border border-gray-200 bg-gray-50 p-3 overflow-hidden cursor-zoom-in hover:shadow-md transition group"
                              onClick={() => handleOpenMedia('image', item.image)} 
                          >
                            <Image 
                              src={item.image} 
                              alt={item.title} 
                              className="rounded-lg" 
                              width={0} height={0} sizes="100vw" 
                              style={{ width: '100%', height: 'auto' }} 
                            />
                         </div>
                       )}
                    </div>
                  ))}
              </div>
          </div>
        </div>
      </div>

      {/* === 2. LIGHTBOX / FULLSCREEN VIEWER (Overlay) === */}
      {fullscreenMedia && (
        <div 
            className="fixed inset-0 z-[60] bg-black bg-opacity-95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={handleCloseMedia} 
        >
            <button 
                onClick={handleCloseMedia}
                className="absolute top-6 right-6 text-white bg-gray-800 bg-opacity-50 rounded-full p-3 hover:bg-opacity-100 transition z-50"
            >
                ✕
            </button>

            <div 
                className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} 
            >
                {fullscreenMedia.type === 'image' ? (
                    <div className="relative w-full h-full">
                        <Image src={fullscreenMedia.src} alt="Fullscreen View" fill className="object-contain" />
                    </div>
                ) : (
                    <video 
                        src={fullscreenMedia.src} 
                        controls 
                        autoPlay 
                        className="w-full h-full max-h-[85vh] rounded-lg shadow-2xl focus:outline-none"
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;