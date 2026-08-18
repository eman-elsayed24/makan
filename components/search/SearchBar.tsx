"use client";

import { MapPin, Calendar, Check } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full bg-surface-beige rounded-xl lg:rounded-2xl p-4 lg:px-5 lg:py-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="flex-1 bg-white rounded-lg px-3 py-2.5 flex items-center gap-2">
          <MapPin size={18} className="text-text-secondary shrink-0" />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[10px] text-text-secondary leading-tight">
              الموقع
            </span>
            <span className="text-sm text-primary-charcoal leading-tight truncate">
              مثال: الرياض
            </span>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg px-3 py-2.5 flex items-center gap-2">
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[10px] text-text-secondary leading-tight">
              نوع المساحة
            </span>
            <span className="text-sm text-primary-charcoal leading-tight truncate">
              مكتب خاص
            </span>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg px-3 py-2.5 flex items-center gap-2">
          <Calendar size={18} className="text-text-secondary shrink-0" />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[10px] text-text-secondary leading-tight">
              التاريخ
            </span>
            <span className="text-sm text-primary-charcoal leading-tight truncate">
              اختر التاريخ
            </span>
          </div>
        </div>

        <button className="bg-primary-olive text-white px-6 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
          بحث
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2 text-text-secondary">
        <Check size={14} className="text-primary-olive shrink-0" />
        <span className="text-xs truncate">
          الرياض، المملكة العربية السعودية
        </span>
      </div>
    </div>
  );
}
