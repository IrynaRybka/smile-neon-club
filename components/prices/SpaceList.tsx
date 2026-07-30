"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

const priceList = [
  { name: "Оренда SPACE (1 год)", price: "1400 грн" },
  { name: "Оренда SPACE (3 год)", price: "2420 грн" },
  { name: "VIP пакет SPACE", price: "3350 грн" },
  { name: "Аніматор (1 год, 1 герой)", price: "від 3500 грн" },
  { name: "Неонова дискотека з бульбашками 30хв", price: "580 грн" },
  { name: "Блиск тату", price: "530 грн/до 10 дітей" },
  { name: "Кольоровий пісок А4/А5", price: "1240 / 1140 грн/до 10 дітей" },
  { name: "Піньята", price: "від 700 грн" },
  { name: "Виготовлення бомбочок для ванни", price: "2600 грн/до 10 дітей" },
  { name: "Розпис футболок/рюкзаків/кепок", price: "3700 грн/до 10 дітей" },
  { name: "Розпис сумок", price: "3200 грн/до 10 дітей" },
  { name: "Ебру", price: "2700 грн/до 10 дітей" },
  { name: "Свічки гелеві фігурні", price: "3700 грн/до 10 дітей" },
  { name: "Свічки вощина по 2 шт", price: "2800 грн/до 10 дітей" },
  { name: "Таба лапки (пропозиція діє в теплий сезон)", price: "3200 грн/до 10 дітей" },
  { name: "Слайми", price: "2500 грн/до 10 дітей" },
  { name: "Парфуми", price: "3500 грн/до 10 дітей" },
  { name: "Морозиво з фетру", price: "2900 грн/до 10 дітей" },
  { name: "Чарівна паличка Гаррі Поттера", price: "2600 грн/до 10 дітей" },
  { name: "Миловаріння", price: "3500 грн/до 10 дітей" },
  { name: "Під ваш запит організуємо інший майстер-клас", price: "Вартість по запиту" },
];

export default function SpaceList() {
  return (
    <section className="py-8 md:py-12 pb-20">
      <h2 className="text-center text-xl md:text-2xl font-bold tracking-wider text-[#a476ff] uppercase mb-8">
        КІМНАТА SPACE ТА РОЗВАГИ
      </h2>
      
      {/* Список цін */}
      <div className="max-w-4xl mx-auto bg-black/20 rounded-2xl p-4 md:p-6 border border-white/5">
        <div className="divide-y divide-white/10">
          {priceList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3.5 gap-1 sm:gap-4 text-xs md:text-sm transition hover:bg-white/5 px-2 rounded-lg"
            >
              <span className="text-slate-200 font-medium">{item.name}</span>
              <span className="text-white font-bold whitespace-nowrap self-end sm:self-auto">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопка внизу сторінки */}
      <div className="mt-12 text-center">
        <Link
          href="tel:+380677192552"
          className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:brightness-110 transition active:scale-98"
        >
          <Phone size={18} />
          +38 (067) 719-25-52
        </Link>
      </div>
    </section>
  );
}