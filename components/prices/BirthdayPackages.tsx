"use client";

import Link from "next/link";
import { Sparkles, Check, PartyPopper, Phone } from "lucide-react";

const birthdayPackages = [
  {
    title: "Мінімальний",
    duration: "2 години",
    price: "4 600 грн",
    popular: false,
    features: [
      "Клуб зачиняється під вашу компанію",
      "Все що є у VR зоні",
      "Все що є у SPACE зоні",
      "Доступ до всіх консолей та ігор",
    ],
  },
  {
    title: "Стандарт",
    duration: "3 години",
    price: "6500 грн",
    popular: true,
    features: [
      "Клуб зачиняється під вашу компанію",
      "Все що є у VR зоні",
      "Все що є у SPACE зоні",
      "Доступ до всіх консолей та ігор",
      "Оптимальний час для свята та частувань",
    ],
  },
  {
    title: "Тусовочний",
    duration: "4 години",
    price: "7900 грн",
    popular: false,
    features: [
      "Клуб зачиняється під вашу компанію",
      "Все що є у VR зоні",
      "Все що є у SPACE зоні",
      "Доступ до всіх консолей та ігор",
      "Максимум часу для насиченої програми",
    ],
  },
];

export default function BirthdayPackages() {
  return (
    <section className="py-8 md:py-12">
      {/* Заголовок секції */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <PartyPopper size={14} />
          Весь клуб під День Народження
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-wider text-[#a476ff] uppercase">
          ПАКЕТНІ ПРОПОЗИЦІЇ
        </h2>
        <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-lg mx-auto">
          Оренда всього простору без сторонніх гостей — тільки Ви та Ваша компанія!
        </p>
      </div>

      {/* Сітка 3 тарифів */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {birthdayPackages.map((pkg, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
              pkg.popular
                ? "bg-[#1b0a26]/90 border-2 border-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,0.25)] md:-translate-y-2"
                : "bg-[#161233]/50 border border-white/10 backdrop-blur-md hover:border-white/20"
            }`}
          >
            {/* Лейбл "Популярний" */}
            {pkg.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-full tracking-widest shadow-md flex items-center gap-1">
                <Sparkles size={12} />
                Найпопулярніший
              </div>
            )}

            <div>
              {/* Назва та час */}
              <div className="text-center border-b border-white/10 pb-6 mb-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {pkg.title}
                </h3>
                <span className="inline-block text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                  {pkg.duration}
                </span>

                {/* Ціна */}
                <div className="mt-4">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Список переваг */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-slate-300">
                    <span className="p-0.5 rounded-full bg-cyan-400/20 text-cyan-400 shrink-0 mt-0.5">
                      <Check size={12} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

         
            <Link
              href="tel:+380677192552"
              className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs md:text-sm transition-all active:scale-98 ${
                pkg.popular
                  ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:brightness-110"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}
            >
              <Phone size={14} />
              Забронювати
            </Link>
          </div>
        ))}
        
      </div>
      <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            * В кожен пакет можна додати додаткові послуги. Для уточнення, будь ласка, зв'яжіться з нами за телефоном.
        </p>
    </section>
  );
}