export type Faq = { q: string; a: string };

/* Tekst ondersteunt **vet** en [label](/pad/) voor interne links. */
export type Block =
  | { t: 'p'; x: string }
  | { t: 'h2'; x: string }
  | { t: 'ul'; x: string[] }
  | { t: 'steps'; x: [string, string][] }
  | { t: 'cards'; x: { h: string; p: string; href: string }[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'note'; x: string };

export type Group = 'product' | 'service' | 'info' | 'location' | 'hub' | 'legal';

export type Img = { src: string; alt: string; w: number; h: number };

export type Page = {
  slug: string;
  group: Group;
  /** <title> zonder merk (het merk wordt toegevoegd) */
  title: string;
  desc: string;
  h1: string;
  kicker: string;
  lead: string;
  blocks: Block[];
  faq?: Faq[];
  /** slugs voor "Bekijk ook" */
  related: string[];
  img?: Img;
  /** schema-type: product = ProductModel, service = Service, article = Article */
  kind?: 'product' | 'service' | 'article' | 'location';
  /** naam voor breadcrumb en interne links */
  nav: string;
  parent?: string;
  /** plaatsnaam voor areaServed (alleen location) */
  place?: string;
  noCta?: boolean;
};
