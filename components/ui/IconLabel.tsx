export default function IconLabel({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
        <span className="text-sm">{icon}</span>
      </div>
      <span className="text-sm text-foreground">{label}</span>
    </div>
  );
}
