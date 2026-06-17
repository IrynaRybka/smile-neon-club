import Link from "next/link";
import { Phone, Camera } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-600/10 px-6 py-10 md:px-12 md:py-14 shadow-[0_10px_40px_rgba(168,85,247,0.15)]">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-fuchsia-300 bg-clip-text text-transparent">
              Космос Емоцій та
              <br />
              Неонового Драйву!
            </h1>

            <p className="mt-6 text-base md:text-xl text-slate-300 leading-relaxed">
              Сучасний розважальний простір для незабутнього відпочинку,
              драйвових ігор та найяскравіших Днів народжень, від яких діти
              в захваті!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="tel:+380677192552"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cyan-400 px-8 py-3 font-semibold text-white transition hover:bg-cyan-400 hover:text-black"
              >
                <Phone size={18} />
                Забронювати
              </Link>

              <Link
                href="https://www.instagram.com/smile_neon.club/"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cyan-400 px-8 py-3 font-semibold text-white transition hover:bg-cyan-400 hover:text-black"
              >
                <Camera size={18} />
                Наш Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}