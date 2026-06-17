"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Головна" },
  { href: "/prices", label: "Послуги та ціни" },
  { href: "/services", label: "Поширені запитання" },
  { href: "/contacts", label: "Контакти" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-black border-b border-white/10">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Відкрити меню"
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Smile Neon Club"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="hidden md:block text-xl font-semibold text-white">
              Smile NEON club
            </span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}

          </nav>

        
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm md:hidden">
          <div className="h-full w-72 bg-black border-r border-white/10">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-white font-semibold">Меню</span>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 text-white border-b border-white/10 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}