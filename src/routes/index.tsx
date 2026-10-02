import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, MessageCircle, MapPin, Clock, Users, Menu, X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import zakReal from "@/assets/zak-real.png.asset.json";
import trek from "@/assets/trek.jpg";
import horse from "@/assets/horse.jpg";
import city from "@/assets/city.jpg";
import canyon from "@/assets/canyon.jpg";

const WA = "https://wa.me/996556888854";
const IG = "https://www.instagram.com/zak.guide/?hl=en";
const wa = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zak Guide — Private Tours in Kyrgyzstan" },
      { name: "description", content: "Tailor-made treks, horseback rides and cultural tours across Kyrgyzstan with local guide Zak. Book instantly on WhatsApp." },
      { property: "og:title", content: "Zak Guide — Discover the True Kyrgyzstan" },
      { property: "og:description", content: "Unforgettable, tailor-made adventures through the heart of Central Asia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tours = [
  { img: trek, title: "Ala-Kul Lake Trek", days: "3 days", group: "2–8", place: "Karakol", desc: "Cross a 3,900 m pass to the turquoise jewel of the Tian Shan, camping under endless stars." },
  { img: horse, title: "Song-Kul by Horseback", days: "4 days", group: "2–6", place: "Naryn", desc: "Ride with nomad herders across high pastures and sleep in a traditional family yurt." },
  { img: city, title: "Bishkek & Culture Day", days: "1 day", group: "1–10", place: "Bishkek", desc: "Bazaars, Soviet mosaics, felt-making and a home-cooked beshbarmak feast." },
];

const gallery = [hero, canyon, trek, horse, city];

const igPosts = [
  { id: "Dd1s6tKobKT", type: "reel", url: "https://www.instagram.com/reels/Dd1s6tKobKT/" },
  { id: "DdRbGheROh7", type: "p", url: "https://www.instagram.com/p/DdRbGheROh7/" },
  { id: "DbGmNnPIIhW", type: "p", url: "https://www.instagram.com/p/DbGmNnPIIhW/" },
];

function Btn({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" | "dark" }) {
  const styles = {
    primary: "bg-secondary text-secondary-foreground hover:brightness-110 shadow-lg shadow-secondary/30",
    ghost: "border border-on-image/50 text-on-image hover:bg-on-image/10",
    dark: "bg-primary text-primary-foreground hover:brightness-125",
  }[variant];
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition ${styles}`}>
      {children}
    </a>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["About", "#about"], ["Tours", "#tours"], ["Instagram", "#instagram"]];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-background/90 shadow-sm backdrop-blur" : ""}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className={`font-display text-xl font-black tracking-tight ${scrolled ? "text-primary" : "text-on-image"}`}>ZAK<span className="text-secondary">.</span>GUIDE</a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map(([l, h]) => (
              <a key={h} href={h} className={`text-sm font-medium ${scrolled ? "text-foreground" : "text-on-image"} hover:text-secondary`}>{l}</a>
            ))}
            <Btn href={wa("Hi Zak! I'd like to book an adventure.")}>Book Now</Btn>
          </div>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-foreground" : "text-on-image"}`}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="flex flex-col gap-4 bg-background px-5 pb-6 md:hidden">
            {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="font-medium">{l}</a>)}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img src={hero} alt="Song-Kul lake with yurts at sunset in Kyrgyzstan" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/40 to-overlay/10" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:pb-28">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent"><MapPin className="h-4 w-4" /> Kyrgyzstan · Central Asia</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] text-on-image sm:text-6xl md:text-7xl">
            Discover the True Kyrgyzstan <span className="text-secondary">with Zak.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-on-image/85">Unforgettable, tailor-made adventures through the heart of Central Asia.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={wa("Hi Zak! I'd like to book an adventure in Kyrgyzstan.")}><MessageCircle className="h-4 w-4" /> Book Your Adventure</Btn>
            <Btn href="#tours" variant="ghost">Explore Tours</Btn>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
        <div className="relative">
          <img src={zakReal.url} alt="Zak, local Kyrgyz mountain guide" loading="lazy" width={800} height={1008} className="aspect-[4/5] w-full rounded-3xl object-cover" />
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl md:-right-6">
            <p className="font-display text-3xl font-black">10+</p>
            <p className="text-xs uppercase tracking-widest opacity-80">years guiding</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Salam, I'm Zak</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-5xl">Born in these mountains. Proud to share them.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I grew up between Bishkek and my grandparents' summer yurt in the high pastures. Today I guide travelers along the trails, passes and lakeshores I've known my whole life.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every trip is personal — I handle transport, permits, homestays and meals so you can simply soak in the landscapes, the horses, the tea and the stories.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
            {[["500+", "Happy guests"], ["EN · RU · KG", "Languages"], ["24/7", "On WhatsApp"]].map(([a, b]) => (
              <div key={b}><p className="font-display text-lg font-extrabold text-primary">{a}</p><p className="text-xs text-muted-foreground">{b}</p></div>
            ))}
          </div>
          <div className="mt-8"><Btn href={wa("Hi Zak! I have a question about a trip.")} variant="dark"><MessageCircle className="h-4 w-4" /> Chat with Zak</Btn></div>
        </div>
      </section>

      {/* Tours */}
      <section id="tours" className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Popular Experiences</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-primary sm:text-5xl">Adventures built around you</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tours.map((t) => (
              <article key={t.title} className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img src={t.img} alt={t.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">{t.place}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-primary">{t.title}</h3>
                  <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{t.days}</span>
                    <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{t.group} people</span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                  <div className="mt-6"><Btn href={wa(`Hi Zak! I'd like to book the "${t.title}" tour.`)}>Book This Tour</Btn></div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">
            Want something custom? <a href={wa("Hi Zak! I'd like a custom itinerary.")} target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary underline underline-offset-4">Inquire about a private itinerary</a>
          </p>
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">@zak.guide</p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-5xl">Follow the Adventure on Instagram</h2>
          </div>
          <Btn href={IG} variant="dark"><Instagram className="h-4 w-4" /> Follow @zak.guide</Btn>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {igPosts.map((post) => (
            <div key={post.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <iframe
                src={`https://www.instagram.com/${post.type === "reel" ? "reel" : "p"}/${post.id}/embed`}
                title="Instagram post by @zak.guide"
                width="100%"
                height="560"
                frameBorder={0}
                scrolling="no"
                loading="lazy"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Latest reels from Zak's adventures — <a href={IG} target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary underline underline-offset-4">see more on Instagram</a>
        </p>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden">
        <img src={canyon} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="text-3xl font-black text-on-image sm:text-5xl">Your Kyrgyz story starts with one message.</h2>
          <p className="mt-4 text-on-image/80">Tell Zak your dates and dream — he'll reply personally on WhatsApp.</p>
          <div className="mt-8"><Btn href={wa("Hi Zak! I'd like to plan a trip.")}><MessageCircle className="h-4 w-4" /> Contact Zak on WhatsApp</Btn></div>
        </div>
      </section>

      <footer className="bg-overlay py-12 text-on-image/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
          <p className="font-display text-lg font-black text-on-image">ZAK<span className="text-secondary">.</span>GUIDE</p>
          <div className="flex gap-6 text-sm">
            {links.map(([l, h]) => <a key={h} href={h} className="hover:text-on-image">{l}</a>)}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-on-image">Contact</a>
          </div>
          <div className="flex gap-3">
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-on-image/10 p-3 hover:bg-secondary"><Instagram className="h-5 w-5 text-on-image" /></a>
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full bg-on-image/10 p-3 hover:bg-secondary"><MessageCircle className="h-5 w-5 text-on-image" /></a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs">© {new Date().getFullYear()} Zak Guide · Kyrgyzstan</p>
      </footer>

      {/* Sticky mobile CTA */}
      <a href={wa("Hi Zak! I'd like to book an adventure.")} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-full bg-secondary py-4 font-semibold text-secondary-foreground shadow-2xl md:hidden">
        <MessageCircle className="h-5 w-5" /> Book Your Adventure
      </a>
    </div>
  );
}
