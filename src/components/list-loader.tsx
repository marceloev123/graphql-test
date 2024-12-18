import { Loader2 } from "lucide-react";

export const ListLoader = () => {
  return (
    <div className="flex flex-row items-center justify-center p-4 gap-4">
      <Loader2 className="animate-spin" />
      <span>Loading ...</span>
    </div>
  );
};
