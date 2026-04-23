import { FadeUp } from './FadeUp';

interface SectionHeaderProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  className?: string;
}

export function SectionHeader({ title, titleAccent, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <FadeUp className={`mb-14 md:mb-20 ${className}`}>
      {/* Eyebrow indicator */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-[2px] bg-primary rounded-full" />
        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
        {title}
        {titleAccent && <span className="text-primary"> {titleAccent}</span>}
      </h2>

      <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-5 max-w-2xl">
        {subtitle}
      </p>
    </FadeUp>
  );
}
