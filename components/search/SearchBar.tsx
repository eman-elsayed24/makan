"use client";

import { MapPin, Calendar, Check } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full bg-muted rounded-xl lg:rounded-2xl p-4 lg:px-5 lg:py-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="flex-1 bg-card rounded-lg px-3 py-2.5 flex items-center gap-2">
          <MapPin size={18} className="text-muted-foreground shrink-0" />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[10px] text-muted-foreground leading-tight">
              الموقع
            </span>
            <span className="text-sm text-foreground leading-tight truncate">
              مثال: الرياض
            </span>
          </div>
        </div>

        <div className="flex-1 bg-card rounded-lg px-3 py-2.5 flex items-center gap-2">
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[10px] text-muted-foreground leading-tight">
              نوع المساحة
            </span>
            <span className="text-sm text-foreground leading-tight truncate">
              مكتب خاص
            </span>
          </div>
        </div>

        <div className="flex-1 bg-card rounded-lg px-3 py-2.5 flex items-center gap-2">
          <Calendar size={18} className="text-muted-foreground shrink-0" />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[10px] text-muted-foreground leading-tight">
              التاريخ
            </span>
            <span className="text-sm text-foreground leading-tight truncate">
              اختر التاريخ
            </span>
          </div>
        </div>

        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
          بحث
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2 text-muted-foreground">
        <Check size={14} className="text-primary shrink-0" />
        <span className="text-xs truncate">
          الرياض، المملكة العربية السعودية
        </span>
      </div>
    </div>
  );
}
