export default function CardSkeleton() {
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/40 p-8 shadow-2xl">
      <div className="absolute top-0 right-0 p-2 opacity-20">
        <div className="mb-1 h-[1px] w-8 bg-cyan-400" />
        <div className="ml-auto h-[1px] w-4 bg-fuchsia-400" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-1 border-b border-slate-800/50 pb-1">
          <div className="h-4 w-3/4 animate-pulse rounded bg-slate-800/40" />
        </div>
        <div className="mb-4 h-16 w-full animate-pulse rounded bg-slate-700/50 ring-1 ring-slate-600/20 ring-inset" />

        <div className="mt-auto">
          <div className="flex items-center justify-between pt-1">
            <div className="h-3 w-24 animate-pulse rounded bg-slate-700/40" />
            <div className="h-3 w-16 animate-pulse rounded bg-slate-700/40" />
          </div>

          <div className="mt-6 h-8 w-full overflow-hidden rounded border border-slate-600/40 bg-slate-900/40">
            <div className="h-full w-full -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes scan {
          0% { top: -5%; }
          100% { top: 105%; }
        }
      `,
        }}
      />
    </div>
  );
}
