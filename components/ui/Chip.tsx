export default function Chip({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  const styles = active
    ? "bg-primary-olive text-white border-primary-olive"
    : "bg-white text-primary-charcoal border-border hover:border-primary-olive hover:text-primary-olive";

  return (
    <button
      onClick={onClick}
      className={`h-8 px-5 text-sm font-medium rounded-lg border transition-all ${styles}`}
    >
      {children}
    </button>
  );
}
