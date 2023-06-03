type Props = {
  posterImage: string;
  filmTitle: string;
}

export default function FilmCardPoster({posterImage, filmTitle}: Props) {
  return(
    <div className="film-card__poster">
      <img src={posterImage} alt={`${filmTitle} poster`} width="218" height="327" />
    </div>
  );
}
