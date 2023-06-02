type Props = {
  name: string;
}

export default function FilmCardTitle({name}: Props) {
  return(
    <h2 className="film-card__title">{name}</h2>
  );
}
