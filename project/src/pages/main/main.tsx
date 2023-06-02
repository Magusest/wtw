import { FilmType } from 'types/film';
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
}

export default function Main({film}: Props) {
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
            <FilmCardPoster />
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
          <CatalogFilmsList />
          <CatalogMoreButton />
        </Catalog>
        <Footer />
      </div>

    </>
  );
}
