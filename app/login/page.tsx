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
    <div className="min-h-screen bg-background flex items-center justify-center px-20 py-16">
      <div className="w-full max-w-360 flex items-center gap-12">
        <div className="relative w-140 h-170 rounded-3xl overflow-hidden shrink-0">
          <Image
            src="/images/login-decor.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/20" />
          <div className="absolute bottom-0 left-0 right-0 p-10 text-right">
            <h2 className="text-[28px] font-extrabold text-white mb-3">
              انضم إلى مجتمع مكان
            </h2>
            <p className="text-[15px] text-background leading-relaxed">
              بيئة العمل الأمثل لتعزيز إنتاجيتك وإبداعك اليومي في مختلف مناطق
              المملكة.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-card border border-border rounded-3xl p-10">
          <div className="mb-7">
            <h1 className="text-[32px] font-extrabold text-foreground mb-2 text-right">
              تسجيل الدخول
            </h1>
            <p className="text-sm text-muted-foreground text-right">
              مرحباً بك مجدداً في منصة مكان
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-[13px] font-bold text-foreground text-right">
                البريد الإلكتروني أو رقم الجوال
              </label>
              <div className="bg-background border border-border rounded-xl px-4 py-3.5 flex items-center gap-3">
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
              <label className="block text-[13px] font-bold text-foreground text-right">
                كلمة المرور
              </label>
              <div className="bg-card border-[1.5px] border-border rounded-xl px-4 py-3.5 flex items-center gap-3">
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

            <div className="flex items-center justify-between">
              <Link
                href="/forgot-password"
                className="text-[13px] font-medium text-primary hover:underline"
              >
                نسيت كلمة المرور؟
              </Link>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-[13px] text-foreground">
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

            <div className="space-y-4 pt-2">
              <Button type="submit" className="w-full" size="lg">
                تسجيل الدخول
              </Button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-[13px] text-muted-foreground">أو</span>
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

          <div className="mt-7 text-center">
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
