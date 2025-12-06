"use client";

import {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './modals/ProjectModal' // Import Modal kita!

// --- DATA BLACKSTROKE ---
const blackstrokeData = {
  number: "№ 01",
  title: "Blackstroke",
  logoPath: "/images/logos/blackstroke-logo.png",
  description: "A Progressive Web App that simplifies document redaction by automatically detecting and masking sensitive data. Powered by Google Cloud",
  // Di dalam object blackstrokeData:
  duration: "This project was made for <span class='underline decoration-mustard decoration-2 underline-offset-2'>bachelor thesis</span> in the span of 4 months.",
  role: "Full-Stack Developer",
  heroImage: "/images/projects-preview/blackstroke-landing-page.png",
   techStack: {
    cloud: [
        { name: "DLP API", icon: "/images/icons/dlp-api.jpg" },
        { name: "Cloud Run", icon: "/images/icons/cloud-run.png" },
        { name: "Cloud Storage", icon: "/images/icons/cloud-storage.png" },
        { name: "Cloud Function", icon: "/images/icons/cloud-function.png" },
        { name: "Vision API", icon: "/images/icons/vision-api.png" },
        { name: "BigQuery", icon: "/images/icons/bq.png" },
        { name: "Pub/Sub", icon: "/images/icons/pubsub.png" },
        { name: "Eventarc", icon: "/images/icons/eventarc.png" },
        { name: "Firestore", icon: "/images/icons/firestore.png" }
    ],
    frontend: [
        { name: "React.js", icon: "/images/icons/reactjs.png" },
        { name: "Vite", icon: "/images/icons/vite.png" },
        { name: "Tailwind CSS", icon: "/images/icons/tailwind.png" },
        { name: "Firebase", icon: "/images/icons/firebase.png" }
    ],
    backend: [
        { name: "Flask API", icon: "/images/icons/flask.png" },
        { name: "Google Cloud APIs", icon: "/images/icons/gcp-icon.png" },
        { name: "Docker", icon: "/images/icons/docker.png" }
    ],
    uiux: [
        { name: "Figma", icon: "/images/icons/figma.png" }
    ]
  },
  idea: {
    text1: "While exploring Google Cloud Arcade, I came across this lab. It caught my attention because of the practical potential of automated data redaction. The potential is there.",
    
    // ⚠️ MASUKKAN PATH GAMBAR "REDATING SENSITIVE DATA" DISINI
    image: "/images/projects-behind-the-build/1a-blackstroke-idea.png", 
    
    text2: "I realized that these API services are powerful, yet not many people know about them. So I decided to build a progressive web app that makes these capabilities more accessible. The concept is simple: upload a document containing sensitive data and you'll receive a redacted version of it. Oh, and it supports offline mode too!"
  },

  // 👇 FORMAT BARU: DEMOS (Array)
  demos: [
    {
        title: "End-to-End Redaction Flow",
        video: "https://res.cloudinary.com/dfx4r8izl/video/upload/v1765021036/blackstroke-all-demo/end-to-end-all_gulmzh.mov" // ⚠️ Ganti path video asli
    },
    {
        title: "PWA Offline Capabilities",
        video: "https://res.cloudinary.com/dfx4r8izl/video/upload/v1765021037/blackstroke-all-demo/offline-mode_e6y71l.mov" // ⚠️ Ganti path video asli
    },
    {
        title: "Admin Analytics Dashboard",
        video: "https://res.cloudinary.com/dfx4r8izl/video/upload/v1765021036/blackstroke-all-demo/admin_tjzmc7.mov" // ⚠️ Ganti path video asli
    }
  ],

  // 👇 DATA BARU: BEHIND THE BUILD (ARRAY DINAMIS)
  buildDetails: [
    {
        title: "Pipeline",
        description: "💡 An event-driven pipeline that automates the parallel processing of data redaction and de-identification, as well as handling storage and real-time notifications, all through Google Cloud's serverless services.",
        image: "/images/projects-behind-the-build/1b-blackstroke-pipeline-merged.jpg" 
    },
    {
        title: "Layers",
        description: "💡 A layered overview that connects front-end, back-end and core infrastructure components.",
        image: "/images/projects-behind-the-build/1c-blackstroke-layers-bg.png" 
    }
  ]
};

// --- DATA UNMATCH ---
const unmatchData = {
  number: "№ 02",
  title: "Un-match",
  logoPath: "/images/logos/unmatch-logo.png",
  description: "A web-based music platform recommender that helps user choose the right service based on their preferences through some questions. (ID)",
  // Di dalam object blackstrokeData:
  duration: "This was made for a <span class='underline decoration-mustard decoration-2 underline-offset-2'>scientific project</span> in the span of 3 months.",
  role: "Full-Stack Developer",
  heroImage: "/images/projects-preview/unmatch-project-preview-merged.jpg",
   techStack: {
    cloud: [
        { name: "Cloud Run", icon: "/images/icons/cloud-run.png" },
        { name: "Firestore", icon: "/images/icons/firestore.png" }
    ],
    frontend: [
        { name: "React.js", icon: "/images/icons/reactjs.png" }
    ],
    backend: [
        { name: "Flask API", icon: "/images/icons/flask.png" },
        { name: "Google Cloud APIs", icon: "/images/icons/gcp-icon.png" },
        { name: "Docker", icon: "/images/icons/docker.png" }
    ],
    uiux: [
        { name: "Adobe XD", icon: "/images/icons/adobe-xd.png" }
    ]
  },
  idea: {
    text1: " Everyone listens to music differently. Some people need offline downloads, others prioritized sound quality, and some just want the cheapest option that works.",
    
    // ⚠️ MASUKKAN PATH GAMBAR "REDATING SENSITIVE DATA" DISINI
    image: "/images/projects-behind-the-build/2a-unmatch-idea.png", 
    
    text2: "un-match makes it simple: answer questions abouut how you listen to music and get a personalized platform recommendation along with the plans. Find your perfect match without the guesswork"
  },

  // 👇 FORMAT BARU: DEMOS (Array)
  demos: [
    {
        title: "User Journey (Spotify Student Plan Result)",
        video: "https://res.cloudinary.com/dfx4r8izl/video/upload/v1765021091/spotify-student_rdjfxh.mov"
    },
    {
        title: "Admin Analytics Dashboard",
        video: "https://res.cloudinary.com/dfx4r8izl/video/upload/v1765021140/admin-dashboard_geji8x.mov" 
    }
  ],

  // 👇 DATA BARU: BEHIND THE BUILD (ARRAY DINAMIS)
  buildDetails: [
    {
        title: "Sequence Diagram",
        description: "💡 A rule-based recommendation system that evaluates user preferences through a short questionnare and generates tailored music platform suggestions in real time.",
        image: "/images/projects-behind-the-build/2b-unmatch-sequence.png" 
    }
  ]
};

// --- DATA UNMATCH ---
const touridData = {
  number: "№ 03",
  title: "TourID",
  logoPath: "/images/logos/tourid-merged-logo.png",
  description: "A simple travel planner that recommends places, shows real-time weather, display reviews and let users save their favorite spots. (ID)",
  // Di dalam object blackstrokeData:
  duration: "This was made for <span class='underline decoration-mustard decoration-2 underline-offset-2'>capstone project</span> in the span of a month.",
  role: "Cloud Engineer",
  heroImage: "/images/projects-preview/tourid-project-preview-merged.jpg",
   techStack: {
    cloud: [
        { name: "Cloud Run", icon: "/images/icons/cloud-run.png" },
        { name: "Firestore", icon: "/images/icons/firestore.png" },
        { name: "Cloud Storage", icon: "/images/icons/cloud-storage.png" }
    ],
    backend: [
        { name: "Flask API", icon: "/images/icons/flask.png" },
        { name: "Google Cloud APIs", icon: "/images/icons/gcp-icon.png" },
        { name: "Docker", icon: "/images/icons/docker.png" },
        { name: "Firebase", icon: "/images/icons/firebase.png" },
    ],
    frontend: [],
    uiux: []
  },
  idea: {
    text1: "While exploring how people plan their trips, my team realized something: everyone loves travelling, but nobody loves digging through ten different sites just to decide where to go. Indonesia has so much to offer, yet the information is scattered.",
    
    image: "/images/projects-behind-the-build/3a-tourid-idea.jpeg", 
    
    text2: "So, we created TourID, one app that brings everything together. From destination recommendations, weather updates and to review and save your favourite spots. It's a small way to make travelling feel a little less stressful and a lot more enjoyable."
  },

  // 👇 FORMAT BARU: DEMOS (Array)
  demos: [
    {
        title: "Full App Walkthrough",
        video: "https://res.cloudinary.com/dfx4r8izl/video/upload/v1765034149/tourid-demo_okhiwb.mp4"
    }
  ],

  // 👇 DATA BARU: BEHIND THE BUILD (ARRAY DINAMIS)
  buildDetails: [
    {
        title: "Cloud Architecture",
        description: "💡 A lightweight serverless architecture that handles media uploads, processes user data and stores everything securely using Cloud Run, Firestore and Cloud Storage.",
        image: "/images/projects-behind-the-build/3b-tourid-architecture.png" 
    }
  ]
};


export default function ProjectHighlights() {
  // State buat ngatur buka/tutup modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(blackstrokeData); // Default ke Blackstroke

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="w-full py-20 px-6 md:px-12 bg-gray-black relative">
      
      {/* Container Utama */}
      <div className="max-w-7xl mx-auto w-full space-y-12">

        {/* Section Title */}
        <div className="relative inline-block pb-2">
            <h2 className="text-mustard text-4xl md:text-4xl font-bold tracking-tight">
                Project Highlights*
            </h2>
            <div className="h-1 w-full bg-mustard mt-1"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Blackstroke (Clickable!) */}
          <ProjectCard 
            projectNumber="№ 01" 
            logoPath="/images/logos/blackstroke-logo.png" 
            description="Redact your document in one go."
            onClick={() => handleOpenModal(blackstrokeData)} // KLIK DISINI!
          />
          
          {/* Card 2: Unmatch (Belum ada data, jadi kosong dulu onClick-nya) */}
          <ProjectCard 
            projectNumber="№ 02" 
            logoPath="/images/logos/unmatch-logo.png" 
            description="Find your perfect music platform."
             onClick={() => handleOpenModal(unmatchData)} // KLIK DISINI!
          />

          {/* Card 3: TourID */}
          <ProjectCard 
            projectNumber="№ 03" 
            logoPath="/images/logos/tourid-merged-logo.png" 
            description="Discover local destination and plan one."
             onClick={() => handleOpenModal(touridData)} // KLIK DISINI!
          />
          
        </div>

      </div>

      {/* RENDER MODAL DISINI (Di luar grid, tapi di dalam section) */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={selectedProject} 
      />

    </section>
  );
}