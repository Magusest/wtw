import { AppRoute, log } from 'const';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmType } from 'types/film';

type Props = {
  film: FilmType;
}

export default function FilmCardSmall({film}: Props) {
  const { id,name, posterImage } = film;

  // const [, setCardState] = useState();

  const cardHoverHandler = () => {
    log(id);
  };

  return(
    <article className="small-film-card catalog__films-card" onMouseEnter={cardHoverHandler}>
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
