import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/ui/accordion/accordion";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { LuCircleCheck, LuSofa, LuStar } from "react-icons/lu";
import { contactInfo } from "@/data/contact-info";

const usedFurnitureFeatures = [
  "أفضل الأسعار في السوق للمستعمل وشراء الأثاث المستعمل",
  "خدمة سريعة في نفس اليوم - نصل إليك خلال ساعات",
  "فريق محترف مدرب على تقييم الأثاث بدقة",
  "نشتري جميع أنواع الأثاث بأي حالة كانت",
  "خدمة فك وتركيب ونقل احترافية ومجانية",
  "دفع نقدي فوري عند الاستلام",
  "نخدم جميع أحياء الرياض والمناطق المجاورة",
  "تقييم عادل وشفاف للأثاث",
];

const usedFurnitureTypes = [
  "غرف نوم مستعملة - مفارش أطفال وشباب",
  "صالونات وكنب مستعمل بجميع الأحجام",
  "طاولات طعام وكراسي",
  "مجالس عربية وحديثة",
  "خزائن ودواليب ملابس",
  "مكاتب وطاولات مكتبية",
  "مكتبات وأرفف",
  "تسريحات وكومودينات",
  "ستائر ومفروشات",
  "سجاد وموكيت",
  "أثاث حدائق ومجالس خارجية",
  "أثاث مكتبي وشركات",
];

const usedFurniturePurchaseSteps = [
  {
    number: 1,
    title: "اتصل بنا",
    description: "تواصل معنا عبر الهاتف أو واتساب أو املأ النموذج للتواصل",
  },
  {
    number: 2,
    title: "أرسل الصور",
    description: "أرسل صور الأثاث المراد بيعه نقوم بالتقييم الأولي",
  },
  {
    number: 3,
    title: "المعاينة والتقييم",
    description: "يزورك فريقنا للمعاينة المجانية وتقديم أفضل سعر",
  },
  {
    number: 4,
    title: "الاستلام والدفع",
    description: "نستلم الأثاث ونقوم بالدفع نقداً في نفس الوقت",
  },
];

const usedFurnitureFAQ = [
  {
    question: "هل تشترون الأثاث القديم أو المكسور؟",
    answer:
      "نعم، نشتري جميع أنواع الأثاث بمختلف حالاته سواء جديد أو قديم أو مستعمل. نقوم بتقييم كل قطعة بشكل منفصل وتقديم سعر عادل.",
  },
  {
    question: "كيف يتم تحديد السعر؟",
    answer:
      "يتم تحديد السعر بناءً على حالة الأثاث، نوعه، عمره، والطلب عليه في السوق. نضمن تقديم أفضل الأسعار مقارنة بالمنافسين.",
  },
  {
    question: "هل تقدمون خدمة النقل؟",
    answer:
      "نعم، نقدم خدمة فك ونقل الأثاث بشكل مجاني مع الشراء. فريقنا مدرب ولديه معدات حديثة للتعامل مع جميع أنواع الأثاث.",
  },
  {
    question: "ما هو وقت الاستلام؟",
    answer:
      "نوفر خدمة الاستلام في نفس اليوم في معظم الأحيان. بعد الاتفاق على السعر، نحدد موعد مناسب لكم.",
  },
  {
    question: "هل تشترون الأثاث بالجملة؟",
    answer:
      "نعم، نشتري الأثاث بالقطعة أو بالجملة. إذا كنت ترغب في بيع أثاث منزل كامل، نوفر لك أفضل عرض شامل.",
  },
];

export default function UsedFurnitureService() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[360px] items-center overflow-hidden pt-24 text-white"
        dir="rtl"
      >
        <Image
          src="/imgs/service-furniture.jpg"
          alt="شراء الاثاث المستعمل بالرياض"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#b95d25]/70" />

        <div className="container py-10 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#ff7a12] text-white shadow-lg shadow-black/15">
              <LuSofa aria-hidden="true" size={28} />
            </div>

            <h1 className="mt-7 text-2xl font-extrabold leading-tight sm:text-3xl">
              شراء الاثاث المستعمل بالرياض
            </h1>

            <p className="mt-5 max-w-3xl text-base font-bold leading-8 sm:text-xl">
              نشتري جميع أنواع الاثاث المستعمل بأفضل الأسعار في الرياض - غرف
              نوم، صالونات، مجالس، طاولات وجميع قطع الاثاث المنزلي والمكتبي
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
              لماذا نحن الخيار الأفضل لبيع الأثاث المستعمل؟
            </h2>
            <p className="mt-3 text-sm font-medium text-[#7a8491] sm:text-base">
              مميزات حصرية تجعلنا الخيار الأول في الرياض
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {usedFurnitureFeatures.map((feature) => (
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

      <section className="bg-[#fffdf2] py-16 sm:py-20" dir="rtl">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold leading-tight text-[#2f2f2f] sm:text-3xl">
              أنواع الأثاث المستعمل الذي نشتريه
            </h2>
            <p className="mt-3 text-sm font-medium text-[#7a8491] sm:text-base">
              نشتري جميع أنواع الأثاث المنزلي والمكتبي بأفضل الأسعار
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usedFurnitureTypes.map((type) => (
              <article
                key={type}
                className="flex min-h-16 items-center gap-4 rounded-xl border border-[#f0eee6] bg-white px-4 py-3 text-right shadow-[0_8px_18px_rgba(0,0,0,0.12)]"
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
              كيف نشتري اثاثك المستعمل؟
            </h2>
            <p className="mt-3 text-sm font-semibold text-white/90 sm:text-base">
              عملية بسيطة وسريعة في 4 خطوات فقط
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {usedFurniturePurchaseSteps.map((step) => (
              <article
                key={step.number}
                className="flex min-h-[156px] flex-col items-center rounded-lg border border-white/15 bg-white/10 px-6 py-5 text-center shadow-[0_14px_28px_rgba(199,69,0,0.08)] backdrop-blur-[1px]"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-lg font-extrabold leading-none text-[#ff6a14] shadow-[0_8px_18px_rgba(214,74,0,0.12)]">
                  {step.number}
                </span>
                <h3 className="mt-6 text-lg font-extrabold leading-tight">
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
              الأسئلة الشائعة حول شراء الأثاث المستعمل
            </h2>
            <p className="mt-3 text-sm font-medium text-[#7a8491] sm:text-base">
              إجابات شاملة على جميع استفساراتك
            </p>
          </div>

          <Accordion
            items={usedFurnitureFAQ}
            defaultOpenIndex={null}
            className="mx-auto mt-10 max-w-[680px]"
          />
        </div>
      </section>

      <section className="bg-[#202020] py-14 text-white sm:py-16" dir="rtl">
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              جاهز لبيع الأثاث المستعمل؟
            </h2>

            <p className="mt-4 text-sm font-semibold leading-7 text-white/80 sm:text-base">
              تواصل معنا الآن واحصل على أفضل سعر فوري لأثاثك المستعمل في الرياض
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
