'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

type LinkCardProps = {
  href: string;
  title: string;
  description?: string;
  thumbnail?: string;
  icon?: ReactNode;
  target?: '_blank' | '_self';
  className?: string;
  variant?: 'default' | 'compact' | 'large';
};

export const LinkCard = ({
  href,
  title,
  description,
  thumbnail,
  icon,
  target = '_blank',
  className = '',
  variant = 'default'
}: LinkCardProps) => {
  const baseClasses = "block border border-solid border-slate-200 rounded-md hover:shadow-md transition-shadow duration-200 bg-white";
  
  const variantClasses = {
    default: "p-4",
    compact: "p-3",
    large: "p-6"
  };

  const titleClasses = {
    default: "text-lg font-semibold",
    compact: "text-base font-semibold",
    large: "text-xl font-bold"
  };

  const descriptionClasses = {
    default: "text-sm text-gray-600 mt-2",
    compact: "text-xs text-gray-600 mt-1",
    large: "text-base text-gray-600 mt-3"
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <div className="flex items-start gap-3">
        {thumbnail && (
          <div className="flex-shrink-0">
            <Image
              src={thumbnail}
              alt=""
              width={variant === 'compact' ? 48 : variant === 'large' ? 80 : 64}
              height={variant === 'compact' ? 48 : variant === 'large' ? 80 : 64}
              className="object-cover rounded"
            />
          </div>
        )}
        
        {icon && !thumbnail && (
          <div className="flex-shrink-0 flex items-center justify-center">
            {icon}
          </div>
        )}
        
        <div className="flex-grow min-w-0">
          <h3 className={`${titleClasses[variant]} truncate`}>
            {title}
          </h3>
          
          {description && (
            <p className={`${descriptionClasses[variant]} line-clamp-2`}>
              {description}
            </p>
          )}
          
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <span className="truncate">{new URL(href).hostname}</span>
            {target === '_blank' && (
              <svg
                className="ml-1 w-3 h-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};