import { useState, useEffect } from 'react';
import type { Character } from '../types';

export const useCharacters = (characterUrls: string[]) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (characterUrls.length === 0) return;

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const promises = characterUrls.map(url => fetch(url).then(res => res.json()));
        const data: Character[] = await Promise.all(promises);
        setCharacters(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch characters');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [characterUrls]);

  return { characters, loading, error };
};