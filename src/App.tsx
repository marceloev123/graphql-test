import { CharacterDetails } from "./components/character-details";
import { CharactersList } from "./components/characters-list";
import {
  useGetCharacterByIdQuery,
  useGetCharactersQuery,
} from "./graphql/schema/graphql";
import "./output.css";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const {
    data: charactersData,
    loading,
    fetchMore,
    refetch,
  } = useGetCharactersQuery({
    variables: { page: 1 },
  });

  const { data: characterDetailsData, loading: characterDetailsLoading } =
    useGetCharacterByIdQuery({
      variables: { characterId: selectedId },
      skip: !selectedId,
      fetchPolicy: "cache-first",
    });

  const onFetchMore = () => {
    fetchMore({
      variables: {
        page: page + 1,
      },
    })
      .then(() => {
        setPage(prev => prev + 1);
      })
      .catch(error => {
        console.error("Error fetching more data:", error);
      });
  };

  return (
    <div className="h-screen overflow-hidden">
      <nav className="p-4 bg-gray-900">
        <h1 className="text-white text-lg">Ricky And Morty Characters List</h1>
      </nav>
      <main className="flex flex-1 h-screen">
        <CharactersList
          charactersData={charactersData}
          loading={loading}
          onFetchMore={onFetchMore}
          page={page}
          refetch={refetch}
          setSelectedId={setSelectedId}
        />

        <div className="flex-1">
          <article className="flex justify-center items-center h-full">
            <CharacterDetails
              data={characterDetailsData?.character}
              isLoading={characterDetailsLoading}
            />
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
