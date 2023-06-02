import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, MY_LIST_COUNT } from 'const';
import { AddReview, Film, Main, MyList, NotFound, SingIn } from 'pages';
import { FilmType } from 'types/film';
import { PrivatRouter } from 'components';

const FILM: FilmType = {
  'name': 'War of the Worlds',
  'posterImage': 'https://12.react.pages.academy/static/film/poster/War_of_the_Worlds.jpg',
  'previewImage': 'https://12.react.pages.academy/static/film/preview/war-of-the-worlds.jpg',
  'backgroundImage': 'https://12.react.pages.academy/static/film/background/War_of_the_Worlds.jpg',
  'backgroundColor': '#9B7E61',
  'description': 'As Earth is invaded by alien tripod fighting machines, one family fights for survival.',
  'rating': 9.3,
  'scoresCount': 386834,
  'director': 'Steven Spielberg',
  'starring': [
    'Tom Cruise',
    'Dakota Fanning',
    'Tim Robbins'
  ],
  'runTime': 116,
  'genre': 'Adventure',
  'released': 2005,
  'id': 1,
  'isFavorite': false,
  'videoLink': 'https://12.react.pages.academy/static/film/video/bike.mp4',
  'previewVideoLink': 'https://12.react.pages.academy/static/film/video/traffic.mp4',
};

export default function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main film={FILM}/>} />
        <Route path={AppRoute.SingIn} element={<SingIn />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivatRouter>
              <MyList count={MY_LIST_COUNT}/>
            </PrivatRouter>
          }
        />
        <Route path={`${AppRoute.Film}/:id`}>
          <Route index element={<Film film={FILM} />}/>
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
