// Portfolio data — edit any of this freely; the UI reads from these constants.
window.PORTFOLIO = {
  name: "Ahmed Sameh",
  role: "Software Engineer",
  tagline: "Developer by day, Tech Explorer by night",
  location: "Cairo, Egypt",

  about: [
    "I'm a software engineer building distributed backends, AI tooling, and the occasional embedded gadget. Right now I'm at e& working on Java/Spring microservices, Kafka pipelines, and Angular frontends — the kind of glue that keeps a telecom moving.",
    "Outside of work I tinker with PCBs, RAG systems, and Flutter apps. I like problems that touch hardware, security, and ML at the same time."
  ],

  experience: [
    {
      company: "e&",
      role: "Software Engineer",
      start: "Sep 2025",
      end: "Present",
      current: true,
      stack: ["Java", "Spring", "Kafka", "Redis", "Angular", "Postgres", "Microservices"],
      note: "Building production microservices and event-driven pipelines for telecom-scale workloads."
    },
    {
      company: "e&",
      role: "Software Engineer Intern",
      start: "Aug 2025",
      end: "Sep 2025",
      stack: ["Java", "Spring"],
      note: "Onboarded onto the platform team; converted to full-time at the end of the program."
    },
    {
      company: "Fixed Solutions",
      role: "Penetration Testing Intern",
      start: "Aug 2024",
      end: "Sep 2024",
      stack: ["Pentest", "OWASP", "Recon"],
      note: "Web and network pentesting against client environments; wrote up findings and remediations."
    },
    {
      company: "Optima Professional Services",
      role: "Network Security Intern",
      start: "Sep 2024",
      end: "Aug 2024",
      stack: ["Cisco", "Firewalls", "VPN"],
      note: "Hands-on with enterprise firewall configs, IDS rules, and VPN deployments."
    },
    {
      company: "Sumerge",
      role: "Data Engineer Intern",
      start: "Aug 2022",
      end: "Sep 2022",
      stack: ["ETL", "SQL", "Python"],
      note: "Built ingestion jobs and cleanup scripts for a client analytics warehouse."
    }
  ],

  education: [
    {
      school: "Ain Shams University & University of East London",
      degree: "Dual Bachelor's, Computer Engineering",
      years: "2020 — 2025",
      detail: "GPA 3.54"
    }
  ],

  certifications: [
    { name: "CompTIA Security+", issuer: "CompTIA", year: "Apr 2025" },
    { name: "CCNA", issuer: "Cisco", year: "Mar 2025" }
  ],

  featured: [
    {
      title: "Secure OBD-GPS Tracker",
      year: "2025",
      sponsor: "Sponsored by Siemens",
      blurb: "A custom hardware tracker plus secure backend — designed the PCB, wrote the server, and architected the security layer end-to-end.",
      bullets: [
        "Designed and fabricated a custom PCB for the OBD-GPS unit",
        "Built the backend for secure comms and data management",
        "Integrated Firebase for realtime storage, auth, and remote access",
        "Owned the security architecture across hardware and cloud"
      ],
      stack: ["PCB", "Firebase", "Embedded C", "Node"]
    },
    {
      title: "NutriAI",
      year: "2025",
      sponsor: "Calorie & macro tracker",
      blurb: "An AI-powered nutrition tracker that reads food from a photo, cross-references USDA data, and produces personalised insights.",
      bullets: [
        "Vision pipeline using Llava + Llama 3 for food detection",
        "USDA dataset integration for accurate macro lookup",
        "Personalised insights tied to user goals and intake history",
        "Built with Node.js, React, Tailwind, and Supabase"
      ],
      stack: ["Llama 3", "Llava", "React", "Supabase", "Node"]
    },
    {
      title: "Online E-Commerce System",
      year: "2025",
      sponsor: "Full-stack marketplace",
      blurb: "A full-stack marketplace with listings, accounts, and checkout — JWT-secured Spring Boot backend on Postgres.",
      bullets: [
        "Spring Security + JWT auth and authorisation",
        "Postgres schema for products, orders, and users",
        "Java Spring Boot service layer designed for scale",
        "End-to-end checkout flow with order management"
      ],
      stack: ["Spring Boot", "Postgres", "JWT", "Java"]
    },
    {
      title: "Bubbles",
      year: "2024",
      sponsor: "Live on Play Store",
      blurb: "A Flutter app for realtime user interaction and service booking — payments via PayMob, automation via Cloud Functions.",
      bullets: [
        "Flutter + Firebase Firestore, Auth, Remote Config",
        "PayMob card payments wired through the booking flow",
        "Cloud Functions automating notifications and tasks",
        "Realtime presence and chat between users"
      ],
      stack: ["Flutter", "Firebase", "PayMob", "Cloud Functions"]
    }
  ],

  projects: [
    {
      title: "German Legal RAG Chatbot",
      year: "2025",
      blurb: "Retrieval-Augmented chatbot answering legal questions from German PDFs. sentence-transformers for embeddings, ChromaDB for vector search, Flan-T5 for generation, with cited sources.",
      stack: ["RAG", "ChromaDB", "Flan-T5", "Python"]
    },
    {
      title: "Image Processing Distributed System",
      year: "2024",
      blurb: "AWS-native distributed image processor running across EC2 instances behind ELB, with S3 for storage. Built for throughput on large image workloads.",
      stack: ["AWS", "EC2", "S3", "ELB"]
    },
    {
      title: "GiftVault",
      year: "2024",
      blurb: "Mobile app on Play Store for organising events, building gift lists, and managing pledges. SQLite + Firestore, Firebase Auth/Storage/Messaging.",
      stack: ["Android", "Firebase", "SQLite"]
    },
    {
      title: "Secure Peer-to-Peer Chatrooms",
      year: "2024",
      blurb: "Networked Python app for private and group P2P chat, secured with RSA + AES. Sockets and multithreading for efficient peer handling.",
      stack: ["Python", "RSA", "AES", "Sockets"]
    },
    {
      title: "Sudoku Recognition + Solver",
      year: "2023",
      blurb: "Jupyter notebook that recognises printed Sudoku boards from photos and solves them. OpenCV for vision, NumPy + Matplotlib for the rest.",
      stack: ["OpenCV", "NumPy", "Python"]
    },
    {
      title: "Sotek",
      year: "2023",
      blurb: "Google Solution Challenge submission — an app to help reduce violence against women via emergency contacts, community reports, and SMS-triggered emergency video.",
      stack: ["Android", "SMS", "Community"]
    }
  ],

  courses: [
    { name: "The Complete Full-Stack Web Development Course", by: "Udemy — Angela Yu", tag: "Web" },
    { name: "Google Cybersecurity Professional Specialization", by: "Coursera (Google)", tag: "Security" },
    { name: "Cisco CyberOps Associate", by: "National Telecommunication Institute", tag: "Security" },
    { name: "Meta Front-End Development Specialization", by: "Coursera (Meta)", tag: "Web" },
    { name: "Machine Learning Specialization", by: "Coursera (DeepLearning.ai)", tag: "ML" },
    { name: "Flutter Development", by: "Sprints", tag: "Mobile" },
    { name: "Data Structures and Algorithms", by: "Coursera (UC San Diego)", tag: "CS" },
    { name: "Crash Course on Python", by: "Coursera (Google)", tag: "Lang" }
  ],

  contact: {
    email: "ahmedelsherefy@gmail.com",
    linkedin: "linkedin.com/in/ahmed-sameh-b01348b6",
    linkedinUrl: "https://www.linkedin.com/in/ahmed-sameh-b01348b6/",
    github: "github.com/AhmedSameh52",
    githubUrl: "https://github.com/AhmedSameh52"
  }
};
