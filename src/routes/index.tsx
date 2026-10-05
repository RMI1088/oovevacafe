import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronRight,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  Phone,
  UtensilsCrossed,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import heroImage from "@/assets/ooveva-hero.jpg";
import foodImage from "@/assets/ooveva-food.jpg";
import logoAsset from "@/assets/ooveva-logo.png.asset.json";
import exteriorDayAsset from "@/assets/ooveva-exterior-day.png.asset.json";
import exteriorNightAsset from "@/assets/ooveva-exterior-night.png.asset.json";
import interiorSeatingAsset from "@/assets/ooveva-interior-seating.png.asset.json";
import interiorWaterAsset from "@/assets/ooveva-interior-water.png.asset.json";
import { business, menu } from "@/content/ooveva";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ooveva – The In House Cafe | Hanamkonda" },
      {
        name: "description",
        content:
          "Explore the menu and plan your visit to Ooveva – The In House Cafe in Subedari, Hanamkonda, Telangana.",
      },
      { property: "og:title", content: "Ooveva – The In House Cafe | Hanamkonda" },
      {
        property: "og:description",
        content: "Menu, directions and café details for Ooveva in Subedari, Hanamkonda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: business.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Back of Woodland, beside D-Mart, Subedari",
            addressLocality: "Hanamkonda",
            addressRegion: "Telangana",
            postalCode: "506001",
            addressCountry: "IN",
          },
          telephone: business.phoneDisplay,
          sameAs: [business.instagramUrl, business.directionsUrl],
        }),
      },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Home", "home"],
  ["Menu", "menu"],
  ["About", "about"],
  ["Gallery", "gallery"],
  ["Visit Us", "visit"],
  ["Contact", "contact"],
] as const;

const gallery = [
  { src: exteriorDayAsset.url, alt: "Ooveva café entrance in daylight", label: "Exterior · Day" },
  { src: exteriorNightAsset.url, alt: "Ooveva café entrance illuminated at night", label: "Exterior · Night" },
  { src: interiorSeatingAsset.url, alt: "Ooveva café covered seating area", label: "Interior · Seating" },
  { src: interiorWaterAsset.url, alt: "Ooveva café interior with illuminated water feature", label: "Interior · Atmosphere" },
] as const;

function Index() {
  const [activeCategory, setActiveCategory] = useState(menu[0]?.name ?? "");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const activeMenu = menu.find((category) => category.name === activeCategory) ?? menu[0];
  const selectedImage = lightboxIndex === null ? undefined : gallery[lightboxIndex];

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setLightboxIndex((value) => (value === null ? 0 : (value + 1) % gallery.length));
      if (event.key === "ArrowLeft") setLightboxIndex((value) => (value === null ? 0 : (value - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  const visibleCategories = showAll ? menu : menu.slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/82 backdrop-blur-2xl">
        <div className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:flex md:justify-between">
          <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="Ooveva home">
            <img src={logoAsset.url} alt="Ooveva café logo" className="h-10 w-10 shrink-0 rounded-full object-cover" width={48} height={48} />
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-bold leading-none">Ooveva</span>
              <span className="mt-1 block truncate font-meta text-[9px] uppercase text-muted-foreground">The In House Cafe</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="cafeOutline" size="sm" className="hidden sm:inline-flex">
              <a href="#menu">Menu</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="cafeOutline" size="icon" aria-label="Open navigation"><MenuIcon /></Button>
              </SheetTrigger>
              <SheetContent className="w-[min(86vw,22rem)] border-border bg-background p-6">
                <SheetTitle className="font-display text-2xl">Ooveva</SheetTitle>
                <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
                  {navItems.map(([label, id]) => (
                    <SheetClose asChild key={id}>
                      <a href={`#${id}`} className="flex min-h-14 items-center justify-between border-b border-border text-lg">
                        {label}<ChevronRight className="text-primary" />
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <Button asChild variant="cafe" size="cafe" className="mt-8 w-full">
                  <a href={business.directionsUrl} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight /></a>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative min-h-[min(860px,100svh)] overflow-hidden pt-16">
          <img src={heroImage} alt="Café table with coffee, a cold drink and plated food" className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_62%]" width={1088} height={1600} fetchPriority="high" />
          <div className="absolute inset-0 bg-overlay md:bg-overlay/80" />
          <div className="section-shell relative flex min-h-[calc(min(860px,100svh)-4rem)] items-end py-5 sm:py-8">
            <div className="glass-panel animate-rise w-full max-w-2xl rounded-2xl p-5 sm:p-7 lg:p-9">
              <p className="font-meta text-[10px] uppercase text-primary sm:text-xs">Subedari · Hanamkonda</p>
              <h1 className="mt-3 max-w-xl font-display text-[2.45rem] font-bold leading-[0.98] sm:text-6xl lg:text-7xl">Ooveva – The In House Cafe</h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/75 sm:text-base">A café and kitchen in Subedari, Hanamkonda, serving a menu across coffee, cold beverages, pizzas, sandwiches, pasta and more.</p>
              <div className="mt-6 grid gap-2.5 sm:flex">
                <Button asChild variant="cafe" size="cafe" className="sm:min-w-40"><a href="#menu"><UtensilsCrossed />View Menu</a></Button>
                <Button asChild variant="cafeOutline" size="cafe" className="sm:min-w-44"><a href={business.directionsUrl} target="_blank" rel="noreferrer"><MapPin />Get Directions</a></Button>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="scroll-mt-16 border-b border-border py-16 sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="The menu" title="Explore Our Menu" text="Browse the item names and prices from Ooveva’s supplied digital menu." />
            <div className="mt-7 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none]" role="tablist" aria-label="Menu categories">
              {visibleCategories.map((category) => (
                <Button key={category.name} variant={activeCategory === category.name ? "cafe" : "cafeOutline"} size="sm" className="h-10 shrink-0" onClick={() => setActiveCategory(category.name)} role="tab" aria-selected={activeCategory === category.name}>
                  {category.name}
                </Button>
              ))}
              {!showAll && <Button variant="ghost" size="sm" className="h-10 shrink-0 text-primary" onClick={() => setShowAll(true)}>All categories</Button>}
            </div>
            {showAll && (
              <div className="mb-5 flex flex-wrap gap-2">
                {menu.slice(6).map((category) => (
                  <Button key={category.name} variant={activeCategory === category.name ? "cafe" : "cafeOutline"} size="sm" onClick={() => setActiveCategory(category.name)}>{category.name}</Button>
                ))}
              </div>
            )}
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
              {activeMenu?.items.map((item) => (
                <article key={item.name} className="glass-panel group flex min-h-28 items-start justify-between gap-4 rounded-xl p-4 transition-transform duration-300 hover:-translate-y-0.5 sm:p-5">
                  <div className="min-w-0">
                    <p className="font-meta text-[9px] uppercase text-primary/80">{activeMenu.name}</p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-tight sm:text-xl">{item.name}</h3>
                    {item.description && <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>}
                    {item.options && <p className="mt-2 text-xs text-muted-foreground">2 options · choose in store</p>}
                  </div>
                  <span className="shrink-0 font-meta text-sm font-medium text-primary">{item.price ? `₹${item.price}` : "See menu"}</span>
                </article>
              ))}
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground">Items without a visible price in the supplied menu are marked “See menu”. Truncated source descriptions are omitted rather than completed.</p>
          </div>
        </section>

        <section id="about" className="scroll-mt-16 border-b border-border py-16 sm:py-24">
          <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div><SectionHeading eyebrow="About Ooveva" title="A café in the heart of Subedari" text="Ooveva – The In House Cafe is located behind Woodland, beside D-Mart in Hanamkonda. Its menu brings together café drinks, quick bites and substantial plates in one place." /></div>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img src={foodImage} alt="Illustrative café dish in warm editorial lighting" className="aspect-[4/3] w-full object-cover" width={912} height={1104} loading="lazy" />
              <span className="absolute bottom-3 left-3 rounded-full bg-background/85 px-3 py-1.5 font-meta text-[9px] uppercase text-muted-foreground backdrop-blur-md">Illustrative food photography</span>
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-16 border-b border-border py-16 sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Ooveva in view" title="The café" text="Real exterior and interior photographs supplied for Ooveva." />
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {gallery.map((image, index) => (
                <button key={image.src} type="button" onClick={() => setLightboxIndex(index)} className={`group relative overflow-hidden rounded-xl border border-border text-left ${index === 0 ? "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto" : "aspect-[3/4]"}`} aria-label={`Open ${image.label} photo`}>
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" width={768} height={1536} loading="lazy" />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/70 p-3 text-xs backdrop-blur-md"><span>{image.label}</span><ZoomIn className="h-4 w-4" /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="scroll-mt-16 py-16 sm:py-24">
          <div className="section-shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-panel rounded-2xl p-5 sm:p-8">
              <p className="font-meta text-[10px] uppercase text-primary">Visit Ooveva</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Find your way here</h2>
              <p className="mt-5 font-semibold">{business.name}</p>
              <address className="mt-2 not-italic leading-relaxed text-muted-foreground">{business.addressLines.map((line) => <span key={line} className="block">{line}</span>)}</address>
              <Button asChild variant="cafe" size="cafe" className="mt-7 w-full"><a href={business.directionsUrl} target="_blank" rel="noreferrer"><MapPin />Get Directions</a></Button>
            </div>
            <div className="min-h-80 overflow-hidden rounded-2xl border border-border bg-card lg:min-h-[28rem]">
              <iframe title="Map showing Ooveva – The In House Cafe in Hanamkonda" src={business.mapEmbedUrl} className="h-full min-h-80 w-full lg:min-h-[28rem]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 border-y border-border bg-card/35 py-16 sm:py-20">
          <div className="section-shell">
            <SectionHeading eyebrow="Contact" title="Plan your visit" text="Call or follow Ooveva using the verified public details below." />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ContactLink href={business.phoneUrl} icon={<Phone />} title="Call" detail={business.phoneDisplay} />
              <ContactLink href={business.instagramUrl} icon={<Instagram />} title="Instagram" detail="@cafe_ooveva" external />
            </div>
            <p className="mt-5 text-xs text-muted-foreground">Opening hours are not displayed because the available public sources conflict.</p>
          </div>
        </section>

        <section className="py-16 text-center sm:py-24">
          <div className="section-shell max-w-3xl">
            <p className="font-display text-3xl font-bold italic leading-tight sm:text-5xl">Good food. Good moments.<br /><span className="text-primary">See you at Ooveva.</span></p>
            <div className="mx-auto mt-7 grid max-w-md gap-2.5 sm:grid-cols-2">
              <Button asChild variant="cafe" size="cafe"><a href="#menu">View Menu</a></Button>
              <Button asChild variant="cafeOutline" size="cafe"><a href={business.directionsUrl} target="_blank" rel="noreferrer">Get Directions</a></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="h-12 w-12 rounded-full object-cover" width={48} height={48} /><span className="font-display text-xl font-bold">Ooveva</span></div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{business.addressLines.join(", ")}</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground" aria-label="Footer navigation">
            <a href="#menu" className="hover:text-foreground">Menu</a><a href="#contact" className="hover:text-foreground">Contact</a><a href={business.directionsUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">Google Maps</a><a href={business.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
          </nav>
        </div>
        <div className="section-shell mt-8 border-t border-border pt-5 font-meta text-[10px] text-muted-foreground">© 2026 Ooveva – The In House Cafe</div>
      </footer>

      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent className="max-h-[92vh] w-[calc(100%-1rem)] max-w-5xl overflow-hidden border-border bg-background p-2 sm:p-3">
          <DialogTitle className="sr-only">Ooveva photo gallery</DialogTitle>
          <DialogDescription className="sr-only">Enlarged real photograph of Ooveva café</DialogDescription>
          {lightboxIndex !== null && selectedImage && (
            <div className="relative">
              <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[84vh] w-full rounded-lg object-contain" />
              <Button variant="cafeOutline" size="icon" className="absolute right-2 top-2" onClick={() => setLightboxIndex(null)} aria-label="Close photo"><X /></Button>
              <div className="absolute inset-x-2 bottom-2 flex justify-between gap-2">
                <Button variant="cafeOutline" size="sm" onClick={() => setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)}>Previous</Button>
                <Button variant="cafeOutline" size="sm" onClick={() => setLightboxIndex((lightboxIndex + 1) % gallery.length)}>Next</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-2xl"><p className="font-meta text-[10px] uppercase text-primary">{eyebrow}</p><h2 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p></div>;
}

function ContactLink({ href, icon, title, detail, external = false }: { href: string; icon: React.ReactNode; title: string; detail: string; external?: boolean }) {
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="glass-panel flex min-h-24 items-center gap-4 rounded-xl p-4 transition-transform hover:-translate-y-0.5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground [&_svg]:h-5 [&_svg]:w-5">{icon}</span><span className="min-w-0"><span className="block font-semibold">{title}</span><span className="mt-1 block truncate text-sm text-muted-foreground">{detail}</span></span><ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-primary" /></a>;
}