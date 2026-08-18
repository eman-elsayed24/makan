import SearchBar from "@/components/search/SearchBar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-[68px] bg-background-ivory">
      <div className="max-w-[1440px] mx-auto px-20 py-20">
        <div className="grid grid-cols-[6fr_5fr] gap-12 items-center">
          <div className="order-2">
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="MAKAN workspace"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="order-1">
            <div className="space-y-3">
              <h1 className="text-[48px] font-[800] leading-[1.2] text-primary-charcoal">
                مساحتك الملهمة تبدأ من هنا
              </h1>

              <p className="text-[18px] leading-[1.65] text-text-secondary">
                اكتشف مساحات عمل مريحة ومرنة في أفضل المواقع، واحجز مكانك
                بسهولة.
              </p>
            </div>

            <div className="mt-6">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}