"use client";

import Link from "next/link";
import { FaViber } from "react-icons/fa";

export default function ViberWidget() {
  
  const phoneNumber = "+380934897260";

  return (
    <aside aria-label="Написати у Viber">
      <Link
        href={`viber://chat?number=${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Написати у Viber"
        aria-label="Написати у Viber"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#7360f2] hover:bg-[#5c47db] text-white rounded-full shadow-[0_4px_20px_rgba(115,96,242,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaViber size={28} />
      </Link>
    </aside>
  );
}