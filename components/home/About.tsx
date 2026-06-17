"use client";

export default function About() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Заголовок секції */}
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wider text-[#a476ff] uppercase mb-6">
          ПРО НАШ ПРОСТІР
        </h2>

        {/* Головна картка */}
        <div className="rounded-3xl border border-fuchsia-500/30 bg-[#2d0035]/60 backdrop-blur-sm px-6 py-10 md:px-16 md:py-12 shadow-[0_0_30px_rgba(219,39,119,0.1)] relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[4px] before:bg-gradient-to-b before:from-cyan-400 before:to-fuchsia-500">
          
          <p className="text-center text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl mx-auto font-medium">
            <span className="font-bold text-white">Smile NEON CLUB</span> — це територія драйву в самому Обухові. 
            Ми створили атмосферне місце з унікальним неоновим дизайном, де ви та ваші діти можете повністю перезавантажитись та відпочити від буденності.
          </p>

          {/* Блок статистики / плашок */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Статистика 1 */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl md:text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                5000+
              </span>
              <span className="mt-2 text-xs md:text-sm font-semibold tracking-wide text-slate-400 uppercase">
                задоволених гостей
              </span>
            </div>

            {/* Статистика 2 */}
            <div className="flex flex-col items-center justify-center p-2 border-t border-b border-white/5 md:border-t-0 md:border-b-0 md:border-x md:border-white/10">
              <span className="text-3xl md:text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                100%
              </span>
              <span className="mt-2 text-xs md:text-sm font-semibold tracking-wide text-slate-400 uppercase">
                якість обладнання
              </span>
            </div>

            {/* Статистика 3 */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl md:text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                НЕОН
              </span>
              <span className="mt-2 text-xs md:text-sm font-semibold tracking-wide text-slate-400 uppercase">
                атмосфера
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}