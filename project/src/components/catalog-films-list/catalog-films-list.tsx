import { FilmCardSmall } from 'components';
import { FilmListType } from 'types/films';

type Props = {
  films: FilmListType;
}


export default function CatalogFilmsList({films}: Props) {
  return(
    <div className="catalog__films-list">
      {films.map((film) => <FilmCardSmall film={film} key={film.id}/>)}
    </div>
  );
}
