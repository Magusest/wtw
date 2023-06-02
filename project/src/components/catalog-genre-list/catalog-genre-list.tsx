import { GenersList } from 'const';

const currentGenre = GenersList[0];

export default function CatalogGenreList() {
  return(
    <ul className="catalog__genres-list">
      {GenersList.map(
        (genre) =>
          (
            <li className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre}>
              <a href="#" className="catalog__genres-link">{genre}</a>
            </li>
          )
      )}
    </ul>
  );
}
