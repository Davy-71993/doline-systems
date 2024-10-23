import { cn } from '@/lib/utils';
import React, { ComponentProps } from 'react';

type ContainerProps = ComponentProps<'div'>

const Container = ({ children, className, ...props }: ContainerProps) => {
  return <div 
    {...props} 
    className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
  >
    {children}
  </div>;
};

export default Container;
