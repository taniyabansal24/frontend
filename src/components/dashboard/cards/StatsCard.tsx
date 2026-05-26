// components/dashboard/cards/StatsCard.tsx (Enhanced with responsiveness)
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
  subtitleColor = "text-[#667085]"
}: StatsCardProps) {
  return (
    <div className="bg-white border border-[#EAECF0] rounded-2xl p-4 md:p-6 hover:shadow-md transition-shadow duration-200">
      <p className="card-title text-sm md:text-base text-[#667085] font-medium">
        {title}
      </p>

      <h2 className="stats-value mt-2 text-2xl md:text-3xl font-semibold text-[#101828]">
        {value}
      </h2>

      <p className={`caption mt-2 text-xs md:text-sm ${subtitleColor}`}>
        {subtitle}
      </p>
    </div>
  );
}