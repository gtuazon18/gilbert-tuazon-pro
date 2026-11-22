import { useId, useState } from "react";

type Client = { name: string; slug: string; domain?: string; logo?: string; wide?: boolean; mark?: "wtech" | "davio"; href?: string };

// Order tried for each logo: /public/logos/<slug>.png (drop an official file there to override),
// then a researched official logo URL, then the company's own site icon, then an initials badge.
const companies: Client[] = [
  { name: "Fintelligence", slug: "fintelligence", domain: "fintelligence.com.au", href: "https://fintelligence.com.au" },
  { name: "RXN3D", slug: "rxn3d", domain: "rxn3d.com", href: "https://rxn3d.com" },
  { name: "Waal.ai", slug: "waal", domain: "waal.ai", href: "https://waal.ai" },
  { name: "Teko Philippines", slug: "teko", domain: "teko.ph", href: "https://www.teko.ph" },
  { name: "Multisys Technologies", slug: "multisys", logo: "/logos/multisys.svg", wide: true, href: "https://www.multisyscorp.com" },
  { name: "Ingram Micro", slug: "ingram-micro", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ingram_Micro_logo_new.svg", wide: true, href: "https://www.ingrammicro.com" },
  { name: "IntelHouse", slug: "intelhouse", domain: "intelhouse.net", href: "https://www.intelhouse.net" },
  { name: "MyMoovz", slug: "mymoovz", logo: "https://www.muval.com.au/images/companies/3532/mymoovz-whitebg.webp", wide: true, href: "https://www.muval.com.au/partners/mymoovz" },
  { name: "FootballerLife", slug: "footballerlife", domain: "footballerlife.com", href: "https://footballerlife.com" },
  { name: "Earn-Books", slug: "earn-books", logo: "https://earn-books.com/images/logo.png", href: "https://earn-books.com" },
  { name: "W-Tech Solutions", slug: "w-tech", mark: "wtech" },
  { name: "Dav.IO", slug: "dav-io", mark: "davio" },
];

const initials = (name: string) =>
  name.replace(/[^A-Za-z0-9 ]/g, " ").split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();

// Colorful animated abstract marks for clients without a public logo.
const AbstractMark = ({ kind }: { kind: "wtech" | "davio" }) => {
  const id = useId().replace(/:/g, "");
  if (kind === "wtech") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0 overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#06b6d4" /><stop offset="1" stopColor="#2563eb" /></linearGradient>
          <linearGradient id={`${id}b`} x1="1" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a3e635" /><stop offset="1" stopColor="#10b981" /></linearGradient>
        </defs>
        <rect x="7" y="7" width="34" height="34" rx="10" fill={`url(#${id}a)`}>
          <animateTransform attributeName="transform" type="rotate" values="0 24 24;90 24 24;90 24 24;180 24 24" dur="6s" repeatCount="indefinite" />
        </rect>
        <rect x="14" y="14" width="20" height="20" rx="6" fill={`url(#${id}b)`} opacity="0.9">
          <animateTransform attributeName="transform" type="rotate" values="0 24 24;-180 24 24" dur="6s" repeatCount="indefinite" />
        </rect>
        <circle r="3.5" fill="#fbbf24">
          <animateMotion dur="4s" repeatCount="indefinite" path="M24 1 A23 23 0 1 1 23.9 1" />
        </circle>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0 overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8b5cf6" /><stop offset="1" stopColor="#ec4899" /></linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#f97316" /><stop offset="1" stopColor="#facc15" /></linearGradient>
      </defs>
      <circle cx="24" cy="24" r="17" fill={`url(#${id}a)`}>
        <animate attributeName="r" values="17;19;17" dur="3s" repeatCount="indefinite" />
      </circle>
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 24 24;360 24 24" dur="5s" repeatCount="indefinite" />
        <circle cx="24" cy="6" r="7" fill={`url(#${id}b)`} opacity="0.95" />
        <circle cx="24" cy="43" r="4" fill="#22d3ee" />
      </g>
      <circle cx="24" cy="24" r="6" fill="#fff" opacity="0.85" />
    </svg>
  );
};

const LogoMark = ({ client }: { client: Client }) => {
  const sources = [`/logos/${client.slug}.png`, client.logo, client.domain && `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`].filter(Boolean) as string[];
  const [index, setIndex] = useState(0);
  if (index >= sources.length) {
    if (client.mark) return <AbstractMark kind={client.mark} />;
    return <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground text-xs font-bold text-background" aria-hidden="true">{initials(client.name)}</span>;
  }
  return (
    <img src={sources[index]} alt="" aria-hidden="true" width={40} height={40} loading="lazy" referrerPolicy="no-referrer"
      onError={() => setIndex(i => i + 1)}
      onLoad={e => { if (e.currentTarget.naturalWidth <= 16) setIndex(i => i + 1); }}
      className={`h-10 shrink-0 object-contain ${client.wide ? "w-28" : "w-10"}`} />
  );
};

const Chip = ({ client, hidden = false }: { client: Client; hidden?: boolean }) => {
  const body = <><LogoMark client={client} /><span className="whitespace-nowrap text-base font-semibold tracking-tight">{client.name}</span></>;
  const cls = "mr-12 inline-flex shrink-0 items-center gap-3 px-2 py-2 opacity-80 transition-opacity";
  return client.href
    ? <a href={client.href} target="_blank" rel="noreferrer" tabIndex={hidden ? -1 : undefined} aria-hidden={hidden || undefined} className={`${cls} hover:opacity-100`} title={`Visit ${client.name}`}>{body}</a>
    : <span className={cls} aria-hidden={hidden || undefined}>{body}</span>;
};

const ClientLogos = () => (
  <div className="mt-7 border-t border-border pt-6">
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Companies &amp; clients I’ve worked with</p>
    <div className="logo-marquee mt-4 overflow-hidden">
      <div className="logo-marquee-track flex w-max items-center">
        {companies.map(client => <Chip key={client.slug} client={client} />)}
        {/* Duplicate set makes the loop seamless; hidden from screen readers and tab order. */}
        {companies.map(client => <Chip key={`${client.slug}-copy`} client={client} hidden />)}
      </div>
    </div>
  </div>
);

export default ClientLogos;
