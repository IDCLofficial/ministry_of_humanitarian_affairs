"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ImageViewerProps {
  isOpen: boolean;
  src: string | null;
  alt?: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ isOpen, src, alt = "", onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // trigger enter animation on next frame
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => {
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf);
      setMounted(false);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        aria-label="Close image viewer"
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      <div
        className={`relative w-[90vw] h-[80vh] max-w-6xl transition-all duration-300 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" />
      </div>
    </div>
  );
};

export default ImageViewer;
