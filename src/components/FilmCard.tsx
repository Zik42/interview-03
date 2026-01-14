import type { Film } from "../types";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface FilmCardProps {
  film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  const truncateCrawl = (crawl: string, maxLength: number = 200) => {
    if (crawl.length <= maxLength) return crawl;
    return crawl.substring(0, maxLength) + "...";
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">{film.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Released: {film.release_date}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <h4 className="font-semibold text-sm">Opening Crawl</h4>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {truncateCrawl(film.opening_crawl)}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <span className="font-semibold text-sm">Director:</span>{" "}
            {film.director}
          </div>
          <div>
            <span className="font-semibold text-sm">Producer:</span>{" "}
            {film.producer}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

