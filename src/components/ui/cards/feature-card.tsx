import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className = "",
}: Props) => {
  return (
    <article
      className={`flex h-full flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#f97316] to-[#ea580c] text-white">
        <Icon aria-hidden="true" size={32} />
      </div>
      <h3 className="mt-5 text-xl font-bold leading-7 text-[#1e1e1e]">
        {title}
      </h3>
      <p className="mt-3 text-base leading-[26px] text-[#4a5565]">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
