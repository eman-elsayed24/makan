"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("abdullah@example.sa");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-360 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="hidden lg:block relative lg:w-140 lg:h-170 shrink-0">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(111,118,88,0.3)] border-2 border-primary/10">
            <Image
              src="/images/login-decor.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-secondary/10 via-transparent to-secondary/40" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 text-right backdrop-blur-sm bg-secondary/20">
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white mb-2 sm:mb-3 drop-shadow-lg">
                انضم إلى مجتمع مكان
              </h2>
              <p className="text-sm sm:text-[15px] text-background leading-relaxed drop-shadow-md">
                بيئة العمل الأمثل لتعزيز إنتاجيتك وإبداعك اليومي في مختلف مناطق
                المملكة.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-card border border-border rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="mb-6 lg:mb-7">
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-foreground mb-2 text-right">
              تسجيل الدخول
            </h1>
            <p className="text-sm text-muted-foreground text-right">
              مرحباً بك مجدداً في منصة مكان
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs sm:text-[13px] font-bold text-foreground text-right">
                البريد الإلكتروني أو رقم الجوال
              </label>
              <div className="bg-background border border-border rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 flex items-center gap-3">
                <Image
                  src="/images/user-icon.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-foreground text-right outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs sm:text-[13px] font-bold text-foreground text-right">
                كلمة المرور
              </label>
              <div className="bg-card border-[1.5px] border-border rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs font-bold text-muted-foreground"
                >
                  إظهار
                </button>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-foreground text-right outline-none"
                />
              </div>
              {error && (
                <p className="text-xs text-destructive text-right">{error}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <Link
                href="/forgot-password"
                className="text-xs sm:text-[13px] font-medium text-primary hover:underline"
              >
                نسيت كلمة المرور؟
              </Link>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-xs sm:text-[13px] text-foreground">
                  تذكرني على هذا الجهاز
                </span>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4.5 h-4.5 rounded accent-primary"
                />
              </label>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-2">
              <Button type="submit" className="w-full" size="lg">
                تسجيل الدخول
              </Button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs sm:text-[13px] text-muted-foreground">
                  أو
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <button
                type="button"
                className="w-full bg-card border border-border rounded-xl py-3 text-sm font-bold text-foreground hover:bg-muted transition-colors"
              >
                تسجيل بواسطة Google
              </button>
            </div>
          </form>

          <div className="mt-6 sm:mt-7 text-center">
            <p className="text-sm text-muted-foreground">
              ليس لديك حساب؟{" "}
              <Link
                href="/signup"
                className="font-bold text-primary hover:underline"
              >
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
