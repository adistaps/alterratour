import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface GreenIconCircleProps {
  icon: IconDefinition;
  size?: 'sm' | 'md' | 'lg';
}

export function GreenIconCircle({ icon, size = 'md' }: GreenIconCircleProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  };

  return (
    <div className={`${sizes[size]} flex items-center justify-center border-none bg-transparent transition-transform duration-300 group-hover:scale-110`}>
      <FontAwesomeIcon 
        icon={icon} 
        className="text-primary border-none drop-shadow-sm" 
        size={size === 'lg' ? '2xl' : size === 'md' ? 'xl' : 'lg'} 
      />
    </div>
  );
}
