import ContactForm from "@/components/contact/contact-form";
import ContactInfoCard from "@/components/contact/contact-info-card";
import {
  contactMethods,
  contactSectionContent,
} from "@/data/contact-page";

type ContactSectionProps = {
  infoTitle?: string;
  methods?: typeof contactMethods;
  className?: string;
};

export default function ContactSection({
  infoTitle = contactSectionContent.infoTitle,
  methods = contactMethods,
  className = "",
}: ContactSectionProps) {
  return (
    <section className={`bg-white py-16 sm:py-20 ${className}`}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <h2 className="text-2xl font-bold text-[#1e1e1e] sm:text-3xl">
              {infoTitle}
            </h2>

            <div className="mt-8 space-y-4">
              {methods.map((method) => (
                <ContactInfoCard key={method.id} method={method} />
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
