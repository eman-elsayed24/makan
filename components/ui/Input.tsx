export default function Input({
  label,
  placeholder,
  type = "text",
  error,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-primary-charcoal mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full h-14 px-4 text-base text-primary-charcoal placeholder:text-text-secondary bg-white border rounded-lg outline-none transition-all ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            : "border-border focus:border-primary-olive focus:ring-2 focus:ring-primary-olive/20"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
