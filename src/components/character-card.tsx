import { Character } from "../graphql/schema/graphql";
import logo from "../assets/right-arrow.svg";

interface CharacterCardProps {
  data: Character | null;
  onClick: (id: string) => void;
}

export const CharacterCard = ({ data, onClick }: CharacterCardProps) => {
  return (
    <li className="border-b border-b-zinc-300" key={data?.id}>
      <button
        className="flex flex-row justify-between items-center p-4 w-full"
        onClick={() => onClick(data?.id || "")}
      >
        <article className="text-left">
          <p className="text-sm font-medium leading-none">{data?.name}</p>
          <p className="text-sm text-muted-foreground">{data?.species}</p>
        </article>

        <img className="h-4 w-4" src={logo} />
      </button>
    </li>
  );
};
