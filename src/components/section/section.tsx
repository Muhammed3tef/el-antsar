import SectionHeader from "./section-header";

interface SectionProps {
  title?: string;
  description?: string;
  titleClassName?: string;
  desClassName?: string;
  children?: React.ReactNode;
  className?: string;
}

const Section = ({
  title,
  description,
  titleClassName,
  desClassName,
  children,
  className,
}: SectionProps) => {
  return children ? (
    <section className={`py-16 ${className}`}>
      <div className="container">
        {title && (
          <SectionHeader
            title={title}
            description={description}
            titleClassName={titleClassName}
            desClassName={desClassName}
          />
        )}
        {children}
      </div>
    </section>
  ) : (
    <div className={`py-16 ${className}`}>
      {title && (
        <SectionHeader
          title={title}
          description={description}
          titleClassName={titleClassName}
          desClassName={desClassName}
        />
      )}
    </div>
  );
};

export default Section;
