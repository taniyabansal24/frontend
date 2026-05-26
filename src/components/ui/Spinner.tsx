// components/ui/Spinner.tsx
"use client";

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'neutral';
  className?: string;
}

export const Spinner = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}: SpinnerProps) => {
  const sizeClasses = {
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg',
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    neutral: 'text-neutral',
  };

  return (
    <span 
      className={`loading loading-spinner ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    />
  );
};

export const LoadingOverlay = ({ message }: { message?: string }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-base-100 rounded-lg p-8 flex flex-col items-center gap-4 shadow-xl">
        <Spinner size="lg" color="primary" />
        {message && <p className="text-base-content">{message}</p>}
      </div>
    </div>
  );
};