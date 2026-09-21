export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}) {
  const baseStyles =
    "px-6 py-3 rounded-[10px] text-sm font-bold transition-opacity hover:opacity-90";

  const variantStyles = {
    primary: "bg-primary-olive text-white",
    secondary: "bg-primary-olive text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
