import {
  Logo,
  PageTitle,
  UserBlock,
  Footer,
  Catalog,
  CatalogFilmsList,
} from 'components';
import { FilmListType } from 'types/films';

type Props = {
  count: number;
  films: FilmListType;
}

export default function MyList({count, films}: Props) {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo position='header'/>
        <PageTitle count={count}/>
        <UserBlock />
      </header>

      <Catalog>
        <CatalogFilmsList films={films} />
      </Catalog>
      <Footer />

    </div>
  );
}
