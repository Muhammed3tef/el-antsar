import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/ui/accordion/accordion";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { LuCircleCheck, LuStar, LuWind } from "react-icons/lu";
import { contactInfo } from "@/data/contact-info";

const usedAcFeatures = [
  "أفضل الأسعار لشراء المكيفات المستعملة في الرياض",
  "شراء جميع أنواع المكيفات - سبليت، شباك، مركزي، كاست",
  "خدمة فك وتركيب احترافية للمكيفات",
  "فريق فني متخصص في المكيفات",
  "دفع نقدي فوري",
  "خدمة سريعة في نفس اليوم",
  "نشتري المكيفات بأي حالة",
  "تقييم فني دقيق",
];

const usedAcTypes = [
  "مكيفات سبليت مستعملة - جميع الماركات",
  "مكيفات شباك بجميع الأحجام",
  "مكيفات مركزية للمباني والشركات",
  "مكيفات دكت سبليت وكونسيلد",
  "مكيفات صحراوية",
  "مكيفات متنقلة",
  "مكيفات - LG - Samsung - Gree - Carrier",
  "وحدات تكييف خارجية وداخلية",
];

const usedAcPurchaseSteps = [
  {
    number: 1,
    title: "اتصل بنا",
    description: "تواصل معنا وأخبرنا عن نوع وعدد المكيفات",
  },
  {
    number: 2,
    title: "المعاينة الفنية",
    description: "فريقنا الفني يزورك لفحص المكيفات",
  },
  {
    number: 3,
    title: "عرض السعر",
    description: "نقدم أفضل سعر فوري حسب الحالة",
  },
  {
    number: 4,
    title: "الفك والاستلام",
    description: "نفك المكيفات ونستلمها ونسلمك المبلغ",
  },
];

const usedAcFAQ = [
  {
    question: "هل تشترون المكيفات المعطلة؟",
    answer:
      "نعم، نشتري المكيفات بجميع حالاتها سواء كانت تعمل أو معطلة. السعر يتحدد حسب الحالة والنوع.",
  },
  {
    question: "كيف يتم تقييم سعر المكيف؟",
    answer:
      "نقوم بتقييم المكيف بناءً على النوع، الماركة، العمر، الحالة، والسعة (بالوحدة). نضمن تقديم أفضل سعر في السوق.",
  },
  {
    question: "هل تقدمون خدمة الفك والتنظيف؟",
    answer:
      "نعم، لدينا فريق فني متخصص في فك المكيفات بطريقة احترافية مع المحافظة على سلامة الوحدة.",
  },
  {
    question: "متى يتم الاستلام والدفع؟",
    answer:
      "نوفر خدمة الاستلام في نفس اليوم. الدفع يتم نقداً فوراً بعد الفك والاستلام.",
  },
];

export default function UsedAcService() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[360px] items-center overflow-hidden pt-24 text-white"
        dir="rtl"
      >
        <Image
          src="/imgs/service-ac.jpg"
          alt="شراء المكيفات المستعملة بالرياض"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#8a5a38]/70" />

        <div className="container py-10 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#ff7a12] text-white shadow-lg shadow-black/15">
              <LuWind aria-hidden="true" size={28} />
            </div>

            <h1 className="mt-7 text-2xl font-extrabold leading-tight sm:text-3xl">
              شراء المكيفات المستعملة بالرياض
            </h1>

            <p className="mt-5 max-w-3xl text-base font-bold leading-8 sm:text-xl">
              نشتري جميع أنواع المكيفات المستعملة بأعلى الأسعار - سبليت، شباك،
              مركزي، كاسات - مع خدمة الفك والمعاينة المجانية
            </p>

            <div className="mt-5 flex w-full max-w-[430px] flex-col-reverse items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href={contactInfo.phoneLink}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-6 text-sm font-extrabold text-[#ff7a12] shadow-lg shadow-black/15 transition hover:bg-orange-50 sm:min-w-[190px]"
              >
                <span>اتصل الآن: {contactInfo.phone}</span>
                <IoCallOutline size={20} />
              </Link>

              <Link
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#31c96a] px-6 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition hover:bg-[#25b95c] sm:min-w-[190px]"
              >
                <span>تواصل عبر واتساب</span>
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" dir="rtl">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold leading-tight text-[#2f2f2f] sm:text-3xl">
              لماذا نحن الأفضل في شراء المكيفات المستعملة؟
            </h2>
            <p className="mt-3 text-sm font-medium text-[#7a8491] sm:text-base">
              مميزات حصرية لخدمة شراء المكيفات في الرياض
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {usedAcFeatures.map((feature) => (
              <article
                key={feature}
                className="flex min-h-20 items-center gap-3 rounded-xl bg-[#fff8f4] px-5 py-4 text-right shadow-[0_8px_22px_rgba(249,115,22,0.05)]"
              >
                <LuCircleCheck
                  aria-hidden="true"
                  className="shrink-0 text-[#ff7a12]"
                  size={20}
                  strokeWidth={2.5}
                />
                <p className="text-sm font-semibold leading-6 text-[#4a403b]">
                  {feature}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-16 sm:py-20" dir="rtl">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold leading-tight text-[#2f2f2f] sm:text-3xl">
              أنواع المكيفات المستعملة التي نشتريها
            </h2>
            <p className="mt-3 text-sm font-medium text-[#7a8491] sm:text-base">
              نشتري جميع أنواع وماركات المكيفات بأفضل الأسعار
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usedAcTypes.map((type) => (
              <article
                key={type}
                className="flex min-h-16 items-center gap-4 rounded-xl bg-white px-4 py-3 text-right shadow-[0_8px_18px_rgba(0,0,0,0.12)]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#ff6a14] text-white">
                  <LuStar aria-hidden="true" size={17} strokeWidth={2.4} />
                </span>
                <p className="text-sm font-bold leading-6 text-[#4b4b4b]">
                  {type}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-linear-to-br from-[#ff7a12] via-[#fb6811] to-[#f45407] py-14 text-white sm:py-16"
        dir="rtl"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              خطوات شراء المكيفات المستعملة
            </h2>
            <p className="mt-3 text-sm font-semibold text-white/90 sm:text-base">
              عملية سهلة وسريعة في 4 خطوات
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {usedAcPurchaseSteps.map((step) => (
              <article
                key={step.number}
                className="flex min-h-[141px] flex-col items-center rounded-lg border border-white/15 bg-white/10 px-6 py-5 text-center shadow-[0_14px_28px_rgba(199,69,0,0.08)] backdrop-blur-[1px]"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-white text-base font-extrabold leading-none text-[#ff6a14] shadow-[0_8px_18px_rgba(214,74,0,0.12)]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-base font-extrabold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[150px] text-xs font-semibold leading-5 text-white/95">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" dir="rtl">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold leading-tight text-[#2f2f2f] sm:text-3xl">
              الأسئلة الشائعة حول شراء المكيفات
            </h2>
            <p className="mt-3 text-sm font-medium text-[#7a8491] sm:text-base">
              إجابات على استفساراتك
            </p>
          </div>

          <Accordion
            items={usedAcFAQ}
            defaultOpenIndex={null}
            variant="compact"
            className="mx-auto mt-10 max-w-[680px]"
          />
        </div>
      </section>

      <section className="bg-[#202020] py-14 text-white sm:py-16" dir="rtl">
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              هل تريد بيع مكيفاتك المستعملة؟
            </h2>

            <p className="mt-4 text-sm font-semibold leading-7 text-white/80 sm:text-base">
              تواصل معنا الآن واحصل على أفضل سعر فوري لمكيفاتك المستعملة
            </p>

            <div className="mt-5 flex w-full max-w-[430px] flex-col-reverse items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href={contactInfo.phoneLink}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-6 text-sm font-extrabold text-[#ff7a12] shadow-lg shadow-black/15 transition hover:bg-orange-50 sm:min-w-[170px]"
              >
                <span>اتصل الآن: {contactInfo.phone}</span>
                <IoCallOutline size={20} />
              </Link>

              <Link
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#31c96a] px-6 text-sm font-extrabold text-white shadow-lg shadow-black/15 transition hover:bg-[#25b95c] sm:min-w-[170px]"
              >
                <span>تواصل عبر واتساب</span>
                <FaWhatsapp size={20} />
              </Link>
            </div>

            <Link
              href="/"
              className="mt-7 text-xs font-extrabold text-[#df6205] transition hover:text-[#ff7a12]"
            >
              العودة للصفحة الرئيسية ←
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
