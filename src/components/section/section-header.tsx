interface Props {
  title: string;
  description?: string;
  titleClassName?: string;
  desClassName?: string;
}
const SectionHeader = ({
  title,
  description,
  titleClassName = "text-emerald-900",
  desClassName,
}: Props) => {
  return (
    <header className="mb-8 text-center">
      <h3 className={`font-bold text-3xl mb-4 ${titleClassName}`}>{title}</h3>
      {description && (
        <p className={`text-sm ${desClassName}`}>{description}</p>
      )}
    </header>
  );
};

export default SectionHeader;
