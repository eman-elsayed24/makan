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
    ? "bg-primary text-primary-foreground border-primary"
    : "bg-card text-foreground border-border hover:border-primary hover:text-primary";

  return (
    <button
      onClick={onClick}
      className={`h-8 px-5 text-sm font-medium rounded-lg border transition-all ${styles}`}
    >
      {children}
    </button>
  );
}
