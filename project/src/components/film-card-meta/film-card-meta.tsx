type Props = {
  genre: string;
  released: number;
}

export default function FilmCardMeta({genre, released}: Props) {
  return(
    <p className="film-card__meta">
      <span className="film-card__genre">{genre}</span>
      <span className="film-card__year">{released}</span>
    </p>
  );
}
