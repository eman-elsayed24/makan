"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-foreground mb-2">مكان</h1>
          </Link>
          <p className="text-muted-foreground text-sm">مرحباً بك مرة أخرى</p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-right">
            تسجيل الدخول
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                label="البريد الإلكتروني"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Input
                label="كلمة المرور"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <Link
                href="/forgot-password"
                className="text-primary hover:underline"
              >
                نسيت كلمة المرور؟
              </Link>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-muted-foreground">تذكرني</span>
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border accent-primary"
                />
              </label>
            </div>

            <Button type="submit" className="w-full" size="lg">
              تسجيل الدخول
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              ليس لديك حساب؟{" "}
              <Link
                href="/signup"
                className="text-primary font-semibold hover:underline"
              >
                سجل الآن
              </Link>
            </p>
          </div>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-4 text-muted-foreground">أو</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              <Image
                src="/images/google-icon.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="text-foreground font-medium">
                تسجيل الدخول باستخدام Google
              </span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              <Image
                src="/images/apple-icon.svg"
                alt="Apple"
                width={20}
                height={20}
              />
              <span className="text-foreground font-medium">
                تسجيل الدخول باستخدام Apple
              </span>
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          بالمتابعة، أنت توافق على{" "}
          <Link href="/terms" className="underline hover:text-foreground">
            الشروط والأحكام
          </Link>{" "}
          و
          <Link href="/privacy" className="underline hover:text-foreground">
            {" "}
            سياسة الخصوصية
          </Link>
        </p>
      </div>
    </div>
  );
}
