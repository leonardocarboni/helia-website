"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  description, 
  className,
  centered = false
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-4",
      centered && "text-center",
      className
    )}>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}