import InfiniteScroll from "react-infinite-scroll-component";
import { Character, GetCharactersQuery } from "../graphql/schema/graphql";
import { CharacterCard } from "./character-card";
import { ListLoader } from "./list-loader";

interface CharactersListProps {
  charactersData: GetCharactersQuery | undefined;
  loading: boolean;
  onFetchMore: () => void;
  page: number;
  refetch: () => void;
  setSelectedId: (id: string) => void;
}

export const CharactersList = ({
  charactersData,
  onFetchMore,
  page,
  refetch,
  loading,
  setSelectedId,
}: CharactersListProps) => {
  return (
    <aside
      id="characters-list"
      className="border-r border-r-zinc-300 w-[300px] h-[calc(100%_-_60px)] overflow-y-auto"
    >
      {loading && !charactersData ? (
        <ListLoader />
      ) : (
        <InfiniteScroll
          scrollableTarget="characters-list"
          dataLength={charactersData?.characters?.results?.length || 0}
          next={onFetchMore}
          hasMore={charactersData?.characters?.info?.next! > page}
          loader={<ListLoader />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          refreshFunction={refetch}
        >
          <ul>
            {!loading &&
              charactersData?.characters?.results?.map(character => (
                <CharacterCard
                  key={character?.id}
                  data={character as Character}
                  onClick={setSelectedId}
                />
              ))}
          </ul>
        </InfiniteScroll>
      )}
    </aside>
  );
};
