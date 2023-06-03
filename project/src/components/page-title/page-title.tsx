import { AppRoute, log } from 'const';
import { useLocation } from 'react-router-dom';

type Props = {
  count?: number;
}

export default function PageTitle({count}: Props) {
  const {pathname} = useLocation();
  log(pathname);

  switch(pathname) {
    case(`/${AppRoute.SingIn}`):
      return(
        <h1 className="page-title user-page__title">Sign in</h1>
      );
    case(`/${AppRoute.MyList}`):
      return(
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{count}</span></h1>
      );
    default:
      return(null);
  }
}
