"use client";

import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { useFavoritesStore } from "@/lib/store/useFavoritesStore";
import { Heart } from "lucide-react";
import Link from "next/link";

// نفس الـ data (في المستقبل هتيجي من API)
const allWorkspaces = [
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

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite);
  const hydrated = useFavoritesStore((state) => state.hydrated);

  const favoriteWorkspaces = allWorkspaces.filter((w) =>
    favorites.includes(w.id),
  );

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-22 pb-20">
          <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-20">
            <div className="animate-pulse">
              <div className="h-10 bg-muted rounded w-64 mb-2"></div>
              <div className="h-4 bg-muted rounded w-48"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-22 pb-20">
        <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-20">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              مساحاتي المفضلة
            </h1>
            <p className="text-muted-foreground">
              {favoriteWorkspaces.length > 0
                ? `لديك ${favoriteWorkspaces.length} مساحة في المفضلة`
                : "لا توجد مساحات في المفضلة"}
            </p>
          </div>

          {favoriteWorkspaces.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                <Heart size={40} className="text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                لا توجد مساحات مفضلة
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                ابدأ في استكشاف المساحات وأضف المفضلة لديك لتجدها هنا بسهولة
              </p>
              <Link
                href="/"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                استكشف المساحات
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {favoriteWorkspaces.map((workspace) => (
                <WorkspaceCard
                  key={workspace.id}
                  workspace={workspace}
                  isFavorite={isFavorite(workspace.id)}
                  onToggleFavorite={() => toggleFavorite(workspace.id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

interface WorkspaceCardProps {
  workspace: (typeof allWorkspaces)[0];
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

function WorkspaceCard({
  workspace,
  isFavorite,
  onToggleFavorite,
}: WorkspaceCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
      <div className="relative h-45 w-full overflow-hidden">
        <Image
          src={workspace.image}
          alt={workspace.name}
          fill
          className="object-cover"
        />
        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-all hover:scale-110"
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

      <div className="p-4 flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-medium text-foreground text-right flex-1 truncate">
            {workspace.name}
          </h3>
          <div className="flex items-center gap-0.75 shrink-0">
            <Image src="/images/star.svg" alt="" width={12} height={12} />
            <p className="text-xs font-bold text-foreground">
              {workspace.rating}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-1">
          <p className="text-xs text-muted-foreground text-right">
            {workspace.location}
          </p>
          <Image src="/images/map-pin.svg" alt="" width={12} height={12} />
        </div>

        <div className="w-full h-px bg-border" />

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-0.75 text-right">
            <span className="text-xs font-bold text-foreground">ر.س</span>
            <span className="text-base font-medium text-primary">
              {workspace.pricePerHour}
            </span>
            <span className="text-[11px] text-muted-foreground">/ ساعة</span>
          </div>
          <button className="bg-secondary text-secondary-foreground text-xs px-3.5 py-1.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
            احجز الآن
          </button>
        </div>
      </div>
    </div>
  );
}
