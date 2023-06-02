import { AppRoute } from 'const';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  position: string;
}

export default function Logo({position}: Props) {
  const {pathname} = useLocation();

  if (pathname !== AppRoute.Main) {
    return(
      <div className="logo">
        <Link to='/' className={position === 'footer' ? 'logo__link logo__link--light' : 'logo__link'}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
    );
  }

  return(
    <div className="logo">
      <div className={position === 'footer' ? 'logo__link logo__link--light' : 'logo__link'}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </div>
    </div>
  );
}
