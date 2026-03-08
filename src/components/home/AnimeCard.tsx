'use client';

import React from 'react';
import { Anime } from '@/services/animeService';

interface AnimeCardProps {
  anime: Anime;
  index: number;
}

const glowColors = [
  'shadow-[0_0_20px_rgba(34,211,238,0.8)]', // Cyan
  'shadow-[0_0_20px_rgba(244,63,94,0.8)]', // Red
  'shadow-[0_0_20px_rgba(168,85,247,0.8)]', // Purple
];

export default function AnimeCard({ anime, index }: AnimeCardProps) {
  return (
    <div
      className={`group relative h-full cursor-pointer overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/40 p-8 transition-all hover:-translate-y-2 ${glowColors[index % glowColors.length]} box-border`}
    >
      <div className="absolute top-0 right-0 p-2 opacity-20 transition-opacity group-hover:opacity-100">
        <div className="mb-1 h-[1px] w-8 bg-cyan-400" />
        <div className="ml-auto h-[1px] w-4 bg-fuchsia-400" />
      </div>

      <div className="flex h-full flex-col">
        <div className="mb-1 border-b border-slate-800/50 pb-1">
          <h3 className="line-clamp-1 overflow-hidden text-xs font-medium tracking-wide text-slate-500 italic transition-colors group-hover:text-slate-300">
            {anime.english_name}
          </h3>
        </div>
        <h2 className="mb-4 line-clamp-2 h-16 overflow-hidden text-2xl leading-[2rem] font-bold transition-colors">
          {anime.japanes_name}
        </h2>

        <div className="mt-auto flex flex-col">
          <div className="flex h-4 items-center justify-between font-mono text-[10px] text-slate-500">
            <span className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${anime.videos_count === 0 ? 'bg-red-500' : 'animate-ping bg-green-500'}`}
              />
              {anime.videos_count === 0 ? 'STATUS: INACTIVE' : 'STATUS: ACTIVE'}
            </span>
            <span>{anime.videos_count} VIDEOS LOADED</span>
          </div>

          <button className="mt-6 h-8 w-full cursor-pointer border border-fuchsia-500 bg-transparent text-xs font-black tracking-widest text-fuchsia-500 transition-all duration-300 hover:bg-fuchsia-500 hover:text-white">
            INITIALIZE SYNC
          </button>
        </div>
      </div>
    </div>
  );
}
