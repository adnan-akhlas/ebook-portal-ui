import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BookCardSkeleton() {
  return (
    <Card className="overflow-hidden border shadow-sm p-0 rounded-xl">
      <CardContent className="flex gap-4 h-64 items-start p-4">
        {/* Skeleton for Book Cover Image */}
        <Skeleton className="h-full w-40 shrink-0 rounded-md border" />

        {/* Skeleton for Text and Action Content */}
        <div className="flex flex-col pt-1 h-full w-full">
          <div className="grow space-y-3">
            {/* Title Skeleton */}
            <Skeleton className="h-8 w-3/4" />

            {/* Genre Skeleton */}
            <Skeleton className="h-6 w-1/2" />
          </div>

          <div className="mt-8">
            {/* Button Skeleton */}
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
