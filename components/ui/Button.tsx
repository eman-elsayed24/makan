export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}) {
  const baseStyles = "rounded-[10px] font-bold transition-all cursor-pointer";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
    dark: "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
