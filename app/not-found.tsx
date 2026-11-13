
export const metadata = { title: 'Pagina niet gevonden | Lachgas Amsterdam', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="hero sub">
      <div className="wrap">
        <h1>Deze pagina bestaat niet</h1>
        <p className="lead">
          De pagina die je zoekt is verplaatst of bestaat niet meer. Ga naar de <a href="/">homepage</a>, bekijk het{' '}
          <a href="/bezorggebied/">bezorggebied</a>.
        </p>
        <ul className="places">
          <li><a href="/lachgas-tanks/">Lachgas tanks</a></li>
          <li><a href="/bestellen/">Bestellen</a></li>
          <li><a href="/lachgas-amsterdam/">Amsterdam per stadsdeel</a></li>
          <li><a href="/veelgestelde-vragen/">Veelgestelde vragen</a></li>
          <li><a href="/overzicht/">Alle pagina&rsquo;s</a></li>
        </ul>
      </div>
    </section>
  );
}
