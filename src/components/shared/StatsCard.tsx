interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  subtitleColor?: string;
}

export default function StatsCard({
  title,
  value,
  subtitle,
  subtitleColor = "text-[#667085]",
}: StatsCardProps) {
  return (
    <div className="bg-white border border-[#EAECF0] rounded-2xl p-4 md:p-6 hover:shadow-md transition-shadow duration-200">
      <p className="card-title text-[#667085]">
        {title}
      </p>

      <h2 className="stats-value text-[#101828] mt-2">
        {value}
      </h2>

      <p className={`caption mt-2 ${subtitleColor}`}>
        {subtitle}
      </p>
    </div>
  );
}