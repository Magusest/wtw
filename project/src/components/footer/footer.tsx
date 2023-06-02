import { Logo } from 'components';

export default function Footer() {
  return(
    <footer className="page-footer">
      <Logo position='footer'/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
