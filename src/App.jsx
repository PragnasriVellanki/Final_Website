import React from 'react'
import { Github, Linkedin, FileText, Rocket } from 'lucide-react'

// Placeholder so dev server runs. Paste your full artifact here if desired.
export default function App() {
  return (
    <main className="min-h-screen text-white bg-black">
      <section className="max-w-5xl mx-auto px-6 py-16 text-center space-y-6">
        <h1 className="text-2xl md:text-3xl">Data architect. AI builder. Research explorer.</h1>
        <p className="text-lg md:text-xl text-zinc-300">Where strategy meets innovation.</p>
        <p className="text-base md:text-lg text-zinc-400">Choose your journey.</p>

        <div className="mt-8 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border border-zinc-700">
            <img src="/images/profile.jpg" alt="Pragnasri" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <button className="rounded-2xl border border-zinc-700 p-5 text-left hover:border-zinc-300 transition">
            <div className="text-xl font-semibold">The Seeker</div>
            <div className="text-zinc-400">Recruiters & Wanderers</div>
          </button>
          <button className="rounded-2xl border border-zinc-700 p-5 text-left hover:border-zinc-300 transition">
            <div className="text-xl font-semibold">The Creator</div>
            <div className="text-zinc-400">Developers & Builders</div>
          </button>
          <button className="rounded-2xl border border-zinc-700 p-5 text-left hover:border-zinc-300 transition">
            <div className="text-xl font-semibold">The Guide</div>
            <div className="text-zinc-400">Collaborators & Mentors</div>
          </button>
          <button className="rounded-2xl border border-zinc-700 p-5 text-left hover:border-zinc-300 transition">
            <div className="text-xl font-semibold">The Strategist</div>
            <div className="text-zinc-400">Just Exploring</div>
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="https://linkedin.com/in/pragnasri-vellanki-6b10141a9" target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-3 border border-zinc-700 hover:border-zinc-400 transition inline-flex items-center gap-2">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-3 border border-zinc-700 hover:border-zinc-400 transition inline-flex items-center gap-2">
            <FileText className="w-5 h-5" /> Resume
          </a>
          <a href="https://devpost.com/pragnasri-vellanki" target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-3 border border-zinc-700 hover:border-zinc-400 transition inline-flex items-center gap-2">
            <Rocket className="w-5 h-5" /> Devpost
          </a>
          <a href="https://github.com/PragnasriVellanki" target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-3 border border-zinc-700 hover:border-zinc-400 transition inline-flex items-center gap-2">
            <Github className="w-5 h-5" /> GitHub
          </a>
        </div>
      </section>
    </main>
  )
}
