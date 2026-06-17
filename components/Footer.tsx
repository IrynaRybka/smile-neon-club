// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-white">
        Обухів, мкр. Сосновий 2, оф 30/1, 1 поверх
        <span className="mx-3">|</span>
        <a
          href="tel:+380677192552"
          className="hover:text-fuchsia-400 transition-colors"
        >
          +380 67 719 2552
        </a>
      </div>
    </footer>
  );
}