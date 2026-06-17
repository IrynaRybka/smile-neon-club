"use client";

import { Gamepad2, Car, Trophy, Disc } from "lucide-react";

const games = [
  {
    title: "VR Oculus Quest 2/3",
    icon: <Gamepad2 className="text-cyan-400 w-8 h-8" />,
    prices: [
      { time: "20 хв", value: "150 грн" },
      { time: "60 хв", value: "300 грн" },
    ],
  },
  {
    title: "Автосимулятор",
    icon: <Car className="text-cyan-400 w-8 h-8" />,
    prices: [
      { time: "20 хв", value: "150 грн" },
      { time: "60 хв", value: "350 грн" },
    ],
  },
  {
    title: "PS 5 / Xbox",
    icon: <Trophy className="text-cyan-400 w-8 h-8" />,
    prices: [{ time: "60 хв / 1 геймпад", value: "150 грн" }],
  },
  {
    title: "Аерохокей",
    icon: <Disc className="text-cyan-400 w-8 h-8" />,
    prices: [{ time: "30 хв", value: "110 грн" }],
  },
];

export default function GameSection() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-center text-xl md:text-2xl font-bold tracking-wider text-[#a476ff] uppercase mb-8">
        ОБИРАЙ У ЩО ПОГРАТИ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {games.map((game, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border border-white/10 bg-[#161233]/50 backdrop-blur-md flex flex-col justify-between ${
              idx === 3 ? "md:col-span-1" : ""
            }`}
          >
            <div className="flex flex-col items-center text-center mb-6">
              <div className="mb-3">{game.icon}</div>
              <h3 className="text-base md:text-lg font-bold text-white tracking-wide">
                {game.title}
              </h3>
            </div>
            <div className="space-y-3">
              {game.prices.map((p, i) => (
                <div key={i} className="flex justify-between items-center text-xs md:text-sm border-t border-white/5 pt-2 first:border-0 first:pt-0">
                  <span className="text-slate-400">{p.time}</span>
                  <span className="font-bold text-white">{p.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}