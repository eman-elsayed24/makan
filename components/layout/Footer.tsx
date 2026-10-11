import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { label: "مساحات العمل المشترك", href: "#" },
    { label: "قاعات الاجتماعات", href: "#" },
    { label: "المكاتب الخاصة", href: "#" },
  ];

  const companyLinks = [
    { label: "من نحن", href: "#" },
    { label: "وظائف", href: "#" },
    { label: "المدونة", href: "#" },
  ];

  const helpLinks = [
    { label: "الأسئلة الشائعة", href: "#" },
    { label: "الدعم الفني", href: "#" },
    { label: "الشروط والأحكام", href: "#" },
  ];

  const socialLinks = [
    { icon: "/images/twitter.svg", href: "#", label: "Twitter" },
    { icon: "/images/instagram.svg", href: "#", label: "Instagram" },
    { icon: "/images/linkedin.svg", href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2 flex flex-col gap-4 items-start text-right">
            <div className="flex items-center gap-2">
              <div className="w-8.5 h-8.5 border border-muted-foreground rounded-[10px] flex items-center justify-center">
                <Image
                  src="/images/circle-x.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <div className="flex flex-col items-start gap-px">
                <h2 className="text-xl font-bold text-secondary-foreground">
                  مكان
                </h2>
                <p className="text-[9px] text-primary">MAKAN</p>
              </div>
            </div>
            <p className="text-[13px] leading-[1.7] text-secondary-foreground max-w-75">
              مكان هي المنصة الرائدة في المملكة العربية السعودية لحجز المساحات
              المشتركة والمكاتب الذكية التي تلهمك للإنتاج والعمل بمرونة تامة.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 items-start text-right">
            <h3 className="text-sm font-bold text-muted">روابط سريعة</h3>
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[13px] text-secondary-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5 items-start text-right">
            <h3 className="text-sm font-bold text-muted">الشركة</h3>
            {companyLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[13px] text-secondary-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5 items-start text-right">
            <h3 className="text-sm font-bold text-muted">مساعدة</h3>
            {helpLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[13px] text-secondary-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start mb-12">
          <h3 className="text-sm font-bold text-muted">حمل التطبيق</h3>
          <div className="flex gap-2">
            <div className="bg-card px-3.5 py-2 rounded-lg">
              <p className="text-xs text-foreground">Google Play</p>
            </div>
            <div className="bg-card px-3.5 py-2 rounded-lg">
              <p className="text-xs text-foreground">App Store</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-muted-foreground/30 mb-12" />

        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="hover:opacity-70 transition-opacity"
                aria-label={social.label}
              >
                <Image src={social.icon} alt="" width={20} height={20} />
              </Link>
            ))}
          </div>

          <p className="text-[13px] text-muted-foreground text-right">
            © 2026 مكان (MAKAN). صنع بكل حب في السعودية 🇸🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
