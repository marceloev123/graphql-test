import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const CharacterDetailsSkeleton = () => {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <div className="flex flex-row items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div>
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-4 w-20 mt-1" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-1">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-1">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-1">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-1">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
