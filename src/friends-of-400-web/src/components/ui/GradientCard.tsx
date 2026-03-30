interface GradientCardProps {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  onClick?: () => void;
}

export default function GradientCard({
  title,
  description,
  gradientFrom,
  gradientTo,
  onClick,
}: GradientCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl p-6 text-left text-white transition-transform duration-200 hover:scale-105 cursor-pointer w-full"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-white/90 leading-relaxed">{description}</p>
    </button>
  );
}
