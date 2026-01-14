import { useState } from "react";
import type { Film, Character } from "../types";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useCharacters } from "../hooks/useCharacters";

interface CharacterDialogProps {
  film: Film;
}

export const CharacterDialog = ({ film }: CharacterDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const { characters, loading, error } = useCharacters(
    dialogOpen ? film.characters : [],
  );

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setSelectedCharacter(null);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Characters ({film.characters.length})</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto transition-[height] duration-300">
        <DialogHeader>
          <DialogTitle>Characters in {film.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4  min-h-[200px]">
          <div>
            <h3 className="font-semibold mb-2">Character List</h3>
            {loading && <p>Loading characters...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
              <div className="space-y-1 max-h-96 overflow-y-auto">
                {characters.map((character) => (
                  <Button
                    key={character.url}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setSelectedCharacter(character)}
                  >
                    {character.name}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div>
            {selectedCharacter ? (
              <div className="space-y-3">
                <h3 className="font-semibold">Character Details</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <span className="font-medium">Name:</span>{" "}
                    {selectedCharacter.name}
                  </div>
                  <div>
                    <span className="font-medium">Height:</span>{" "}
                    {selectedCharacter.height} cm
                  </div>
                  <div>
                    <span className="font-medium">Mass:</span>{" "}
                    {selectedCharacter.mass} kg
                  </div>
                  <div>
                    <span className="font-medium">Hair Color:</span>{" "}
                    {selectedCharacter.hair_color}
                  </div>
                  <div>
                    <span className="font-medium">Skin Color:</span>{" "}
                    {selectedCharacter.skin_color}
                  </div>
                  <div>
                    <span className="font-medium">Eye Color:</span>{" "}
                    {selectedCharacter.eye_color}
                  </div>
                  <div>
                    <span className="font-medium">Birth Year:</span>{" "}
                    {selectedCharacter.birth_year}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">
                Select a character to view details
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

