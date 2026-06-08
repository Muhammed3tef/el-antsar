type ProcessStepCardProps = {
  number: number;
  title: string;
  description: string;
  className?: string;
};

export default function ProcessStepCard({
  number,
  title,
  description,
  className = "",
}: ProcessStepCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col items-center text-center text-white ${className}`}
    >
      <div className="relative z-10 flex size-16 items-center justify-center rounded-full bg-linear-to-br from-[#f97316] to-[#ea580c] text-2xl font-bold leading-none shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] sm:size-20 sm:text-3xl">
        {number}
      </div>

      <h3 className="mt-5 text-xl font-bold leading-tight sm:mt-6 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 max-w-72 text-base leading-7 text-[#f2f2f7] sm:text-lg sm:leading-[29px]">
        {description}
      </p>
    </article>
  );
}
