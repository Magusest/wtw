const isLogin = true;
const MY_LIST_COUNT = 100;
const {log} = console;

enum AppRoute {
  Main = '/',
  SingIn = 'login',
  MyList = 'mylist',
  Film = 'films',
  Player = 'player',
  Review = 'review',
}

enum Geners {
  AllGeners = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Famil',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}

const GenersList = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Famil', 'Romance', 'Sci-Fi', 'Thrillers'];

export {
  isLogin,
  MY_LIST_COUNT,
  log,
  AppRoute,
  Geners,
  GenersList,
};
