export default function Badge({
  children,
  variant = "rating",
}: {
  children: React.ReactNode;
  variant?: "rating" | "price";
}) {
  const styles =
    variant === "rating"
      ? "bg-card text-foreground shadow-sm"
      : "bg-primary text-primary-foreground";

  return (
    <div
      className={`inline-flex items-center justify-center h-8 px-3 text-sm font-medium rounded ${styles}`}
    >
      {children}
    </div>
  );
}
