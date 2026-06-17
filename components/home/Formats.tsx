"use client";

import Link from "next/link";
import { Phone, Wallet } from "lucide-react";

const formats = [
  {
    title: "Дні Народження",
    desc: 'Яскрава кімната "SPACE" для вашої компанії, професійні аніматори та наш фірмовий адмін, який бере весь контроль на себе!',
  },
  {
    title: "Крутий Вікенд",
    desc: "Приходь сам або з друзями щоб поїздити на автосимуляторах, зіграти в аерохокей або поринути у VR-квести.",
  },
  {
    title: "Батькам відпочинок",
    desc: "Наш адміністратор 80-го рівня повністю бере контроль над дітьми на себе — діти розважаються!",
  },
];

export default function Formats() {
  return (
    <section className="px-4 py-8 md:py-12 pb-16">
      <div className="mx-auto max-w-5xl">
        {/* Заголовок */}
        <h2 className="text-center text-xl md:text-2xl font-bold tracking-wider text-[#a476ff] uppercase mb-8">
          ІДЕАЛЬНИЙ ФОРМАТ ДЛЯ ПОДІЇ
        </h2>

        {/* Рамка з форматами (як на Google Sites) */}
        <div className="rounded-3xl border border-fuchsia-500/20 bg-[#24002b]/40 p-6 md:p-10 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {formats.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center px-2 md:border-r md:last:border-r-0 md:border-white/10"
              >
                <h3 className="text-base md:text-lg font-bold text-pink-500 mb-3 drop-shadow-[0_0_8px_rgba(236,72,153,0.2)]">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Секція: Маєш питання / Заклик до дії --- */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-slate-300 font-medium mb-6 px-4">
            Маєш запитання або хочеш індивідуальну програму? Дзвони нам прямо зараз!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            {/* Кнопка Дзвонити */}
            <Link
              href="tel:+380677192552"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:brightness-110 transition active:scale-98"
            >
              <Phone size={18} />
              +38 (067) 719-25-52
            </Link>

            {/* Кнопка Ціни */}
            <Link
              href="/prices"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-bold text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:brightness-110 transition active:scale-98"
            >
              <Wallet size={18} />
              Дивитись Ціни
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}