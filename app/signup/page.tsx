"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("كلمة المرور غير متطابقة مع كلمة المرور المدخلة أعلاه.");
      return;
    }

    setPasswordError("");
    console.log({ fullName, emailOrPhone, password, agreeToTerms });
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordError("كلمة المرور غير متطابقة مع كلمة المرور المدخلة أعلاه.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-360 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="hidden lg:block relative lg:w-140 lg:h-195 shrink-0">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(111,118,88,0.3)]">
            <Image
              src="/images/login-decor.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-secondary/25" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 text-right">
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white mb-3 drop-shadow-lg">
                سجل عقارك ومساحتك معنا
              </h2>
              <p className="text-sm sm:text-[15px] text-background leading-relaxed drop-shadow-md">
                أو ابحث عن أفضل الأماكن الهادئة والمجهزة لتبدع وتعمل في مرونة
                تامة وبكل راحة.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-card border border-border rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-foreground mb-2 text-right">
              إنشاء حساب جديد
            </h1>
            <p className="text-sm text-muted-foreground text-right">
              ابدأ رحلتك معنا اليوم واحجز مساحتك المفضلة في دقائق
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs sm:text-[13px] font-bold text-foreground text-right">
                الاسم الكامل
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="أحمد بن فهد"
                className="w-full bg-background border border-border rounded-xl px-3 sm:px-4 py-3 text-sm text-foreground text-right outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs sm:text-[13px] font-bold text-foreground text-right">
                البريد الإلكتروني أو رقم الجوال
              </label>
              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="ahmad@example.sa"
                className="w-full bg-background border border-border rounded-xl px-3 sm:px-4 py-3 text-sm text-foreground text-right outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs sm:text-[13px] font-bold text-foreground text-right">
                كلمة المرور
              </label>
              <div className="bg-background border border-border rounded-xl px-3 sm:px-4 py-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  إظهار
                </button>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-foreground text-right outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs sm:text-[13px] font-bold text-foreground text-right">
                تأكيد كلمة المرور
              </label>
              <div
                className={`${passwordError ? "bg-card border-destructive border-[1.5px]" : "bg-card border border-border"} rounded-xl px-3 sm:px-4 py-3 flex items-center gap-3`}
              >
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  إظهار
                </button>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={handleConfirmPasswordBlur}
                  className="flex-1 bg-transparent text-sm text-foreground text-right outline-none"
                  required
                />
              </div>
              {passwordError && (
                <p className="text-xs text-destructive text-right">
                  {passwordError}
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-2.5">
              <div className="flex items-center gap-1 text-xs sm:text-[13px]">
                <Link
                  href="/terms"
                  className="font-bold text-primary hover:underline"
                >
                  الشروط والأحكام وسياسة الخصوصية
                </Link>
                <span className="text-foreground">أوافق على</span>
              </div>
              <button
                type="button"
                onClick={() => setAgreeToTerms(!agreeToTerms)}
                className={`w-4.5 h-4.5 rounded flex items-center justify-center transition-colors ${
                  agreeToTerms
                    ? "bg-primary"
                    : "bg-transparent border border-border"
                }`}
                aria-label="الموافقة على الشروط والأحكام"
              >
                {agreeToTerms && (
                  <span className="text-white text-[11px] font-bold">✓</span>
                )}
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-2">
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={!agreeToTerms}
              >
                إنشاء حساب
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
              لديك حساب بالفعل؟{" "}
              <Link
                href="/login"
                className="font-bold text-primary hover:underline"
              >
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
