
import { useState } from 'react'
import './App.css'
import profile from './assets/profile.png.png'



const services = [
  {
    title: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Frontend Development',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'UI/UX Systems',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop',
  },
];

const skills = [
  'Python',
  'JavaScript',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'CSS Frameworks',
  'Frontend Development',
  'Responsive Design',
  'UI/UX Design',
];


const stats = [
  {
    number: '4+',
    label: 'Years Experience',
  },
  {
    number: '20+',
    label: 'Projects Completed',
  },
  {
    number: '10+',
    label: 'Modern Technologies & Tools',
  },
];

export default function FuturisticHeroUI() {
  const [darkMode, setDarkMode] = useState(true);
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <div
      className={`min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode ? 'bg-[#050505] text-white' : 'bg-[#f5f1e8] text-black'
      }`}
    >
      <div
        className={`fixed inset-0 -z-10 ${
          darkMode
            ? 'bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_40%)]'
            : 'bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_45%)]'
        }`}
      />
      <div
        className={`fixed inset-0 -z-10 bg-[size:80px_80px] ${
          darkMode
            ? 'opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]'
            : 'opacity-10 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]'
        }`}
      />

      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-6 lg:pt-6">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between rounded-[30px] border border-[#D4AF37]/20 bg-black/70 px-6 py-5 backdrop-blur-2xl lg:px-10 lg:py-6">
          <h1 className="text-2xl font-serif tracking-wide text-[#D4AF37] lg:text-5xl">
            HEZRON OKOTH
          </h1>

          <nav className="hidden items-center gap-10 uppercase tracking-[0.2em] text-sm text-white/90 lg:flex">
            <a href="#home" className="text-[#D4AF37] transition">
              Home
            </a>
            <a href="#about" className="transition hover:text-[#D4AF37]">
              About
            </a>
            <a href="#services" className="transition hover:text-[#D4AF37]">
              Services
            </a>
            <a href="#skills" className="transition hover:text-[#D4AF37]">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-[#D4AF37]">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-[#D4AF37]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full border border-[#D4AF37]/50 px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowContactOptions(!showContactOptions)}
                className="rounded-2xl border border-[#D4AF37]/50 px-5 py-3 text-sm uppercase tracking-[0.15em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black lg:px-8 lg:py-4"
              >
                Let&apos;s Talk
              </button>

              <div
                className={`absolute right-0 top-[120%] w-64 overflow-hidden rounded-3xl border border-[#D4AF37]/20 backdrop-blur-2xl transition-all duration-500 ${
                  showContactOptions
                    ? 'max-h-60 opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
                } ${darkMode ? 'bg-black/90' : 'bg-white/90'}`}
              >
                <div className="flex flex-col gap-4 p-5">
                  <a
                    href="https://wa.me/254700806728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="h-7 w-7 rounded-full"
                    />
                    WhatsApp
                  </a>

                  <a
                    href="mailto:hezronoricho@gmail.com"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-[#D4AF37] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                      alt="Gmail"
                      className="h-7 w-7"
                    />
                    Gmail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="home" className="relative z-10 px-4 pb-20 pt-36 lg:px-6 lg:pt-44">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[40px] border border-[#D4AF37]/10 ${darkMode ? 'bg-[#050505]/90' : 'bg-white/80'}">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="grid items-center gap-14 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-16">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[320px] w-[320px] rounded-full border border-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.3)] lg:h-[560px] lg:w-[560px]" />
              </div>

              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-[4px] border-[#D4AF37]/70 shadow-[0_0_60px_rgba(212,175,55,0.35)] lg:h-[520px] lg:w-[520px]">
                <img
                  src={profile}
                  alt="Hezron Okoth"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 text-sm uppercase tracking-[0.25em] text-[#D4AF37] lg:text-2xl">
                <span>Hello, I&apos;m</span>
                <div className="h-[1px] w-20 bg-[#D4AF37]/50 lg:w-32" />
              </div>

              <div className="leading-[0.85]">
                <h1 className="text-5xl font-serif tracking-tight text-white sm:text-7xl lg:text-[9rem]">
                  HEZRON
                </h1>
                <h1 className="text-5xl font-serif tracking-tight text-[#D4AF37] sm:text-7xl lg:text-[9rem]">
                  OKOTH
                </h1>
              </div>

              <h2 className="text-lg uppercase tracking-[0.2em] text-white/90 sm:text-2xl lg:text-3xl">
                Software Developer & Web Designer
              </h2>

              <div className="h-[2px] w-24 bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.8)] lg:w-32" />

              <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-xl lg:text-2xl">
                I build modern, responsive and high-performance websites and
                web applications that help businesses grow, stand out and
                deliver premium digital experiences.
              </p>

              <div className="flex flex-wrap gap-5 pt-4 lg:pt-6">
                <button className="rounded-2xl bg-[#D4AF37] px-8 py-4 text-sm uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-105 lg:px-10 lg:py-5 lg:text-xl">
                  View My Work
                </button>

                <button className="rounded-2xl border border-[#D4AF37]/50 px-8 py-4 text-sm uppercase tracking-[0.12em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black lg:px-10 lg:py-5 lg:text-xl">
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          <div className="px-8 pb-10 lg:px-16 lg:pb-12">
            <div className="flex flex-wrap items-center justify-between gap-10 rounded-[30px] border border-[#D4AF37]/10 darkMode ? 'bg-black/60' : 'bg-white/70' px-8 py-8 backdrop-blur-xl lg:px-10 lg:py-10">
              <div>
                <p className="text-lg uppercase tracking-[0.2em] text-[#D4AF37] lg:text-xl">
                  Reach me
                </p>
                <p className="mt-3 text-lg uppercase tracking-[0.2em] text-[#D4AF37] lg:text-xl">
                  call/whatsapp: +254700806728
                </p>
                <p className="mt-1  tracking-[0.2em] text-[#D4AF37] lg:text-xl">
                  EMAIL: hezronoricho@gmail.com
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-3xl font-medium text-[#D4AF37] opacity-90 lg:gap-14 lg:text-5xl">
                <span>Whatsapp</span>
                <span>Gmail</span>
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section
        id="about"
        className="border-t border-white/5 px-6 py-24 lg:px-20 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              About
            </div>

            <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Crafting Digital Experiences That Matter.
            </h2>

            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-[#cfcfcf]">
              <p>
                I am a creative full-stack developer and digital designer focused
                on building modern, high-performance websites and cinematic user
                experiences for brands, businesses and personal portfolios.
              </p>

              <p>
                I specialize in responsive web development, portfolio websites,
                landing pages, business platforms and custom digital
                experiences using modern technologies and frameworks.
              </p>

              <div
                id="skills"
                className="flex flex-wrap gap-4 pt-4"
              >
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-full border border-[#D4AF37]/20 bg-[#111111]/80 px-5 py-3 text-sm tracking-wide text-[#D4AF37]"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <p>
                My goal is to help businesses and individuals stand out with
                visually impressive websites that feel modern, fast and
                professional across all devices.
              </p>
            </div>

            <button className="rounded-full bg-[#D4AF37] px-8 py-4 font-medium text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition hover:bg-[#c19b2e]">
              Download CV
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-3xl border border-[#D4AF37]/10 bg-[#111111]/80 p-8 backdrop-blur-xl ${
                  index === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <h3 className="text-5xl font-black text-[#D4AF37]">
                  {item.number}
                </h3>
                <p className="mt-4 text-sm uppercase tracking-widest text-[#9f9f9f]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-white/5 px-6 py-24 lg:px-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              Services
            </p>

            <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Premium Digital Solutions.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="group rounded-[32px] border border-[#D4AF37]/10 bg-[#111111]/80 p-8 transition duration-300 hover:bg-[#D4AF37]/10"
              >
                <div className="mb-8 h-[220px] overflow-hidden rounded-3xl border border-[#D4AF37]/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-[#9f9f9f]">
                  Modern and futuristic digital experiences with smooth
                  interactions and premium aesthetics.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-white/5 px-6 py-24 lg:px-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Projects
          </p>

          <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Modern Websites With Premium User Experiences.
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="overflow-hidden rounded-[32px] border border-[#D4AF37]/10 bg-[#111111]/80"
              >
                <div className="h-[260px] bg-[linear-gradient(135deg,#1a1a1a,#0d0d0d)]" />

                <div className="space-y-4 p-8">
                  <h3 className="text-2xl font-bold text-white">
                    Premium Portfolio {project}
                  </h3>

                  <p className="leading-relaxed text-[#9f9f9f]">
                    A cinematic modern website with premium UI interactions,
                    responsive layouts and luxury-inspired visual design.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/5 px-6 py-24 lg:px-20 lg:py-32"
      >
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Contact
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Let&apos;s Build Something Amazing.
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#9f9f9f]">
            Ready to create a premium futuristic website or portfolio? Let&apos;s
            work together.
          </p>

          <button className="rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-medium text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition hover:bg-[#c19b2e]">
            Start Project
          </button>
        </div>
      </section>

      <a
        href="https://wa.me/254700806728"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.45)] transition duration-300 hover:scale-110">
          <div className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-20 animate-ping" />

          <span className="relative z-10 text-2xl font-bold text-white">
            WA
          </span>
        </div>
      </a>
    </div>
  );
}
