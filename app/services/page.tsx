import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Поширені запитання | Smile Neon Club",
  description: "Відповіді на популярні запитання про святкування Днів народження, майстер-класи, аніматорів, їжу, VR та організацію свят у Smile Neon Club.",
};

const faqData = [
  {
    question: "Як у вас проходить Святкування Дня народження?",
    answer: "У нас Дні народження проходять драйвово та динамічно. Для маленьких гостей більше підійде ігрова кімната SPACE з іграшками, батутом та аерохокеєм. Святковий посуд та запрошення на свято входить у вартість. В ній проводиться святкова дискотека, анімації, майстер-класи. VR ідеально підійде гостям віком від 8 до 99 років. У нас 4 VR шоломи, автосимулятор, PS5 та Xbox. Зона з лазерним лабіринтом та місце де можна постріляти з Nerf.",
  },
  {
    question: "Як бути з їжею для гостей?",
    answer: "Це окрема кімната, де можна зручно розміститись. Ми раді коли гості замовляють те що їм подобається. Або приносять свої улюблені страви. Для наших гостей діє знижка на замовлення з ресторану \"ZEFIR\". Зазвичай на дитяче свято замовляють піцу, нагетси, фрукти, торт.",
  },
  {
    question: "Як святково оформити кімнату для святкування?",
    answer: "У нас в клубі вже все зроблено яскраво та продумано для святкування. Але якщо бажаєте можемо додатково прикрасити кульками (вартість прикрашання під ваш запит). Або можете прикрасити ви, ми не проти.",
  },
  {
    question: "За скільки часу приходити на свято?",
    answer: "Буде правильно, якщо Іменинник прийде на 10 хвилин раніше і буде зустрічати своїх гостей.",
  },
  {
    question: "Як бути з фото/відео на святі?",
    answer: "Зазвичай батьки і наші адміністратори знімають відео на телефон. Але якщо хочете можете запросити фотографа.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#1e1b4b,_#000000)] text-white px-4 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        
        {/* Заголовок сторінки */}
        <div className="flex flex-col items-center text-center mb-12">
          <HelpCircle className="text-[#a476ff] w-12 h-12 mb-3 animate-pulse" />
          <h1 className="text-2xl md:text-4xl font-black tracking-widest bg-gradient-to-r from-white via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent uppercase">
            Поширені запитання
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-2 max-w-md">
            Тут ми зібрали відповіді на найчастіші запитання наших гостей, щоб ваше свято пройшло ідеально!
          </p>
        </div>

        {/* Список запитань (Аккордеони) */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-white/10 bg-[#161233]/40 backdrop-blur-md rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden transition-all duration-300"
            >
              <summary className="flex justify-between items-center p-5 cursor-pointer select-none gap-4 hover:bg-white/5 transition">
                <h3 className="text-sm md:text-base font-bold text-slate-200 group-open:text-fuchsia-400 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              
              <div className="px-5 pb-5 pt-1 border-t border-white/5">
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </div>
  );
}