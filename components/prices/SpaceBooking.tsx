"use client";

export default function SpaceBooking() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-center text-xl md:text-2xl font-bold tracking-wider text-[#a476ff] uppercase mb-8">
        БРОНЮВАННЯ СВЯТКОВОГО SPACE ПРОСТОРУ
      </h2>
      <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/30 bg-[#1b0a26]/70 p-6 md:p-10 shadow-lg text-center">
        {/* Ціни */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/10 pb-6 mb-6">
          <div className="p-2">
            <span className="block text-2xl md:text-3xl font-black text-pink-500">1600 грн</span>
            <span className="text-xs text-slate-400">1 година </span>
          </div>
          <div className="p-2 border-y border-white/5 md:border-y-0 md:border-x md:border-white/10">
            <span className="block text-2xl md:text-3xl font-black text-pink-500">2850 грн</span>
            <span className="text-xs text-slate-400">3 години </span>
          </div>
          <div className="p-2">
            <span className="block text-2xl md:text-3xl font-black text-pink-500">3550 грн</span>
            <span className="text-xs text-slate-400">3 години вхід 15 дітей </span>
          </div>
        </div>

        {/* Опис */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 italic">
            (до 10 дітей, далі +150 грн за особу)
          </p>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
            До SPACE простору включено: <span className="text-cyan-400">Простора зала з проектором музичним та світловим супроводом, аерохокей, батут, іграшки, святково оформлений стіл з одноразовим набором посуду на 10 осіб, запрошення на день народження для 10 гостей</span>
          </p>
          <p className="text-xs text-slate-400">
            Адміністратор космічного рівня: розрулить хаос, створить затишок.
          </p>
        </div>
      </div>
    </section>
  );
}