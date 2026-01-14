import { useFilms } from "./hooks/useFilms";
import { FilmCard } from "./components/FilmCard";
import { FilmCardSkeleton } from "./components/FilmCardSkeleton";

function App() {
  const { films, loading, error } = useFilms();

  return (
    <div className="min-h-screen bg-background min-w-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Star Wars Movies Catalog
          </h1>
          <p className="text-muted-foreground">
            Explore the epic saga of Star Wars films
          </p>
        </div>

        {error && (
          <div className="text-center text-red-500 mb-8">
            <p>Error loading films: {error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <FilmCardSkeleton key={index} />
              ))
            : films.map((film) => (
                <FilmCard key={film.episode_id} film={film} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
