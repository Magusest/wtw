import { FilmType } from 'types/film';
import { FilmListType } from 'types/films';
import {
  FilmCardBg,
  FilmCardPoster,
  FilmCardTitle,
  Logo,
  UserBlock,
  Footer,
  FilmCardMeta,
  FilmCardButtons,
  Catalog,
  CatalogGenreList,
  CatalogFilmsList,
  CatalogMoreButton,
} from 'components';


type Props = {
  film: FilmType;
  films: FilmListType;
}

export default function Main({film, films}: Props) {
  const {name, posterImage} = film;

  return(
    <>
      <section className="film-card">
        <FilmCardBg />
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo position='header'/>
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster filmTitle={name} posterImage={posterImage}/>
            <div className="film-card__desc">
              <FilmCardTitle name={film.name} />
              <FilmCardMeta genre={film.genre} released={film.released} />
              <FilmCardButtons />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog>
          <CatalogGenreList />
          <CatalogFilmsList films={films}/>
          <CatalogMoreButton />
        </Catalog>
        <Footer />
      </div>

    </>
  );
}
