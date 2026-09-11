"use client";


import { Clock, Sparkles } from "lucide-react";

export default function HappyHours() {
  return (
    <div className="max-w-4xl mx-auto mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-fuchsia-900/20 to-purple-900/40 p-6 md:p-8 border border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.25)] text-center backdrop-blur-md"> 
        
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-3xl pointer-events-none" />
         <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(236,72,153,0.5)] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Спеціальна пропозиція
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 bg-clip-text text-transparent mb-4">
          Щасливі Години
        </h2>


         <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold">
            <span className="text-cyan-400">Пн – Чт</span> (Будні)
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold">
            <Clock className="w-4 h-4 text-cyan-400" />
            13:00 – 16:00
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-bold text-white mt-4">
          Приходьте грати вдвох —{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent underline decoration-cyan-400/50">
            платіть як за одного!
          </span>
        </p>
      </div>
  );
}