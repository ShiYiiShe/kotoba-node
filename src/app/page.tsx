import React, { Suspense } from 'react';

import { animeService } from '@/services/animeService';

import AnimeCard from '@/components/home/AnimeCard';
import CardSkeleton from '@/components/home/CardSkeleton';

async function AnimeList() {
  const data = await animeService.getAnimeList();

  return (
    <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
      {data.map((anime, index) => (
        <AnimeCard key={anime.id} anime={anime} index={index} />
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030712] p-6 py-14 text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Login */}
      <div className="fixed top-4 right-4 z-[100] flex items-center gap-4"></div>

      {/* CRT Scanline Effect */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* Header */}
      <div className="relative z-10 mb-16 text-center">
        <h1 className="mb-2 animate-pulse text-6xl font-black tracking-tighter italic md:text-8xl">
          <span className="inline-block bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 bg-clip-text px-6 pb-2 text-transparent drop-shadow-[0_0_15px_rgba(0,242,255,0.8)]">
            KOTOBA NODE
          </span>
        </h1>
        <p className="font-mono text-sm tracking-[0.3em] text-cyan-400 opacity-80 md:text-base">
          {'// DECODE_DIALOGUE_V.1.0'}
        </p>
      </div>

      {/* Slogan */}
      <div className="relative z-10 mb-20 max-w-2xl px-4 text-center">
        <p className="border-l-2 border-fuchsia-600 bg-fuchsia-500/5 px-4 py-2 leading-relaxed font-light text-slate-400">
          Decode Japanese dialogues into{' '}
          <span className="font-bold text-fuchsia-400">nodes </span>
          and parse real-world context into{' '}
          <span className="font-bold text-cyan-400">mastery</span>.
        </p>
      </div>

      {/* Cards */}
      <Suspense
        fallback={
          <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 gap-8 opacity-50 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <AnimeList />
      </Suspense>

      {/* Footer */}
      <footer className="relative z-10 mt-20 flex gap-8 font-mono text-[10px] text-slate-600">
        <span>LOC: TOKYO_NIGHT</span>
        <span>LINK: STABLE</span>
        <span className="font-bold text-fuchsia-900">SYSTEM_READY</span>
      </footer>
    </main>
  );
}
