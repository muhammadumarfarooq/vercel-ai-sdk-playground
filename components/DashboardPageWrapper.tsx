"use client";

import clsx from "clsx";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface DashboardPageWrapperProps {
  type?: "button" | "submit";
  title?: string;
  text?: string;
  buttonText?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
  rightComponent?: React.ReactNode;
  className?: string;
  onBack?: boolean;
}

export default function DashboardPageWrapper({
  type = "button",
  title,
  className,
  text,
  buttonText,
  onBack = false,
  onClick,
  children,
  rightComponent,
}: DashboardPageWrapperProps) {
  const router = useRouter();

  return (
    <div className={clsx(className)}>
      {onBack && (
        <Button type="button" variant="outline" onClick={() => router.back()}>
          <ArrowLeft size={16} /> Go Back
        </Button>
      )}
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            {title && (
              <h1 className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong truncate text-lg font-semibold sm:text-xl">
                {title}
              </h1>
            )}
            {text && (
              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                {text}
              </p>
            )}
          </div>
          {rightComponent && (
            <div className="shrink-0 pr-4">{rightComponent}</div>
          )}
          {buttonText && (
            <div className="self-end">
              <Button onClick={onClick} type={type}>
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 w-full min-w-0 sm:mt-6 lg:mt-10">{children}</div>
    </div>
  );
}
