"use client";

import Image from "next/image";
import { useState } from "react";
import { useFavoritesStore } from "@/lib/store/useFavoritesStore";

interface Workspace {
  id: number;
  name: string;
  location: string;
  rating: number;
  pricePerHour: number;
  image: string;
}

const workspaces: Workspace[] = [
  {
    id: 1,
    name: "سكاي سبيس",
    location: "العليا، الرياض",
    rating: 4.9,
    pricePerHour: 90,
    image: "/images/workspace1.png",
  },
  {
    id: 2,
    name: "ذا ديستريكت",
    location: "حي الياسمين، الرياض",
    rating: 4.6,
    pricePerHour: 55,
    image: "/images/workspace2.png",
  },
  {
    id: 3,
    name: "سكون مساحة عمل",
    location: "طريق الملك، جدة",
    rating: 4.7,
    pricePerHour: 80,
    image: "/images/workspace1.png",
  },
  {
    id: 4,
    name: "ذا ورك هاوس",
    location: "الملقا، الرياض",
    rating: 4.8,
    pricePerHour: 75,
    image: "/images/workspace2.png",
  },
];

export default function FeaturedSpaces() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < workspaces.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-background-ivory">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-14">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-right space-y-1">
            <h2 className="text-2xl font-bold text-primary-charcoal">
              استكشف المساحات المميزة
            </h2>
            <p className="text-[13px] text-text-secondary">
              مساحات عمل مختارة لتناسب مختلف احتياجاتك.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleNext}
              disabled={currentIndex >= workspaces.length - 4}
              className="w-9 h-9 bg-white border border-border rounded-full flex items-center justify-center hover:bg-surface-beige transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="التالي"
            >
              <Image
                src="/images/chevron-left.svg"
                alt=""
                width={14}
                height={14}
              />
            </button>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-9 h-9 bg-white border border-border rounded-full flex items-center justify-center hover:bg-surface-beige transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="السابق"
            >
              <Image
                src="/images/chevron-right.svg"
                alt=""
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workspaces.slice(currentIndex, currentIndex + 4).map((workspace) => (
            <WorkspaceCard key={workspace.id} workspace={workspace} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const hydrated = useFavoritesStore((state) => state.hydrated);

  const isFavorite = hydrated && favorites.includes(workspace.id);

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-45 w-full overflow-hidden">
        <Image
          src={workspace.image}
          alt={workspace.name}
          fill
          className="object-cover"
        />
        <button
          onClick={() => toggleFavorite(workspace.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110"
          aria-label={isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}
        >
          <Image
            src={
              isFavorite
                ? "/images/heart-filled.svg"
                : "/images/heart-outline.svg"
            }
            alt=""
            width={16}
            height={16}
            className="transition-transform"
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2.5">
        {/* Title & Rating */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-medium text-primary-charcoal text-right flex-1 truncate">
            {workspace.name}
          </h3>
          <div className="flex items-center gap-0.75 shrink-0">
            <Image src="/images/star.svg" alt="" width={12} height={12} />
            <p className="text-xs font-bold text-primary-charcoal">
              {workspace.rating}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-end gap-1">
          <p className="text-xs text-text-secondary text-right">
            {workspace.location}
          </p>
          <Image src="/images/map-pin.svg" alt="" width={12} height={12} />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-0.75 text-right">
            <span className="text-xs font-bold text-primary-charcoal">ر.س</span>
            <span className="text-base font-medium text-primary-olive">
              {workspace.pricePerHour}
            </span>
            <span className="text-[11px] text-text-secondary">/ ساعة</span>
          </div>
          <button className="bg-primary-charcoal text-white text-xs px-3.5 py-1.5 rounded-lg hover:bg-primary-olive transition-colors">
            احجز الآن
          </button>
        </div>
      </div>
    </div>
  );
}
