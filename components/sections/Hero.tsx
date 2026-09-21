import SearchBar from "@/components/search/SearchBar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-17 bg-background-ivory">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-2">
            <div className="relative w-full h-70 sm:h-85 lg:h-95 rounded-2xl lg:rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="MAKAN workspace"
                fill
               
                className="object-cover"
                draggable="false"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.2] text-primary-charcoal">
                مساحتك الملهمة تبدأ من هنا
              </h1>

              <p className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.65] text-text-secondary">
                اكتشف مساحات عمل مريحة ومرنة في أفضل المواقع، واحجز مكانك
                بسهولة.
              </p>
            </div>

            <div className="mt-5 sm:mt-6">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
