import { Cta } from '@/components/ui';

export const metadata = { title: 'Pagina niet gevonden | Lachgas Amsterdam', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="hero sub">
      <div className="wrap">
        <h1>Deze pagina bestaat niet</h1>
        <p className="lead">
          De pagina die je zoekt is verplaatst of bestaat niet meer. Ga naar de <a href="/">homepage</a>, bekijk het{' '}
          <a href="/bezorggebied/">bezorggebied</a> of bestel direct.
        </p>
        <Cta />
      </div>
    </section>
  );
}
