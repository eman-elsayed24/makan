"use client";

import Button from "@/components/ui/Button";
import { UserCircle, Menu } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { label: "استكشف المساحات", href: "#explore" },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "عن مكان", href: "#about" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-background-ivory border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          <div className="text-xl sm:text-2xl font-bold text-primary-charcoal">
            مكان
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-primary-charcoal hover:text-primary-olive transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="primary" className="hidden sm:inline-flex">
              احجز مساحة
            </Button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full text-primary-charcoal hover:bg-surface-beige transition-colors"
              aria-label="حساب المستخدم"
            >
              <UserCircle size={24} strokeWidth={1.5} />
            </button>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-primary-charcoal hover:bg-surface-beige transition-colors"
              aria-label="القائمة"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
