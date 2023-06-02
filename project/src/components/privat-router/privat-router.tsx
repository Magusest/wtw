import { isLogin, AppRoute } from 'const';
import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
}

export default function PrivatRouter({children}: Props) {
  return isLogin ? children : <Navigate to={`/${AppRoute.SingIn}`} />;
}
