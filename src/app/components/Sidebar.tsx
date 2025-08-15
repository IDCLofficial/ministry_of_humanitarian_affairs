"use client";
import NavLinks from "./NavLinks";
import { FiX } from "react-icons/fi";
import { createPortal } from "react-dom";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  if (!open) return null;
  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[9999]"
        onClick={onClose}
      />
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-64 max-w-[80vw] bg-[#232c39] z-[10000] shadow-lg flex flex-col p-6 animate-slide-in">
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          aria-label="Close navigation menu"
          onClick={onClose}
        >
          <FiX />
        </button>
        <nav className="mt-12 relative">
          <NavLinks mobile onClickLink={onClose} />
        </nav>
      </div>
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>,
    document.body
  );
};

export default Sidebar;