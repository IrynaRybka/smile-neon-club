
import { MapPin, Clock, Phone, Camera } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Контакти | Smile Neon Club",
  description: "Ми знаходимось за адресою: м. Обухів, мікрорайон Сосновий 2. Працюємо щодня з 10:00 до 19:00. Телефон: +38 (067) 719-25-52.",
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#1e1b4b,_#000000)] text-white px-4 py-12 md:py-20 flex items-center">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Головна сітка */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center bg-[#161233]/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl">
          
        
          <div className="space-y-8">
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-widest text-[#a476ff] uppercase mb-2">
                ЧЕКАЄМО НА ВАС ЩОДНЯ 🥳
              </h1>
              <p className="text-xs md:text-sm text-slate-400">
                Завітайте до нас у гості або зв'яжіться для бронювання найкращого свята!
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ми знаходимось за адресою:</h3>
                  <p className="text-sm md:text-base text-slate-200 mt-0.5">
                    Київська область, м. Обухів, мікрорайон Сосновий 2, оф. 30/1 (-1 поверх)
                  </p>
                </div>
              </div>

              {/* Графік роботи */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Графік роботи:</h3>
                  <p className="text-sm md:text-base text-slate-200 mt-0.5">
                    Працюємо щодня з <span className="font-semibold text-white">10:00 до 19:00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Соціальні мережі та Телефон */}
            <div className="pt-4 space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/smile_neon_club/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs md:text-sm font-bold text-white border border-cyan-500/40 hover:bg-cyan-500/10 transition active:scale-98"
              >
                <Camera size={16} />
                Наш Instagram
              </Link>

              
              <Link
                href="tel:+380677192552"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:brightness-110 transition active:scale-98"
              >
                <Phone size={16} />
                +38 (067) 719-25-52
              </Link>
            </div>
          </div>

          
          <div className="w-full h-[280px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-inner relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.240902787597!2d30.642323880066822!3d50.126861512926446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d497e4c89f7dcf%3A0x5db5d065d295fc7e!2sSmile%20Neon%20Club!5e1!3m2!1suk!2sua!4v1781697935383!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] invert-[90%] hue-rotate-[180deg] contrast-[100%]" 
            />
          </div>

        </div>
        
      </div>
    </div>
  );
}