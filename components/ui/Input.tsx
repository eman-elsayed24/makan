export default function Input({
  label,
  placeholder,
  type = "text",
  error,
  value,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-foreground mb-2">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-14 px-4 text-base text-foreground placeholder:text-muted-foreground bg-card border rounded-lg outline-none transition-all ${
          error
            ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
            : "border-input focus:border-primary focus:ring-2 focus:ring-primary/20"
        }`}
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
