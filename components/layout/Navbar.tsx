"use client";

import Button from "@/components/ui/Button";
import { UserCircle, Menu, Heart } from "lucide-react";
import Link from "next/link";
import { useFavoritesStore } from "@/lib/store/useFavoritesStore";

export default function Navbar() {
  const count = useFavoritesStore((state) => state.favorites.length);
  const hydrated = useFavoritesStore((state) => state.hydrated);

  const navLinks = [
    { label: "استكشف المساحات", href: "#explore" },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "عن مكان", href: "#about" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-17 bg-background border-b border-border">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-20 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          <div className="text-xl sm:text-2xl font-bold text-foreground">
            مكان
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="primary" className="hidden sm:inline-flex">
              احجز مساحة
            </Button>
            <Link
              href="/favorites"
              className="relative w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors"
              aria-label="المفضلة"
            >
              <Heart size={22} strokeWidth={1.5} />
              {hydrated && count > 0 && (
                <span className="absolute -top-1 -left-1 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors"
              aria-label="حساب المستخدم"
            >
              <UserCircle size={24} strokeWidth={1.5} />
            </button>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors"
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
