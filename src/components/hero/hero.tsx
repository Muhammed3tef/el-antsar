import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { contactInfo } from "@/data/contact-info";
import { heroFeatures } from "@/data/hero";

type HeroProps = {
  title?: string;
  description?: string;
  features?: string[];
  backgroundImage?: string;
  className?: string;
};

const Hero = ({
  title = "شراء الاثاث المستعمل بالرياض",
  description = "نشتري جميع أنواع الاثاث والمكيفات والمطابخ والمجالس ومعدات المطاعم المستعملة بأفضل الأسعار في الرياض",
  features = heroFeatures,
  backgroundImage = "/imgs/hero.jpg",
  className = "",
}: HeroProps) => {
  return (
    <section
      className={`relative isolate flex min-h-[calc(100svh-76px)] items-center overflow-hidden pt-24 text-white sm:min-h-[640px] lg:min-h-[620px] ${className}`}
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(30,30,30,0.72)_0%,rgba(249,115,22,0.3)_100%),linear-gradient(90deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.25)_100%)]" />

      <div className="container py-16 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[32px]">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-9 sm:text-2xl lg:text-2xl">
            {description}
          </p>

          <div className="mt-5 flex w-full max-w-[560px] flex-col-reverse items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href={contactInfo.phoneLink}
              className="inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl bg-[#f97316] px-6 text-base font-bold shadow-lg shadow-black/20 transition hover:bg-[#e06600] sm:min-w-[284px] sm:text-lg"
            >
              <IoCallOutline size={24} />
              <span>اتصل الآن: {contactInfo.phone}</span>
            </Link>

            <Link
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl bg-[#34c759] px-6 text-base font-bold shadow-lg shadow-black/20 transition hover:bg-[#25b64c] sm:min-w-[244px] sm:text-lg"
            >
              <FaWhatsapp size={24} />
              <span>تواصل عبر واتساب</span>
            </Link>
          </div>

          <div className="mt-10 grid w-full max-w-4xl gap-3 sm:grid-cols-3 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur-sm sm:text-base"
              >
                <span>✓ {feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
