import { Skeleton } from "@craveup/ui/components/skeleton";
import { Card, CardContent } from "@craveup/ui/components/card";
import { Loader2 } from "lucide-react";
import React from "react";

export function MetricCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-[100px]" /> {/* Title */}
            <Skeleton className="h-4 w-4 rounded-full" /> {/* Info icon */}
            <Skeleton className="h-5 w-[45px] bg-emerald-100" />{" "}
            {/* Percentage */}
          </div>
          <div className="flex items-baseline gap-2">
            <Skeleton className="h-8 w-[80px]" /> {/* Main value */}
            <Skeleton className="h-4 w-[120px]" /> {/* Previous period */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <MetricCardSkeleton key={i} />
        ))}
      </div>

      {/* Bottom Sections */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-[120px]" /> {/* Recent Orders */}
                <Skeleton className="h-4 w-[100px]" /> {/* View all */}
              </div>
              <div className="space-y-3">
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-[120px]" /> {/* Top Products */}
                <Skeleton className="h-4 w-[100px]" /> {/* View all */}
              </div>
              <div className="space-y-3">
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-[80px]" />
          <Skeleton className="h-8 w-[80px]" />
        </div>
      </div>
      <div className="rounded-lg border">
        <div className="border-b">
          <div className="grid grid-cols-5 gap-4 p-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
        </div>
        <div className="space-y-4 p-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-[100px]" />
        <div className="flex space-x-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-8" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CommonSkeleton() {
  return (
    <div className="space-y-4 flex justify-center">
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
}
