"use client";

import { Dices, Sparkles, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: <Gamepad2 className="text-cyan-400 w-8 h-8 md:w-10 md:h-10" />,
    title: "Сучасні VR Технології",
    desc: "Шоломи покоління Oculus Quest 2/3. Повне занурення у віртуальні світи без дротів.",
  },
  {
    icon: <Sparkles className="text-cyan-400 w-8 h-8 md:w-10 md:h-10" />,
    title: "Анімації та Майстер-Класи",
    desc: "Від неонової дискотеки з бульбашками до розпису футболок. Організуємо розваги під ключ.",
  },
  {
    icon: <Dices className="text-cyan-400 w-8 h-8 md:w-10 md:h-10" />,
    title: "Все в одному місці",
    desc: "Автосимулятори, PS5, Xbox, лазерний лабіринт та шутер Nerf. Сумувати не доведеться нікому!",
  },
];

export default function Features() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-xl md:text-2xl font-bold tracking-wider text-[#a476ff] uppercase mb-8">
          ЧОМУ ОБИРАЮТЬ САМЕ НАС
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-[#1f0025]/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all hover:border-fuchsia-500/30"
            >
              <div className="mb-4 p-3 bg-black/30 rounded-full border border-white/5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}