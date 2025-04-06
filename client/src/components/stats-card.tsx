interface StatsCardProps {
  value: string;
  label: string;
  color: 'cyan' | 'pink' | 'yellow';
}

const colorMap = {
  cyan: 'text-[hsl(174,100%,50%)]',
  pink: 'text-[hsl(300,100%,50%)]',
  yellow: 'text-[hsl(60,100%,50%)]'
};

export default function StatsCard({ value, label, color }: StatsCardProps) {
  return (
    <div className="backdrop-blur-md bg-zinc-900/25 p-6 rounded-lg border border-white/5">
      <h3 className={`${colorMap[color]} font-cyber text-3xl md:text-4xl mb-2`}>{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}
