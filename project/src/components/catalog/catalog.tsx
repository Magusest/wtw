type Props = {
  children: JSX.Element | JSX.Element[];
}

export default function Catalog({children}: Props) {
  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {children}
    </section>
  );
}
