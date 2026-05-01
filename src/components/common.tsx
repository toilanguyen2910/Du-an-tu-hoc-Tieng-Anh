export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="panel-head">
      <div>
        <h3>{title}</h3>
        <p className="muted">{subtitle}</p>
      </div>
    </div>
  );
}
