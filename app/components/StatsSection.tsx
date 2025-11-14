import CountUp from "react-countup";

interface Stat {
  value: string; 
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stat-border rounded-xl overflow-hidden">
        {stats.map((stat, index) => {
          const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-8 px-6 ${
                index < stats.length - 1 ? "md:border-r border-stat-border" : ""
              } ${
                index < stats.length - 1 ? "border-b md:border-b-0 border-stat-border" : ""
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp
                  start={0}
                  end={numericValue}
                  duration={2.5}
                  separator=","
                />
                {stat.value.replace(/\d/g, "")} 
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
