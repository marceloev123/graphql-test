import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card.tsx";
import { GetCharacterByIdQuery } from "../graphql/schema/graphql.ts";
import { CharacterDetailsSkeleton } from "./character-details-skeleton.tsx";

interface CharacterDetailsProps {
  data: GetCharacterByIdQuery["character"] | undefined;
  isLoading: boolean;
}

export const CharacterDetails = ({
  data,
  isLoading,
}: CharacterDetailsProps) => {
  if (!data && !isLoading) {
    return null;
  }

  if (isLoading) {
    return <CharacterDetailsSkeleton />;
  }

  return (
    <>
      <Card className="w-[380px]">
        <CardHeader>
          <div className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage src={data?.image || ""} />
              <AvatarFallback>NN</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{data?.name}</CardTitle>
              <CardDescription>{data?.species}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="items-start">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Status</p>
              <p className="text-sm text-muted-foreground">{data?.status}</p>
            </div>
          </div>

          <div className="items-start">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Species</p>
              <p className="text-sm text-muted-foreground">{data?.species}</p>
            </div>
          </div>

          <div className="items-start">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Location</p>
              <p className="text-sm text-muted-foreground">
                {data?.location?.name}
              </p>
            </div>
          </div>

          <div className="items-start">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Origin</p>
              <p className="text-sm text-muted-foreground">
                {data?.origin?.name}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};
