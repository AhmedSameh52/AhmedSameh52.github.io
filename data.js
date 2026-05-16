// Portfolio data — edit any of this freely; the UI reads from these constants.
window.PORTFOLIO = {
  name: "Ahmed Sameh",
  role: "Software Engineer",
  tagline: "Developer by day, Tech Explorer by night",
  location: "Cairo, Egypt",

  about: [
    "I'm a full stack engineer with a strong foundation in computer engineering and a background in cybersecurity. Currently at e& building Java/Spring microservices, Kafka event pipelines, and Angular frontends, the infrastructure behind a telecom scale loyalty platform.",
    "Outside work I build across the stack: Flutter apps, React frontends, and AI tooling, with the occasional hardware project on the side. I like problems that sit at the intersection of systems, security, and ML."
  ],

  skills: [
    "Java", "Java Spring", "Spring Boot", "Node.js", "Express.js",
    "JavaScript", "TypeScript", "React", "Angular", "Tailwind CSS", "HTML & CSS",
    "Flutter & Dart", "Python", "SQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase",
    "Apache Kafka", "Redis", "RESTful APIs", "System Design", "OOP", "Design Patterns",
    "Data Structures", "Shell Scripting", "jQuery"
  ],

  languages: [
    { lang: "Arabic", level: "Native" },
    { lang: "English", level: "Fluent" },
    { lang: "German", level: "Conversational" }
  ],

  experience: [
    {
      company: "e&",
      role: "Software Engineer",
      start: "Sep 2025",
      end: "Present",
      current: true,
      stack: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Angular", "Microservices"],
      bullets: [
        "Developing and maintaining microservices for the Loyalty platform using Java and Spring Boot, handling customer rewards and transactions.",
        "Integrating Apache Kafka for event processing and optimizing data access using PostgreSQL and Redis to support telecom-scale system performance."
      ]
    },
    {
      company: "e&",
      role: "Fullstack Developer Intern",
      start: "Aug 2025",
      end: "Sep 2025",
      stack: ["Java", "Spring", "Spring Boot", "Spring Security", "PostgreSQL", "Angular"],
      note: "Built a full-stack e-commerce platform with Spring Boot, JWT auth, and PostgreSQL; converted to full-time at the end of the program."
    },
    {
      company: "Fixed Solutions",
      role: "Penetration Testing Intern",
      start: "Sep 2024",
      end: "Oct 2024",
      stack: ["Nmap", "Metasploit", "Active Directory", "OWASP", "Privilege Escalation"],
      note: "Web and network pentesting; local enumeration, exploitation, pivoting, and Active Directory attacks against lab environments."
    },
    {
      company: "Optima Professional Services",
      role: "Network Security Intern",
      start: "Aug 2024",
      end: "Sep 2024",
      stack: ["F5", "Palo Alto", "BeyondTrust", "Netscout", "Trend Micro", "Gigamon"],
      note: "Hands on with enterprise firewall configs, IDS rules, and VPN deployments using industry leading security appliances."
    },
    {
      company: "Sumerge",
      role: "Data Engineering Intern",
      start: "Aug 2022",
      end: "Sep 2022",
      stack: ["Apache Kafka", "Apache NiFi", "Apache Hadoop", "PostgreSQL", "Python"],
      note: "Built data pipelines and cleanup scripts for a client analytics warehouse using Apache Kafka, NiFi, and Hadoop."
    }
  ],

  education: [
    {
      school: "Ain Shams University & ",
      degree: "Bachelor's Degree, Computer Engineering",
      years: "2020 — 2025",
      detail: "GPA 3.54 · Graduation Project sponsored by Siemens",
      pdfUrl: ""
    },
    {
      school: "University of East London",
      degree: "Dual Bachelor's, Computer Engineering",
      years: "2021 — 2025",
      detail: "GPA 3.54",
      pdfUrl: ""
    }
  ],

  certifications: [
    { name: "CompTIA Security+", issuer: "CompTIA", year: "Apr 2025", valid: "Apr 2028", pdfUrl: "https://drive.google.com/file/d/1NBJp8MgryujGBxxuZIbv_lZursdqM_zd/view?usp=sharing" },
    { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", year: "Mar 2025", valid: "Mar 2028", pdfUrl: "https://drive.google.com/file/d/1glqaZOhAfJnHLaP1oNh4ceXQOb8DQc0a/view?usp=sharing" }
  ],

  featured: [
    {
      title: "Secure OBD-GPS Tracker",
      year: "2025",
      sponsor: "Sponsored by Siemens EDA",
      blurb: "Graduation project — a custom hardware tracker plus secure backend, designed end-to-end from PCB to cloud security architecture.",
      bullets: [
        "Designed and fabricated a custom PCB for the OBD-GPS tracker unit",
        "Built the backend server for secure communication and data management",
        "Integrated Firebase for real-time data storage, authentication, and remote access",
        "Designed and developed the full security architecture of the system"
      ],
      stack: ["PCB", "Embedded C", "Firebase", "Node.js", "Security"]
    },
    {
      title: "NutriAI",
      year: "2025",
      sponsor: "Calorie & macro tracker",
      blurb: "An AI-powered nutrition tracker that reads food from a photo, cross-references USDA data, and produces personalised insights.",
      bullets: [
        "Vision pipeline using Llava + Llama 3 for accurate food detection from images",
        "USDA dataset integration for precise macro and calorie lookup",
        "Personalised nutrition insights tied to user goals and intake history",
        "Built with Node.js, React, Tailwind CSS, and Supabase"
      ],
      stack: ["Llama 3", "Llava", "React", "Supabase", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Online E-Commerce System",
      year: "2025",
      sponsor: "Full-stack marketplace",
      blurb: "A full-stack marketplace with product listings, user accounts, and checkout — JWT-secured Spring Boot backend on PostgreSQL.",
      bullets: [
        "Spring Security + JWT authentication and authorisation",
        "PostgreSQL schema designed for products, orders, and users",
        "Java Spring Boot service layer built for scalable, maintainable architecture",
        "End-to-end checkout flow with complete order management"
      ],
      stack: ["Spring Boot", "PostgreSQL", "JWT", "Java", "Spring Security"]
    },
    {
      title: "Bubbles",
      year: "2024",
      sponsor: "Live on Play Store",
      blurb: "A Flutter app for real-time user interaction and service booking — PayMob payments, Firebase backend, and Cloud Functions automation.",
      bullets: [
        "Flutter + Firebase Firestore, Authentication, and Remote Config",
        "PayMob card payment APIs wired through the booking flow",
        "Cloud Functions automating notifications and background tasks",
        "Real-time presence and chat between users and service providers"
      ],
      stack: ["Flutter", "Firebase", "PayMob", "Cloud Functions", "Dart"]
    }
  ],

  projects: [
    {
      title: "German Legal RAG Chatbot",
      year: "2025",
      blurb: "RAG chatbot for answering legal questions from German PDF documents — sentence-transformers for embeddings, ChromaDB for vector search, Flan-T5 for generation, with source citations.",
      stack: ["RAG", "ChromaDB", "Flan-T5", "Python", "sentence-transformers"]
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
      blurb: "Play Store app for organising events, building personalised gift lists, and managing pledges. SQLite + Firestore for local and cloud storage, Firebase Auth/Storage/Messaging.",
      stack: ["Android", "Firebase", "SQLite", "Cloud Messaging"]
    },
    {
      title: "Secure Peer-to-Peer Chatrooms",
      year: "2024",
      blurb: "Networked Python app for private and group P2P chat, secured with RSA + AES. Socket programming and multithreading for efficient peer handling.",
      stack: ["Python", "RSA", "AES", "Sockets", "Multithreading"]
    },
    {
      title: "Sudoku Recognition + Solver",
      year: "2024",
      blurb: "Python script that recognises printed Sudoku boards from photos and solves them. OpenCV for vision, NumPy + Matplotlib for processing and visualisation.",
      stack: ["OpenCV", "NumPy", "Python", "Matplotlib"]
    },
    {
      title: "Sotek",
      year: "2023",
      blurb: "Google Solution Challenge submission — an app to help reduce violence against women via emergency contacts, community reporting, and SMS-triggered emergency video. Includes community portal and trending articles.",
      stack: ["Android", "SMS", "Firebase", "Community"]
    }
  ],

  courses: [
    { name: "The Complete Full-Stack Web Development Course", by: "Udemy — Angela Yu", tag: "Web", year: "Present", pdfUrl: "" },
    { name: "Google Cybersecurity Professional Specialization", by: "Coursera (Google)", tag: "Security", year: "Dec 2024", pdfUrl: "" },
    { name: "Cisco CyberOps Associate", by: "National Telecommunication Institute", tag: "Security", year: "Sep 2024", pdfUrl: "" },
    { name: "Meta Front-End Development Specialization", by: "Coursera (Meta)", tag: "Web", year: "Mar 2024", pdfUrl: "" },
    { name: "Machine Learning Specialization", by: "Coursera (DeepLearning.ai)", tag: "ML", year: "Sep 2023", pdfUrl: "" },
    { name: "Flutter Development", by: "Sprints", tag: "Mobile", year: "Aug 2023", pdfUrl: "" },
    { name: "Data Structures and Algorithms", by: "Coursera (UC San Diego)", tag: "CS", year: "Jan 2023", pdfUrl: "" },
    { name: "Crash Course on Python", by: "Coursera (Google)", tag: "Lang", year: "Aug 2022", pdfUrl: "" }
  ],

  contact: {
    email: "ahmedelsherefy@gmail.com",
    phone: "+201115003772",
    linkedin: "linkedin.com/in/ahmed-sameh-b01348b6",
    linkedinUrl: "https://www.linkedin.com/in/ahmed-sameh-b01348b6/",
    github: "github.com/AhmedSameh52",
    githubUrl: "https://github.com/AhmedSameh52",
    tryhackme: "tryhackme.com/p/AhmedSameh1",
    tryhackmeUrl: "https://tryhackme.com/p/AhmedSameh1"
  }
};
