"use client";

import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/gallery/gallery_space.jpg", alt: "Неонова кімната для свята" },
  { id: 2, src: "/gallery/gallery_laser.jpg", alt: "Лазерний лабіринт" },
  { id: 3, src: "/gallery/gallery_quest.jpg", alt: "Гра в бездротовому VR шоломі" },
  { id: 4, src: "/gallery/gallery_nerf.jpg", alt: "Ігрова зона з консолями" },
];

export default function Gallery() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Заголовок секції */}
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wider text-[#a476ff] uppercase mb-8">
          ЗАЗИРНИ ДО НАС
        </h2>

        {/* Сітка зображень: 4 в ряд на ПК, 2 в ряд на мобільному */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
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
    </section>
  );
}