// components/SkillsTools.tsx
import React from 'react';
import SkillCard from './SkillCard';
import Image from 'next/image';

// --- HELPER COMPONENTS (Biar kodingan rapih!) ---

// 1. Label Kuning Kecil (e.g. "Frameworks", "Database")
const CategoryLabel = ({ text }: { text: string }) => (
  <span className="bg-mustard text-gray-black px-1 py-1 text-lg-3 font-bold tracking-tight mb-3 inline-block">
    {text}
  </span>
);

// 2. Icon Tool + Nama (e.g. Logo React + "React.js")
const ToolIcon = ({ src, label, className = "" }: { src: string; label: string; className?: string }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
      <Image src={src} alt={label} fill className={`object-contain ${className}`} />
    </div>
    <span className="text-[10px] md:text-xs font-medium text-gray-600 text-center tracking-tight">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---

export default function SkillsTools() {
  return (
    <section id="skills" className="w-full py-20 px-6 md:px-12 bg-gray-black">
        {/* Section Title */}

      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div className="relative inline-block pb-5 mb-2">
            <h2 className="text-mustard text-4xl md:text-4xl font-bold tracking-tight">
                Skills & Tools
            </h2>
            <div className="h-0.5 w-full bg-mustard mt-1"></div>
        </div>
        {/* Stack of Cards */}
        <div className="flex flex-col gap-8">

          {/* === CARD 1: CLOUD COMPUTING (UPDATED) === */}
          <SkillCard
            title="Cloud Computing"
            headerIconPath="/images/icons/gcp-icon.png" 
            description={`
                <p class="font-semibold text-gray-800 mb-4 text-base tracking-tight">
                    Google Cloud is my place to learn, build, and thrive in the cloud ecosystem since 2024.
                </p>
                <p class="text-gray-600  leading-relaxed mt-2">
                    I build <strong>serverless, event-driven systems</strong>, focusing on efficient deployments,
                    automated workflows, and
                    scalable backend architectures. Most of my projects rely on containerized APls, real-time data processing, and seamless integration between frontend applications and cloud services.
                </p>
            `}
          >
            <div className="flex flex-col h-full justify-between">

              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 flex flex-col items-center max-w-lg mx-auto hover:shadow-lg transition">
                
                {/* 1. TOP: Tools Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 pb-6">
                    <ToolIcon src="/images/icons/cloud-run.png" label="Cloud Run" />
                    <ToolIcon src="/images/icons/cloud-function.png" label="Cloud Function"/>
                    <ToolIcon src="/images/icons/cloud-storage.png" label="Cloud Storage" />
                    <ToolIcon src="/images/icons/artifact-registry.png" label="Artifact Registry" />
                    <ToolIcon src="/images/icons/iam.png" label="IAM" />
                    <ToolIcon src="/images/icons/compute-engine.png" label="Compute Engine" />
                </div>

                {/* 2. SEPARATOR LINE (Sesuai Desain!) */}
                <div className="w-full h-[1px] bg-gray-800 mb-6"></div>

                {/* 3. BOTTOM: Certifications */}
                <div>
                    <CategoryLabel text="Certifications" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        
                        {/* Cert 1 */}
                        <div className="flex items-center gap-3">
                             <div className="relative w-[100px] h-[100px] shrink-0">
                                <Image src="/images/badges/ace-badge.png" alt="ACE Badge" fill className="object-contain" />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900 tracking-tight ">Associate Cloud Engineer</span>
                                <span className="text-xs text-gray-500">Google Cloud
                                  <br />
                                2024 - 2027</span>
                             </div>
                        </div>

                        {/* Cert 2 */}
                         <div className="flex items-center gap-3">
                             <div className="relative w-[100px] h-[100px]  shrink-0">
                                <Image src="/images/badges/facilitator-badge.png" alt="Facilitator Badge" fill className="object-contain" />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900 tracking-tight ">Google Cloud Arcade Indonesia 
                                  <br />
                                  Facilitator 2025
                                </span>
                                <span className="text-xs text-gray-500">Google Cloud & Dicoding Indonesia </span>
                             </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </SkillCard>

          {/* === CARD 2: FRONT-END === */}
          <SkillCard
            title="Front-end"
            headerIconPath="/images/icons/frontend.png"
            // Paragraf 1: Bold statement header
            // Paragraf 2: Detail dengan bold keywords
            description={`
                <p class="font-semibold text-gray-800 mb-4 text-base tracking-tight">
                    Working with framework is my one way to go and I love turning ideas into clean, intuitive interfaces.
                </p>
                <p class="text-gray-600 leading-relaxed">
                    I build <strong>responsive, framework-driven</strong> UIs using React, Next.js, and Tailwind. My focus is clean structure, smooth interactions, and performance. I also create <strong>installable Progressive Web Apps</strong> with offline support and optimized loading experiences.
                </p>
            `}
          >
             {/* BAGIAN KANAN: Align Start (Kiri) biar rapih */}
             <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 flex flex-col items-start w-full max-w-lg mx-auto hover:shadow-lg transition">
                
                <CategoryLabel text="Frameworks" />
                
                {/* Icons Grid: 
                    - Ganti gap-8 md:gap-12 JADI gap-6 md:gap-8 (Lebih rapet) 
                    - mt-4 jadi mt-3 (Jarak dari label ke icon lebih deket)
                */}
                <div className="flex flex-wrap gap-6 md:gap-8 items-center mt-3 w-full justify-center">
                    <ToolIcon src="/images/icons/reactjs.png" label="React.js" className="rounded-xl" />
                    <ToolIcon src="/images/icons/tailwind.png" label="Tailwind CSS" />
                    <ToolIcon src="/images/icons/nextjs.png" label="Next.js" />
                    <ToolIcon src="/images/icons/vite.png" label="Vite" />
                </div>

             </div>
          </SkillCard>

          {/* === CARD 3: BACK-END === */}
          <SkillCard
            title="Back-end"
            headerIconPath="/images/icons/backend.png" // Pastikan path icon ini benar
            description={`
                <p class="font-semibold text-gray-800 mb-6 text-base">
                    I build lightweight, scalable backends that just work.
                </p>
                <p class="text-gray-600 leading-relaxed">
                    My backend work revolves around clean <strong>APIs, containerized services</strong>, and efficient <strong>data workflows</strong>. I use Flask for rapid API development and manage data with SQL, Firestore, BigQuery, and Cloud SQL. Supported by Docker for consistent deployment environments.
                </p>
            `}
          >
             {/* WRAPPER KANAN: Kita pakai Flex biar kotak-kotaknya berjejer rapih */}
             <div className="flex flex-wrap gap-4 justify-center items-start w-full">
                
                {/* 📦 GROUP 1: FRAMEWORK (Mini Shadow Box) */}
                <div className="bg-white rounded-xl shadow-md p-3 border border-gray-100 flex flex-col items-center min-w-[100px] hover:shadow-lg transition">
                    <CategoryLabel text="Framework" />
                    <div className="mt-2">
                        <ToolIcon src="/images/icons/flask.png" label="Flask" />
                    </div>
                </div>

                {/* 📦 GROUP 2: DATABASE (Mini Shadow Box - Lebih Lebar) */}
                <div className="bg-white rounded-xl shadow-md p-3 border border-gray-100 flex flex-col items-center hover:shadow-lg transition">
                    <CategoryLabel text="Database" />
                    {/* Grid 2x2 biar rapih kayak di desain */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-2">
                        <ToolIcon src="/images/icons/sql.png" label="SQL" />
                        <ToolIcon src="/images/icons/firestore.png" label="Firestore" />
                        <ToolIcon src="/images/icons/bq.png" label="BigQuery" />
                        <ToolIcon src="/images/icons/cloud-sql.png" label="Cloud SQL" />
                    </div>
                </div>

                 {/* 📦 GROUP 3: INFRA (Mini Shadow Box) */}
                 <div className="bg-white rounded-xl shadow-md p-3 border border-gray-100 flex flex-col items-center min-w-[100px] hover:shadow-lg transition">
                    <CategoryLabel text="Infra" />
                    <div className="mt-2">
                        <ToolIcon src="/images/icons/docker.png" label="Docker" />
                    </div>
                </div>

             </div>
          </SkillCard>

        </div>
      </div>
    </section>
  );
}