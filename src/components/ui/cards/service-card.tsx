import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";

type Props = {
  title: string;
  image: StaticImageData | string;
  desc?: string;
  description?: string;
  icon?: IconType;
  to?: string;
};

export default function ServiceCard({
  title,
  image,
  desc,
  description,
  icon: Icon,
  to,
}: Props) {
  const cardDescription = description ?? desc;
  const isExternalLink = to?.startsWith("http");
  const CardContent = (
    <article className="h-full overflow-hidden rounded-2xl bg-white text-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
      <div className="relative h-56 overflow-hidden sm:h-60 lg:h-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1280px) 395px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        {Icon && (
          <Icon
            aria-hidden="true"
            className="absolute bottom-4 right-4 text-4xl text-[#f97316]"
          />
        )}
      </div>

      <div className="px-6 pb-6 pt-5">
        <h3 className="text-xl font-bold leading-7 text-[#1e1e1e]">{title}</h3>
        {cardDescription && (
          <p className="mt-3 text-base leading-[26px] text-[#4a5565]">
            {cardDescription}
          </p>
        )}
      </div>
    </article>
  );

  return (
    <Link
      href={to ?? "#"}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
      className="group block h-full cursor-pointer"
    >
      {CardContent}
    </Link>
  );
}
