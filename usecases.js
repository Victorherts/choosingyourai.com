const usecases = [
  {
    id:"cv-career",icon:"📄",title:"AI for CV & Career",
    desc:"Build standout resumes, prepare for interviews, and accelerate your job search with AI tools.",
    tags:["Writing & Content Creation","Jobs, CV & Career Tools","Productivity & Automation"],
    prompts:[
      {text:"Write a professional summary for a software engineer with 5 years of experience in Python and cloud computing.",tool:"ChatGPT"},
      {text:"Rewrite my resume bullet points to include measurable achievements and action verbs.",tool:"Grammarly"},
      {text:"Generate 10 common interview questions for a product manager role and suggest strong answers.",tool:"Claude"},
      {text:"Create a tailored cover letter for a data analyst position at Google based on this job description: [paste JD]",tool:"ChatGPT"},
      {text:"Review my LinkedIn profile summary and suggest improvements for better recruiter visibility.",tool:"Microsoft Copilot"}
    ]
  },
  {
    id:"emails",icon:"📧",title:"AI for Emails & Communication",
    desc:"Write professional emails, respond faster, and communicate clearly with AI assistance.",
    tags:["Writing & Content Creation","Productivity & Automation"],
    prompts:[
      {text:"Write a polite follow-up email after a job interview thanking the interviewer.",tool:"ChatGPT"},
      {text:"Rewrite this email to sound more professional and concise: [paste email]",tool:"Grammarly"},
      {text:"Draft a cold outreach email to a potential client for my web design agency.",tool:"Jasper AI"},
      {text:"Write a diplomatic email declining a meeting invitation due to scheduling conflicts.",tool:"Claude"},
      {text:"Summarize this long email thread into 3 key action items.",tool:"Microsoft Copilot"}
    ]
  },
  {
    id:"writing",icon:"✍️",title:"AI for Writing",
    desc:"Create blog posts, articles, stories, and any written content faster with AI writing tools.",
    tags:["Writing & Content Creation","Marketing & SEO"],
    prompts:[
      {text:"Write a 1000-word blog post about the benefits of remote work for software developers.",tool:"Jasper AI"},
      {text:"Generate 20 engaging blog title ideas about artificial intelligence trends in 2026.",tool:"ChatGPT"},
      {text:"Rewrite this paragraph to be more engaging and easier to read: [paste text]",tool:"QuillBot"},
      {text:"Create an outline for a whitepaper on sustainable energy solutions.",tool:"Claude"},
      {text:"Write a compelling product description for a wireless noise-cancelling headphone.",tool:"Copy.ai"}
    ]
  },
  {
    id:"coding",icon:"💻",title:"AI for Coding",
    desc:"Write, debug, and optimize code faster with AI-powered developer tools.",
    tags:["Coding & Developer Tools"],
    link:"coding.html",
    prompts:[
      {text:"Write a Python function that reads a CSV file and returns the top 5 rows sorted by a given column.",tool:"GitHub Copilot"},
      {text:"Debug this JavaScript code and explain what's causing the TypeError: [paste code]",tool:"ChatGPT"},
      {text:"Convert this Python script to TypeScript with proper type annotations.",tool:"Cursor"},
      {text:"Write unit tests for this React component using Jest and React Testing Library.",tool:"Codeium"},
      {text:"Explain this SQL query in plain English and suggest performance optimizations: [paste query]",tool:"Phind"}
    ]
  },
  {
    id:"business",icon:"💼",title:"AI for Business",
    desc:"Automate workflows, analyze data, create presentations, and boost team productivity.",
    tags:["Productivity & Automation","Marketing & SEO"],
    prompts:[
      {text:"Create a SWOT analysis for a SaaS startup entering the project management market.",tool:"ChatGPT"},
      {text:"Generate a 10-slide pitch deck outline for a Series A fundraising round.",tool:"Tome"},
      {text:"Write a project status update email summarizing this week's progress for stakeholders.",tool:"Microsoft Copilot"},
      {text:"Analyze these quarterly sales numbers and identify the top 3 trends: [paste data]",tool:"Google Gemini"},
      {text:"Create a 90-day onboarding plan for a new marketing hire.",tool:"Notion AI"}
    ]
  },
  {
    id:"students",icon:"🎓",title:"AI for Students",
    desc:"Study smarter, get homework help, and learn new concepts with AI tutoring tools.",
    tags:["Education & Study Tools"],
    prompts:[
      {text:"Explain quantum entanglement in simple terms a high school student would understand.",tool:"ChatGPT"},
      {text:"Create flashcards for the key concepts in Chapter 5 of my biology textbook: [paste notes]",tool:"Quizlet AI"},
      {text:"Help me solve this calculus problem step by step: [paste problem]",tool:"Wolfram Alpha AI"},
      {text:"Summarize this research paper into 5 key takeaways: [paste abstract]",tool:"Scholarcy"},
      {text:"Generate practice questions for my upcoming history exam on World War II.",tool:"Khanmigo"}
    ]
  },
  {
    id:"design",icon:"🎨",title:"AI for Image & Design",
    desc:"Generate images, create logos, design marketing materials, and bring your visual ideas to life.",
    tags:["Image Generation & Design"],
    prompts:[
      {text:"Generate a minimalist logo for a coffee shop called 'Morning Brew' with warm earth tones.",tool:"Midjourney"},
      {text:"Create a social media banner for a tech startup launch event, modern and clean style.",tool:"Canva AI"},
      {text:"Generate a photorealistic image of a cozy mountain cabin at sunset with snow.",tool:"DALL·E"},
      {text:"Remove the background from this product photo and replace it with a gradient.",tool:"Clipdrop"},
      {text:"Design a set of 5 app icons for a fitness tracking application in flat design style.",tool:"Leonardo AI"}
    ]
  },
  {
    id:"legal",icon:"⚖️",title:"AI for Legal",
    desc:"Draft contracts, review documents, and research legal topics with AI assistance.",
    tags:["Writing & Content Creation","Productivity & Automation"],
    disclaimer:"⚠️ These tools are for informational and drafting purposes only. They do not constitute legal advice. Always consult a qualified attorney for legal matters.",
    prompts:[
      {text:"Draft a basic freelance contract template including payment terms and intellectual property clauses.",tool:"ChatGPT"},
      {text:"Summarize the key points of this NDA agreement in plain English: [paste document]",tool:"Claude"},
      {text:"What are the main differences between an LLC and a Corporation in the US?",tool:"Perplexity AI"},
      {text:"Review this terms of service draft and flag any potentially problematic clauses.",tool:"ChatGPT"},
      {text:"Explain GDPR compliance requirements for a small e-commerce business.",tool:"Perplexity AI"}
    ]
  },
  {
    id:"health",icon:"🏥",title:"AI for Health & Wellness",
    desc:"Explore health information, plan fitness routines, and track wellness goals with AI tools.",
    tags:["Chatbots & Conversational AI","Productivity & Automation"],
    disclaimer:"⚠️ These tools provide general wellness information only. They are not a substitute for professional medical advice, diagnosis, or treatment. Always consult a healthcare provider for medical concerns.",
    prompts:[
      {text:"Create a 4-week beginner workout plan for someone who wants to build strength at home.",tool:"ChatGPT"},
      {text:"Generate a 7-day meal plan for a vegetarian diet with 2000 calories per day.",tool:"Google Gemini"},
      {text:"Explain the benefits and risks of intermittent fasting in simple terms.",tool:"Perplexity AI"},
      {text:"Create a daily mindfulness routine for stress management in 15 minutes.",tool:"Claude"},
      {text:"What stretches should I do before and after running to prevent injury?",tool:"ChatGPT"}
    ]
  }
];
