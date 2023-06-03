import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, MY_LIST_COUNT } from 'const';
import { AddReview, Film, Main, MyList, NotFound, SingIn } from 'pages';
import { PrivatRouter } from 'components';
import { filmsMocks } from 'mocks/filmsMock';
import { getRandomArrayElement, getRandomArray } from 'utils';

const poster = getRandomArrayElement(filmsMocks);
const myFavorites = getRandomArray(filmsMocks);

export default function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main film={poster} films={filmsMocks}/>} />
        <Route path={AppRoute.SingIn} element={<SingIn />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivatRouter>
              <MyList count={MY_LIST_COUNT} films={myFavorites}/>
            </PrivatRouter>
          }
        />
        <Route path={`${AppRoute.Film}/:id`}>
          <Route index element={<Film film={poster} />}/>
          <Route path={AppRoute.Review}
            element={
              <PrivatRouter>
                <AddReview />
              </PrivatRouter>
            }
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
