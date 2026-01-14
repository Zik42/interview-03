import { useState, useEffect } from "react";
import type { Film } from "../types";

export const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://swapi.info/api/films/");
        if (!response.ok) {
          throw new Error("Failed to fetch films");
        }
        const data: Film[] = await response.json();
        setFilms(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return { films, loading, error };
};

