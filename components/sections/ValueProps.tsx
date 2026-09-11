"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

const valueCards: ValueCard[] = [
  {
    icon: "/images/map-pin.svg",
    title: "مواقع مميزة",
    description: "مساحات عمل في أفضل المواقع وبسهولة الوصول.",
  },
  {
    icon: "/images/zap-off.svg",
    title: "حجز سريع ومرن",
    description: "احجز مساحتك في دقائق وبالوقت الذي يناسبك.",
  },
  {
    icon: "/images/sun.svg",
    title: "مساحات متنوعة",
    description: "اختر من بين مساحات مصممة لتناسب احتياجاتك.",
  },
];

export default function ValueProps() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background-ivory">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-10 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white border border-border rounded-2xl p-5 flex items-center gap-3.5 transition-all duration-500 ease-out motion-reduce:transition-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6.25"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="bg-surface-beige rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
                <Image
                  src={card.icon}
                  alt=""
                  width={22}
                  height={22}
                  className={`w-5.5 h-5.5 transition-transform duration-500 ease-out motion-reduce:transition-none ${
                    isVisible ? "scale-100" : "scale-97"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                />
              </div>
              <div className="flex-1 text-right space-y-1">
                <h3 className="font-bold text-[15px] leading-normal text-primary-charcoal">
                  {card.title}
                </h3>
                <p className="font-normal text-[12px] leading-normal text-text-secondary">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
