"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react"; 

const galleryImages = [
  { id: 1, src: "/gallery/gallery_space.jpg", alt: "Неонова кімната для свята" },
  { id: 2, src: "/gallery/gallery_laser.jpg", alt: "Лазерний лабіринт" },
  { id: 3, src: "/gallery/gallery_quest.jpg", alt: "Гра в бездротовому VR шоломі" },
  { id: 4, src: "/gallery/gallery_nerf.jpg", alt: "Ігрова зона з консолями" },
];

export default function Gallery() {
  
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Заголовок секції */}
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wider text-[#a476ff] uppercase mb-8">
          ЗАЗИРНИ ДО НАС
        </h2>

        {/* Сітка зображень */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              onClick={() => setSelectedImg(img.src)} 
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority={img.id <= 2}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Модальне вікно (Lightbox) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedImg(null)} 
        >
          {/* Кнопка закриття */}
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
            aria-label="Закрити зображення"
          >
            <X size={28} />
          </button>

          {/* Контейнер для великого зображення */}
          <div 
            className="relative max-w-4xl w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={selectedImg}
              alt="Збільшене зображення"
              fill
              className="object-contain" 
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}