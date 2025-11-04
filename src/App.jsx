import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Moon, Linkedin, Github, FileText, ExternalLink } from 'lucide-react';

const experienceCards = [
  {
    title: 'Data Strategy Analyst — Dave & Buster\'s',
    img: '/images/strategist.png',
    back: `• Lead enterprise-level data strategy initiatives across IT, Marketing, Finance, and Operations to unify decision-making through analytics.
- Partner with C-suite executives to define KPI trees, optimize reporting pipelines, and align strategy with measurable outcomes.
- Design and deploy scalable SQL + ML-driven systems powering loyalty, F&B, and franchise forecasting.
- Drive international franchise expansion through predictive models, automation, and strategic data storytelling.`
  },
  {
    title: 'Research Assistant — Cognitive Enhancement through XR',
    img: '/images/researcher.png',
    back: `• Conducted interdisciplinary research at the intersection of neuroscience and extended reality, exploring cognitive performance enhancement.
- Built digital signal processing (DSP) and ML pipelines to analyze EEG data and personalize real-time cognitive training.
- Mentored graduate researchers in experiment design, signal interpretation, and applied machine learning.
- Delivered reproducible research that advanced understanding of adaptive focus mechanisms in immersive environments.`
  },
  {
    title: 'Undergraduate Research Assistant — Human-Centered XR Lab',
    img: '/images/educator.png',
    back: `• Developed a Unity-based XR system integrating CNN, Seq2Seq, and MCMC algorithms to predict and enhance user concentration.
- Automated data collection and annotation pipelines, improving dataset quality by 30% and model accuracy by 25%.
- Collaborated cross-functionally to publish findings and translate research into deployable cognitive tools.
- Combined technical innovation with user-centered design to build neuroadaptive VR experiences.`
  },
];

const projectCards = [
  {
    title: 'EcoLens — Environmental Computer Vision Platform',
    img: '/images/ecolens.png',
    back: `• Created a CV system using YOLOv8 to detect and classify environmental hazards with 99.5% accuracy.
- Engineered a dashboard for real-time ecological insights and geospatial visualization.
- Recognized with "Best Beginner Hacker" and Top 5% Overall at HackUTD for innovation and execution.`
  },
  {
    title: 'AllerEase — Air Quality & Allergen Assistant',
    img: '/images/allerease.png',
    back: `• Built an AI-powered assistant integrating air-quality APIs, allergen mapping, and ML-driven exposure prediction.
- Designed a responsive interface offering personalized safety recommendations and protective actions.
- Earned awards for "Best Use of MongoDB" and placed in the Top 10% of general hackathon participants.`
  },
  {
    title: 'HDMind — Neuroadaptive VR with EEG Feedback',
    img: '/images/hdmind.png',
    back: `• Developed a Meta Quest VR system leveraging EEG data for adaptive, neurofeedback-based gameplay.
- Trained deep learning models to dynamically respond to focus and cognitive states, improving prediction precision by 25%.
- Awarded "Best Use of MongoDB" and recognized among the Top 5% for technical excellence and user impact.`
  },
];

const leadershipCards = [
  {
    title: 'Vice President of Community — Society of Women Engineers (SWE)',
    img: '/images/swe.png',
    back: `• Provide executive leadership for the Education and Community divisions, overseeing programs from K–College outreach to corporate partnerships.
- Advanced from Coordinator → Chair → VP by leading with empathy, operational excellence, and strategic initiative.
- Cultivate inclusive environments by expanding mentorship networks, securing sponsorships, and scaling campus-wide engagement.
- Mentor student leaders, empowering them to lead workshops, manage logistics, and represent SWE across national chapters.`
  },
  {
    title: 'Logistics Coordinator — WEHack (Dallas\'s Largest Inclusive Hackathon)',
    img: '/images/wehack.png',
    back: `• Spearhead operations for a 500+ participant hackathon encompassing venue management, scheduling, volunteer coordination, and partner engagement.
- Collaborate with cross-functional teams to ensure seamless execution and participant safety.
- Develop contingency frameworks for incident response and real-time communication under high-pressure conditions.
- Demonstrate adaptability, foresight, and composure in fast-paced event management scenarios.`
  },
  {
    title: 'Mentor — Freshman Mentorship Program',
    img: '/images/fmp.png',
    back: `• Guided first-year students through academic, personal, and professional development, fostering resilience and confidence.
- Supported mentees in achieving milestones — one became a Dean's Scholar, another assumed a campus leadership role.
- Led workshops on time management, academic planning, and leadership fundamentals to strengthen program cohesion.`
  },
  {
    title: 'Lead Coding Instructor — Ronnia Langston Foundation',
    img: '/images/ronnia.png',
    back: `• Designed project-based coding curricula emphasizing problem-solving, creativity, and technical literacy.
- Trained and supervised mentors, ensuring consistency in remote instruction and educational delivery across global classrooms.
- Directed cross-time-zone coordination to improve instructional reach and learner engagement.
- Championed equitable access to STEM education by integrating accessible tech platforms and personalized mentorship.`
  },
];

const aboutCard = {
  title: 'The Architect of Data & Dreams',
  img: '/images/about.png',
  back: {
    education: 'B.S. in CS — University of Texas at Dallas',
    builds: 'Agentic AI, resilient data pipelines, ML-driven products',
    approach: 'Curious, strategic, quietly relentless — I find order in complexity',
    impact: 'Shipped production AI & data systems at Dave & Buster\'s',
    research: 'XR + cognitive analysis — careful experiments with human potential',
    offDuty: 'Off-duty aka not cosplaying as an adult: LEGO, 3D puzzles, and getting lost in books'
  }
};

// color helpers (kept for future theming if you want)
const activeColorClass = (page) => {
  switch (page) {
    case 'about': return 'text-emerald-400';
    case 'experience': return 'text-red-400';
    case 'projects': return 'text-blue-400';
    case 'leadership': return 'text-yellow-400';
    default: return 'text-emerald-400';
  }
};

const headerBorderClass = (stage) => {
  switch (stage) {
    case 'about': return 'border-emerald-400/30';
    case 'experience': return 'border-red-400/30';
    case 'projects': return 'border-blue-400/30';
    case 'leadership': return 'border-yellow-400/30';
    default: return 'border-white/10';
  }
};

const TarotPortfolio = () => {
  const [stage, setStage] = useState('intro');
  const [flippedCard, setFlippedCard] = useState(null);
  const [textIndex, setTextIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const introTexts = [
    "Data architect. AI builder. Research explorer.",
    "Where strategy meets innovation.",
    "Choose your journey."
  ];

  useEffect(() => {
    if (stage === 'intro' && textIndex < introTexts.length - 1) {
      const timer = setTimeout(() => setTextIndex(textIndex + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [stage, textIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const paths = [
    { id: 'about', label: 'The Seeker', subtitle: 'Recruiters & Wanderers', icon: Star, target: 'about' },
    { id: 'projects', label: 'The Creator', subtitle: 'Developers & Builders', icon: Sparkles, target: 'projects' },
    { id: 'leadership', label: 'The Guide', subtitle: 'Collaborators & Mentors', icon: Moon, target: 'leadership' },
    { id: 'experience', label: 'The Strategist', subtitle: 'Just Exploring', icon: Star, target: 'experience' }
  ];

  const Header = () => (
    <nav
      className={`sticky top-0 z-50 border-b ${headerBorderClass(stage)} shadow-sm`}
      style={{ backgroundColor: '#000', WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {['about', 'experience', 'projects', 'leadership'].map((page) => (
            <button
              key={page}
              onClick={() => { setStage(page); setFlippedCard(null); }}
              style={{ touchAction: 'manipulation' }}
              className={`text-sm md:text-base transition-all duration-300 capitalize font-light tracking-wide select-none cursor-pointer ${
                stage === page ? 'text-white underline underline-offset-8 decoration-1' : 'text-white/80 md:hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderIntro = () => (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        {[...Array(150)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size + 'px',
                height: size + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: Math.random() * 3 + 's',
                boxShadow: `0 0 ${size * 2}px ${size}px rgba(255,255,255,0.3)`
              }}
            />
          );
        })}
      </div>

      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.15), transparent 80%)`
        }}
      />

      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        <div className="mb-16 space-y-8">
          {introTexts.map((text, idx) => (
            <h1
              key={idx}
              className={`text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide transition-all duration-1000 ${
                idx <= textIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {text}
            </h1>
          ))}
        </div>

        {textIndex === introTexts.length - 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 animate-fade-in">
            {paths.map((path) => {
              const Icon = path.icon;
              return (
                <button
                  key={path.id}
                  onClick={() => { setFlippedCard(null); setStage(path.target); }}
                  style={{ touchAction: 'manipulation' }}
                  className="group relative p-8 bg-white/5 border border-white/10 rounded-xl md:hover:bg-white/10 md:hover:border-white/20 transition-all duration-500 hover:scale-105 select-none cursor-pointer"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-purple-400 md:group-hover:text-purple-300 transition-colors" />
                  <h3 className="text-lg font-light text-white mb-2">{path.label}</h3>
                  <p className="text-sm text-gray-400">{path.subtitle}</p>
                  <div className="absolute inset-0 rounded-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 to-transparent" />
                </button>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );

  const renderAbout = () => (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-black text-white pt-8 md:pt-12 p-4 md:p-8 relative overflow-hidden">
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          {[...Array(120)].map((_, i) => {
            const size = Math.random() * 4 + 1;
            return (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: Math.random() * 3 + 's',
                  boxShadow: `0 0 ${size * 2}px ${size}px rgba(255,255,255,0.3)`
                }}
              />
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full"></div>
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-emerald-400/30 shadow-2xl"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href="https://linkedin.com/in/pragnasri-vellanki-6b10141a9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/5 md:hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm group text-sm md:text-base"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-light">LinkedIn</span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 md:group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/PragnasriVellanki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/5 md:hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm group text-sm md:text-base"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-light">GitHub</span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 md:group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://devpost.com/pragnasri-vellanki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/5 md:hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm group text-sm md:text-base"
              >
                <Star className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-light">Devpost</span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 md:group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/5 md:hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm group text-sm md:text-base"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-light">Resume</span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 md:group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="flex justify-center px-4">
            <div
              className="relative w-full max-w-md cursor-pointer perspective-1000"
              style={{ aspectRatio: '2/3', touchAction: 'manipulation', userSelect: 'none' }}
              onPointerUp={() => setFlippedCard(flippedCard === 'about' ? null : 'about')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlippedCard(flippedCard === 'about' ? null : 'about')}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedCard === 'about' ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full rounded-xl overflow-hidden shadow-2xl border border-white/20 md:hover:border-white/40 transition-all duration-500">
                    <img
                      src={aboutCard.img}
                      alt={aboutCard.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="h-full bg-slate-900/95 backdrop-blur p-6 md:p-8 rounded-xl border border-emerald-400/30 overflow-auto shadow-2xl">
                    <h3 className="text-xl md:text-2xl font-light text-emerald-300 mb-6 text-center">{aboutCard.title}</h3>
                    <ul className="text-emerald-100 text-sm md:text-base space-y-3 leading-relaxed">
                      <li><span className="font-semibold text-emerald-300">Education:</span> {aboutCard.back.education}</li>
                      <li><span className="font-semibold text-emerald-300">What I build:</span> {aboutCard.back.builds}</li>
                      <li><span className="font-semibold text-emerald-300">My approach:</span> {aboutCard.back.approach}</li>
                      <li><span className="font-semibold text-emerald-300">Impact:</span> {aboutCard.back.impact}</li>
                      <li><span className="font-semibold text-emerald-300">Research:</span> {aboutCard.back.research}</li>
                      <li className="pt-2 text-emerald-200 text-sm italic">{aboutCard.back.offDuty}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs md:text-sm mt-6 italic font-light">
            Click the card to reveal more
          </p>
        </div>

        <style>{`
          .perspective-1000 { perspective: 1000px; }
          .transform-style-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); -webkit-transform: rotateY(180deg); will-change: transform; }
        `}</style>
      </div>
    </>
  );

  const renderCardSection = (title, cards, bgGradient) => (
    <>
      <Header />
      <div className={`min-h-screen ${bgGradient} text-white pt-8 md:pt-12 p-4 md:p-8 relative overflow-hidden`}>
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          {[...Array(120)].map((_, i) => {
            const size = Math.random() * 4 + 1;
            return (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: Math.random() * 3 + 's',
                  boxShadow: `0 0 ${size * 2}px ${size}px rgba(255,255,255,0.3)`
                }}
              />
            );
          })}
        </div>

        <h1
          className="text-3xl md:text-5xl font-light text-center mb-12 md:mb-16 text-white relative z-10 tracking-wide"
          style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)' }}
        >
          {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto relative z-10 px-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative w-full cursor-pointer perspective-1000"
              style={{ aspectRatio: '2/3', touchAction: 'manipulation', userSelect: 'none' }}
              onPointerUp={() => setFlippedCard(flippedCard === idx ? null : idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlippedCard(flippedCard === idx ? null : idx)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedCard === idx ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full rounded-xl border border-white/20 md:hover:border-white/40 transition-all duration-500">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="h-full bg-slate-900/95 backdrop-blur p-4 md:p-6 rounded-xl border border-purple-400/30 overflow-auto shadow-2xl">
                    <h3 className="text-lg md:text-xl font-light text-purple-300 mb-3 md:mb-4">{card.title}</h3>
                    <div className="text-sm md:text-base text-purple-100 whitespace-pre-line leading-relaxed">
                      {card.back}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs md:text-sm mt-8 md:mt-12 italic font-light relative z-10">
          Click each card to explore
        </p>

        <style>{`
          .perspective-1000 { perspective: 1000px; }
          .transform-style-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); -webkit-transform: rotateY(180deg); will-change: transform; }
        `}</style>
      </div>
    </>
  );

  if (stage === 'intro') return renderIntro();
  if (stage === 'about') return renderAbout();
  if (stage === 'experience') return renderCardSection(
    'The Path of Strategy',
    experienceCards,
    'bg-gradient-to-b from-red-950 via-red-900 to-black'
  );
  if (stage === 'projects') return renderCardSection(
    'The Path of Creation',
    projectCards,
    'bg-gradient-to-b from-blue-950 via-blue-900 to-black'
  );
  if (stage === 'leadership') return renderCardSection(
    'The Path of Guidance',
    leadershipCards,
    'bg-gradient-to-b from-yellow-950 via-yellow-900 to-black'
  );

  return null;
};

export default TarotPortfolio;
