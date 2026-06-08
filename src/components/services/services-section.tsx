import { homeServices } from "@/data/home-services";
import ServiceCard from "@/components/ui/cards/service-card";

type ServicesSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function ServicesSection({
  title = "خدماتنا",
  description = "نقدم مجموعة شاملة من خدمات شراء الأثاث والمعدات المستعملة في الرياض",
  className = "",
}: ServicesSectionProps) {
  return (
    <section className={`bg-white py-16 sm:py-20 ${className}`}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#1e1e1e]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#4a5565] sm:text-xl">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {homeServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              image={service.img}
              description={service.description}
              icon={service.icon}
              to={service.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
