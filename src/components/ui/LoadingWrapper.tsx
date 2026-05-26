// components/ui/LoadingWrapper.tsx
"use client";

import { Spinner } from "./Spinner";

interface LoadingWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
}

export const LoadingWrapper = ({ 
  isLoading, 
  children, 
  skeleton 
}: LoadingWrapperProps) => {
  if (isLoading) {
    return skeleton ? <>{skeleton}</> : (
      <div className="flex items-center justify-center min-h-[200px]">
        <Spinner size="lg" color="primary" />
      </div>
    );
  }
  
  return <>{children}</>;
};