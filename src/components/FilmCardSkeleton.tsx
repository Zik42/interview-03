import { Card, CardHeader, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const FilmCardSkeleton = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-16 w-full" />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

