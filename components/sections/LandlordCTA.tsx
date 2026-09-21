import Image from "next/image";
import Button from "@/components/ui/Button";

export default function LandlordCTA() {
  return (
    <section className="bg-secondary">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-14">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-100 h-65 relative rounded-2xl overflow-hidden shrink-0 order-2 lg:order-1">
            <Image
              src="/images/landlord-banner.png"
              alt="مساحة عمل"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col items-end text-right order-1 lg:order-2">
            <div className="space-y-2.5 mb-6">
              <h2 className="text-[28px] sm:text-[32px] font-bold text-muted leading-normal">
                هل لديك مساحة وتريد تأجيرها؟
              </h2>
              <p className="text-[15px] leading-[1.7] text-secondary-foreground">
                انضم إلى منصة مكان وسجل عقارك أو مساحتك الشاغرة لتبدأ في جني
                الأرباح واستقبال المهنيين السعوديين الطموحين اليوم.
              </p>
              <Button
                variant="secondary"
                className="px-8 py-3.5 text-sm font-bold"
              >
                سجل مساحتك الآن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
