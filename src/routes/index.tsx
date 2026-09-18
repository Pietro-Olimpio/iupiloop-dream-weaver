import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Facebook,
  Gamepad2,
  Headphones,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";

import logoAsset from "../assets/logo-iupiloop.png.asset.json";
import heroAsset from "../assets/2.jpg.asset.json";
import spaceAsset from "../assets/12.jpg.asset.json";
import kidsAsset from "../assets/horizontal-1-3.jpg.asset.json";
import debutanteAsset from "../assets/2.jpg.asset.json";
import adultAsset from "../assets/10.jpg.asset.json";
import weddingAsset from "../assets/8.jpg.asset.json";
import corporateAsset from "../assets/3.jpg.asset.json";
import generalAsset from "../assets/5.jpg.asset.json";
import gallery2 from "../assets/4.jpg.asset.json";
import gallery3 from "../assets/6.jpg.asset.json";
import gallery4 from "../assets/7.jpg.asset.json";
import gallery5 from "../assets/8.jpg.asset.json";
import gallery6 from "../assets/9.jpg.asset.json";
import gallery7 from "../assets/10.jpg.asset.json";
import gallery8 from "../assets/11.jpg.asset.json";
import gallery9 from "../assets/vertical-1.jpg.asset.json";
import gallery10 from "../assets/vertical-2.jpg.asset.json";
import gallery11 from "../assets/vertical-3.jpg.asset.json";
import gallery12 from "../assets/vertical-4.jpg.asset.json";
import gallery13 from "../assets/vertical-5.jpg.asset.json";
import gallery14 from "../assets/vertical-6.jpg.asset.json";

const PHONE = "5519971614505";
const whatsapp = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
const DEFAULT_MESSAGE = "Olá! Conheci o Iupiloop pelo site e gostaria de saber mais sobre um evento.";

const nav = [
  ["Início", "inicio"], ["O Buffet", "buffet"], ["Eventos", "eventos"],
  ["Cardápios", "cardapios"], ["Estrutura", "estrutura"], ["Galeria", "galeria"],
  ["Avaliações", "avaliacoes"], ["Contato", "contato"],
];

const events = [
  { title: "Festas infantis", image: kidsAsset.url, color: "bg-ember", text: "Uma celebração completa com brinquedos, games, buffet e decoração." },
  { title: "Festas de debutante", image: debutanteAsset.url, color: "bg-orchid", text: "Espaço, som, iluminação e atendimento para uma noite inesquecível." },
  { title: "Aniversários de adultos", image: adultAsset.url, color: "bg-tangerine", text: "Estrutura versátil para celebrar cada nova fase com quem importa." },
  { title: "Casamentos", image: weddingAsset.url, color: "bg-cyan", text: "Um espaço sofisticado com buffet e equipe para o seu grande momento." },
  { title: "Eventos corporativos", image: corporateAsset.url, color: "bg-cobalt", text: "Estrutura completa para encontros e celebrações da sua empresa." },
  { title: "Outros eventos", image: generalAsset.url, color: "bg-rose", text: "Converse com a equipe para criar a experiência adequada ao seu evento." },
];

const services = [
  [UtensilsCrossed, "Buffet completo"], [Sparkles, "Decoração completa"], [CalendarDays, "Assessoria"],
  [Users, "Equipe de atendimento"], [Users, "Gerente de festa"], [ChefHat, "Cozinheiros"],
  [Users, "Staff"], [Headphones, "Som"], [Lightbulb, "Iluminação"],
  [Gamepad2, "Brinquedos e games"], [Sparkles, "Doces, bolos e sorvete"], [UtensilsCrossed, "Cardápios variados"],
] as const;

const menus = [
  { name: "Start", duration: "3 horas", accent: "text-cyan", details: ["Cardápio de entrada para quem procura o melhor custo", "Exclusivo de segunda a quinta-feira", "Exceto feriados e vésperas"] },
  { name: "Cardápio 1", duration: "4 horas", accent: "text-amber", details: ["Cardápio intermediário", "Disponível durante a semana ou fim de semana", "Condições especiais de segunda a quinta-feira*"] },
  { name: "2 Premium", duration: "4 horas", accent: "text-orchid", details: ["Líder em vendas", "Farto e com grande variedade de itens", "Condições especiais de segunda a quinta-feira*"] },
  { name: "Gourmet", duration: "4 horas", accent: "text-rose", details: ["Opção sofisticada", "Serviço volante nas mesas", "Ilha de rechaud para almoço ou jantar"] },
];

const photos = [
  heroAsset.url, kidsAsset.url, gallery2.url, gallery3.url, gallery4.url, gallery5.url,
  gallery6.url, gallery7.url, gallery8.url, gallery9.url, gallery10.url, gallery11.url,
  gallery12.url, gallery13.url, gallery14.url,
];

const reviews = [
  ["Grace Kelly Ramos", "Melhor buffet da região! Cardápio, prestadores e estrutura diferenciada!"],
  ["Viviane Freitas Duarte", "Ótimo serviço! Ambiente, alimentação e equipe foram ótimos! Agradecemos muito!"],
  ["Graziele Bettio", "Experiência muito boa! Lugar incrível... Já fui em duas festas! Super indico!"],
  ["Edson Errera", "Sofisticado e acessível."],
  ["Maria Fernanda Tonchis Fernandes", "Festa maravilhosa! Comida excelente!"],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iupiloop Buffet Festas e Eventos | Americana - SP" },
      { name: "description", content: "Iupiloop Buffet Festas e Eventos em Americana/SP. Espaço completo para festas infantis, aniversários, debutantes, casamentos e eventos corporativos." },
      { property: "og:title", content: "Iupiloop Buffet Festas e Eventos | Americana - SP" },
      { property: "og:description", content: "Espaço completo para festas infantis, aniversários, debutantes, casamentos e eventos corporativos em Americana/SP." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "EventVenue", name: "Iupiloop Buffet Festas e Eventos",
        telephone: "+55 19 97161-4505", email: "falecom@iupiloop.com.br",
        address: { "@type": "PostalAddress", streetAddress: "Rua dos Topázios, 144", addressLocality: "Americana", addressRegion: "SP", postalCode: "13471-222", addressCountry: "BR" },
        sameAs: ["https://www.instagram.com/iupiloopbuffet/", "https://www.facebook.com/iupiloopbuffet"],
      }),
    }],
  }),
  component: Index,
});

function SafeImage({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} className={className} onError={(event) => { event.currentTarget.style.display = "none"; }} />;
}

function WhatsAppLink({ children, message = DEFAULT_MESSAGE, className = "" }: { children: React.ReactNode; message?: string; className?: string }) {
  return <a href={whatsapp(message)} target="_blank" rel="noreferrer" className={className}>{children}</a>;
}

function SectionHeading({ kicker, title, light = false }: { kicker: string; title: string; light?: boolean }) {
  return <div className="mb-10 max-w-3xl sm:mb-14"><p className="mb-3 font-mono text-xs uppercase text-ember">{kicker}</p><h2 className={`font-display text-4xl font-bold sm:text-5xl ${light ? "text-cream" : "text-ink"}`}>{title}</h2></div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [review, setReview] = useState(0);

  useEffect(() => {
    if (lightbox === null) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [lightbox]);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Olá! Gostaria de solicitar um orçamento para o Iupiloop Buffet.\n\nNome: ${data.get("nome")}\nWhatsApp: ${data.get("whatsapp")}\nTipo de evento: ${data.get("tipo")}\nData: ${data.get("data") || "A definir"}\nConvidados: ${data.get("convidados") || "A definir"}\nMensagem: ${data.get("mensagem") || "Sem mensagem adicional"}`;
    window.open(whatsapp(text), "_blank", "noopener,noreferrer");
  }

  return <>
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cream/15 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" aria-label="Iupiloop — início" className="shrink-0"><img src={logoAsset.url} alt="Iupiloop" className="h-12 w-auto brightness-0 invert" /></a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 xl:flex">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-semibold text-cream/75 transition-colors hover:text-cream">{label}</a>)}</nav>
        <div className="flex items-center gap-2">
          <WhatsAppLink className="hidden items-center rounded-md bg-amber px-4 py-3 text-sm font-bold text-ink transition hover:bg-cream sm:inline-flex">Solicitar orçamento</WhatsAppLink>
          <button type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center rounded-md border border-cream/25 text-cream xl:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {menuOpen && <nav aria-label="Navegação móvel" className="border-t border-cream/15 bg-ink px-5 py-5 xl:hidden">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-cream/10 py-3 text-sm font-semibold text-cream">{label}</a>)}</nav>}
    </header>

    <section id="inicio" className="relative flex min-h-[94svh] items-end overflow-hidden bg-ink">
      <SafeImage src={heroAsset.url} alt="Celebração realizada no Iupiloop Buffet" eager className="absolute inset-0 size-full object-cover motion-safe:animate-[hero-zoom_18s_ease-in-out_infinite_alternate]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 sm:px-8 sm:pb-24">
        <div className="max-w-4xl animate-rise"><p className="mb-4 font-mono text-xs uppercase text-amber">Iupiloop Buffet · Americana, SP</p><h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[.98] text-cream sm:text-7xl lg:text-8xl">Transformando sonhos em realidade</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-xl">Um espaço completo para transformar momentos especiais em celebrações inesquecíveis.</p></div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><WhatsAppLink className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-6 font-bold text-ink transition hover:bg-cream">Solicitar orçamento <ArrowRight size={18} /></WhatsAppLink><a href="#estrutura" className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/40 px-6 font-semibold text-cream transition hover:bg-cream/10">Conhecer o espaço</a></div>
      </div>
    </section>

    <section aria-label="Números do Iupiloop" className="bg-ink text-cream"><div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-px bg-cream/10 sm:grid-cols-3"><div className="bg-ink px-6 py-8 sm:px-8"><strong className="font-display text-3xl">Desde 2019</strong><p className="mt-1 text-sm text-cream/60">Experiência que acolhe</p></div><div className="bg-ink px-6 py-8 sm:px-8"><strong className="font-display text-3xl text-amber">+3.000 celebrações</strong><p className="mt-1 text-sm text-cream/60">Sonhos transformados em memórias</p></div><div className="bg-ink px-6 py-8 sm:px-8"><strong className="font-display text-3xl text-cyan">Buffet completo</strong><p className="mt-1 text-sm text-cream/60">Tudo preparado em um só lugar</p></div></div></section>

    <section id="buffet" className="bg-background"><div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2"><div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted"><SafeImage src={spaceAsset.url} alt="Salão amplo e preparado do Iupiloop Buffet" className="size-full object-cover transition duration-700 hover:scale-105" /><div className="absolute bottom-5 right-5 max-w-[220px] rounded-md border border-cream/30 bg-ink/75 p-5 text-cream backdrop-blur-xl"><strong className="font-display text-3xl text-amber">+3.000</strong><p className="mt-1 text-sm">sonhos transformados em celebrações</p></div></div><div><p className="mb-3 font-mono text-xs uppercase text-ember">O Buffet</p><h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">Cada detalhe pensado para celebrar.</h2><p className="mt-6 text-lg leading-relaxed text-ink-soft">Fundado em 2019, o Buffet Iupiloop une gastronomia diferenciada, espaço versátil e sofisticado e atendimento dedicado para tornar cada festa memorável.</p><p className="mt-4 leading-relaxed text-ink-soft">A estrutura completa e a equipe preparada acompanham cada evento com compromisso, do planejamento ao último momento da celebração.</p><WhatsAppLink className="mt-8 inline-flex items-center gap-2 font-bold text-ink underline decoration-amber decoration-2 underline-offset-8">Conheça nossas possibilidades <ArrowRight size={18} /></WhatsAppLink></div></div></section>

    <section id="eventos" className="bg-mist"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28"><SectionHeading kicker="Eventos" title="Encontre o evento perfeito para você" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{events.map((item) => <article key={item.title} className="group relative min-h-[420px] overflow-hidden rounded-lg bg-ink"><SafeImage src={item.image} alt={`Evento no Iupiloop — ${item.title}`} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-card-overlay" /><div className="absolute inset-x-0 bottom-0 p-6 text-cream"><span className={`mb-5 block h-1 w-10 rounded-full ${item.color}`} /><h3 className="font-display text-2xl font-semibold">{item.title}</h3><p className="mt-2 min-h-12 text-sm leading-relaxed text-cream/75">{item.text}</p><WhatsAppLink message={`Olá! Gostaria de saber mais sobre ${item.title.toLowerCase()} no Iupiloop Buffet.`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Quero saber mais <ArrowRight size={16} /></WhatsAppLink></div></article>)}</div></div></section>

    <section className="bg-ink text-cream"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28"><SectionHeading kicker="Uma experiência completa" title="Tudo o que o seu evento precisa." light /><div className="grid grid-cols-2 border-l border-t border-cream/10 sm:grid-cols-3 lg:grid-cols-4">{services.map(([Icon, label], index) => <div key={label} className="border-b border-r border-cream/10 p-5 sm:p-7"><Icon aria-hidden="true" className={index % 3 === 0 ? "text-amber" : index % 3 === 1 ? "text-cyan" : "text-rose"} /><p className="mt-5 font-display text-lg font-semibold">{label}</p></div>)}</div></div></section>

    <section id="estrutura" className="bg-background"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28"><SectionHeading kicker="Estrutura" title="Tudo preparado para o seu grande momento." /><div className="grid auto-rows-[220px] grid-cols-2 gap-3 lg:auto-rows-[280px] lg:grid-cols-4"><button type="button" aria-label="Ampliar foto do salão" onClick={() => setLightbox(0)} className="group col-span-2 row-span-2 overflow-hidden rounded-lg bg-muted"><SafeImage src={photos[0]} alt="Evento realizado no salão Iupiloop" className="size-full object-cover transition duration-700 group-hover:scale-105" /></button>{photos.slice(1,5).map((src, i) => <button key={src} type="button" aria-label={`Ampliar foto da estrutura ${i + 2}`} onClick={() => setLightbox(i + 1)} className="group overflow-hidden rounded-lg bg-muted"><SafeImage src={src} alt={`Estrutura e evento Iupiloop ${i + 2}`} className="size-full object-cover transition duration-700 group-hover:scale-105" /></button>)}</div><div className="mt-8 flex flex-wrap gap-2">{["Salões amplos", "Brinquedos", "Games", "Som", "Iluminação", "Buffet", "Cozinha e equipe", "Decoração"].map(x => <span key={x} className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink">{x}</span>)}</div></div></section>

    <section id="cardapios" className="bg-ink text-cream"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28"><SectionHeading kicker="Cardápios" title="Quatro propostas para celebrar." light /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{menus.map((item) => <article key={item.name} className="flex min-h-[400px] flex-col rounded-lg border border-cream/15 bg-cream/5 p-6 backdrop-blur-md"><p className={`font-mono text-xs uppercase ${item.accent}`}>{item.name}</p><h3 className="mt-3 font-display text-3xl font-semibold">{item.duration}</h3><ul className="mt-8 flex-1 space-y-4">{item.details.map(detail => <li key={detail} className="flex gap-3 text-sm leading-relaxed text-cream/70"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber" />{detail}</li>)}</ul><WhatsAppLink message={`Olá! Gostaria de saber mais sobre o ${item.name} do Iupiloop Buffet.`} className="mt-8 inline-flex min-h-11 items-center justify-between border-t border-cream/15 pt-5 text-sm font-bold">Quero saber mais <ArrowRight size={17} /></WhatsAppLink></article>)}</div><div className="mt-8 border-l-2 border-amber pl-5"><p className="font-semibold">Bônus divulgado: +20 adultos e +40 crianças de cortesia em todos os pacotes.</p><p className="mt-2 text-sm text-cream/55">*Condições especiais para os Cardápios 1, 2 Premium e Gourmet em datas de semana, de segunda a quinta-feira, exceto feriados e vésperas. Consulte a equipe.</p></div></div></section>

    <section className="bg-background"><div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.9fr_1.1fr]"><div><p className="mb-3 font-mono text-xs uppercase text-orchid">Do seu jeito</p><h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">Seu evento começa com uma boa conversa.</h2><p className="mt-6 text-lg leading-relaxed text-ink-soft">Decoração, alimentação, doces, bolo, entretenimento, som, iluminação e assessoria se encontram para formar uma experiência adequada ao seu momento.</p><WhatsAppLink message="Olá! Gostaria de montar meu evento com a equipe do Iupiloop Buffet." className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-ink px-6 font-bold text-cream">Monte seu evento com a gente <ArrowRight size={18} /></WhatsAppLink></div><div className="grid grid-cols-2 gap-px bg-line border border-line">{["Decoração","Alimentação","Doces e bolo","Entretenimento","Som e iluminação","Assessoria"].map((x,i)=><div key={x} className="bg-background p-6 sm:p-8"><span className={`block size-2 rounded-full ${["bg-ember","bg-amber","bg-orchid","bg-cyan","bg-rose","bg-cobalt"][i]}`} /><p className="mt-5 font-display text-lg font-semibold text-ink">{x}</p></div>)}</div></div></section>

    <section className="bg-mist"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28"><SectionHeading kicker="Inspirações" title="Inspire-se para o seu evento" /><div className="grid gap-5 lg:grid-cols-3">{[{img:gallery3.url,title:"Cenários que transformam"},{img:gallery4.url,title:"Experiências para todas as idades"},{img:gallery8.url,title:"Sabores que fazem parte da festa"}].map(item=><article key={item.title} className="overflow-hidden rounded-lg bg-card"><div className="aspect-[4/3] overflow-hidden bg-muted"><SafeImage src={item.img} alt={item.title} className="size-full object-cover transition duration-700 hover:scale-105" /></div><div className="p-6"><h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">Veja momentos reais que já se transformaram em memórias no Iupiloop.</p><WhatsAppLink message="Olá! Vi no site um evento que gostei e gostaria de saber se é possível fazer algo parecido no meu evento." className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink">Quero saber mais <ArrowRight size={16}/></WhatsAppLink></div></article>)}</div></div></section>

    <section id="galeria" className="bg-ink text-cream"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28"><SectionHeading kicker="Galeria" title="Momentos especiais, memórias para a vida toda." light /><div className="columns-2 gap-3 md:columns-3 lg:columns-4">{photos.map((src,i)=><button key={src} type="button" aria-label={`Ampliar foto da galeria ${i+1}`} onClick={()=>setLightbox(i)} className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-lg bg-cream/5"><SafeImage src={src} alt={`Evento real realizado no Iupiloop ${i+1}`} className="w-full object-cover transition duration-700 group-hover:scale-105" /></button>)}</div></div></section>

    <section id="avaliacoes" className="bg-background"><div className="mx-auto max-w-[1100px] px-5 py-20 text-center sm:px-8 sm:py-28"><p className="mb-5 font-mono text-xs uppercase text-cobalt">Avaliações dos nossos clientes</p><div aria-label="5 estrelas" className="mb-7 text-xl text-amber">★★★★★</div><blockquote className="min-h-[150px] font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">“{reviews[review][1]}”</blockquote><p className="mt-7 font-mono text-xs uppercase text-ink-soft">{reviews[review][0]} · Avaliação no Google</p><div className="mt-8 flex justify-center gap-2"><button type="button" aria-label="Avaliação anterior" onClick={()=>setReview((review-1+reviews.length)%reviews.length)} className="grid size-11 place-items-center rounded-full border border-line text-ink"><ChevronLeft /></button><button type="button" aria-label="Próxima avaliação" onClick={()=>setReview((review+1)%reviews.length)} className="grid size-11 place-items-center rounded-full border border-line text-ink"><ChevronRight /></button></div><WhatsAppLink className="mt-10 inline-flex min-h-12 items-center rounded-md bg-ink px-6 font-bold text-cream">Quero viver essa experiência</WhatsAppLink></div></section>

    <section className="relative overflow-hidden bg-ink"><SafeImage src={gallery5.url} alt="Espaço Iupiloop pronto para receber uma visita" className="absolute inset-0 size-full object-cover opacity-35" /><div className="absolute inset-0 bg-visit-overlay"/><div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32"><div className="max-w-2xl"><p className="mb-3 font-mono text-xs uppercase text-cyan">Agendamento</p><h2 className="font-display text-4xl font-bold text-cream sm:text-6xl">Venha conhecer o Iupiloop</h2><p className="mt-6 text-lg leading-relaxed text-cream/75">Nada melhor do que conhecer pessoalmente o espaço onde seu momento especial vai acontecer.</p><WhatsAppLink message="Olá! Gostaria de agendar uma visita ao Iupiloop Buffet." className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-amber px-6 font-bold text-ink">Agendar uma visita <CalendarDays size={18}/></WhatsAppLink></div></div></section>

    <section className="bg-mist"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2"><div><p className="mb-3 font-mono text-xs uppercase text-ember">Localização</p><h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">No coração de Americana.</h2><address className="mt-6 not-italic leading-relaxed text-ink-soft">Rua dos Topázios, 144<br/>Jardim Bela Vista<br/>Americana — SP · CEP 13471-222</address><a href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Topázios+144+Jardim+Bela+Vista+Americana+SP+13471-222" target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-ink px-6 font-bold text-cream">Como chegar <ExternalLink size={17}/></a></div><div className="min-h-[380px] overflow-hidden rounded-lg border border-line"><iframe title="Mapa do Iupiloop Buffet" loading="lazy" className="size-full min-h-[380px]" src="https://www.google.com/maps?q=Rua%20dos%20Top%C3%A1zios%2C%20144%20-%20Jardim%20Bela%20Vista%2C%20Americana%20-%20SP%2C%2013471-222&output=embed" /></div></div></section>

    <section id="contato" className="bg-background"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-3 font-mono text-xs uppercase text-orchid">Contato</p><h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">Conte como você imagina seu evento.</h2><div className="mt-8 space-y-5 text-ink-soft"><a href="tel:+5519971614505" className="flex items-center gap-3 hover:text-ink"><MessageCircle className="text-cyan"/> (19) 97161-4505</a><a href="mailto:falecom@iupiloop.com.br" className="flex items-center gap-3 hover:text-ink"><Mail className="text-ember"/> falecom@iupiloop.com.br</a><a href="mailto:atendimento@iupiloop.com.br" className="flex items-center gap-3 hover:text-ink"><Mail className="text-orchid"/> atendimento@iupiloop.com.br</a><div className="flex items-start gap-3"><MapPin className="mt-1 shrink-0 text-amber"/><span>Rua dos Topázios, 144 — Jardim Bela Vista<br/>Americana — SP</span></div></div></div><form onSubmit={submitQuote} className="grid gap-5 rounded-lg border border-line bg-card p-6 sm:grid-cols-2 sm:p-8"><label className="field-label">Nome<input required name="nome" className="form-field" placeholder="Seu nome"/></label><label className="field-label">WhatsApp<input required name="whatsapp" type="tel" className="form-field" placeholder="(19) 99999-9999"/></label><label className="field-label">Tipo de evento<select required name="tipo" className="form-field"><option value="">Selecione</option>{events.map(e=><option key={e.title}>{e.title}</option>)}</select></label><label className="field-label">Data do evento<input name="data" type="date" className="form-field"/></label><label className="field-label sm:col-span-2">Quantidade aproximada de convidados<input name="convidados" type="number" min="1" className="form-field" placeholder="Ex.: 100"/></label><label className="field-label sm:col-span-2">Mensagem<textarea name="mensagem" rows={4} className="form-field resize-y" placeholder="Conte um pouco sobre o evento"/></label><button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-6 font-bold text-ink transition hover:bg-ink hover:text-cream sm:col-span-2">Solicitar orçamento <ArrowRight size={18}/></button></form></div></section>

    <section className="relative overflow-hidden"><SafeImage src={heroAsset.url} alt="Celebração no Iupiloop Buffet" className="h-[480px] w-full object-cover"/><div className="absolute inset-0 bg-ink/65"/><div className="absolute inset-0 grid place-items-center px-5 text-center"><div className="max-w-3xl"><h2 className="font-display text-4xl font-bold text-cream sm:text-6xl">Seu próximo grande momento começa aqui.</h2><p className="mx-auto mt-5 max-w-xl text-cream/75">Fale com a equipe do Iupiloop e dê o primeiro passo para a sua celebração.</p><WhatsAppLink className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-amber px-7 font-bold text-ink">Solicitar orçamento <MessageCircle size={18}/></WhatsAppLink></div></div></section>

    <footer className="bg-ink text-cream/65"><div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8"><div className="grid gap-10 border-b border-cream/10 pb-10 md:grid-cols-3"><div><img src={logoAsset.url} alt="Iupiloop Buffet Festas e Eventos" className="h-16 w-auto brightness-0 invert"/><p className="mt-4 text-sm">Transformando sonhos em realidade</p></div><div><p className="font-display font-semibold text-cream">Iupiloop Buffet Festas e Eventos</p><p className="mt-3 text-sm leading-relaxed">Rua dos Topázios, 144<br/>Jardim Bela Vista · Americana — SP<br/>(19) 97161-4505</p></div><div><p className="font-display font-semibold text-cream">Acompanhe</p><div className="mt-4 flex gap-3"><a href="https://www.instagram.com/iupiloopbuffet/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-cream/20 hover:text-cream"><Instagram/></a><a href="https://www.facebook.com/iupiloopbuffet" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-11 place-items-center rounded-full border border-cream/20 hover:text-cream"><Facebook/></a></div></div></div><div className="flex flex-col gap-3 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Iupiloop Buffet Festas e Eventos.</p><a href="mailto:falecom@iupiloop.com.br" className="hover:text-cream">falecom@iupiloop.com.br</a></div></div></footer>

    <WhatsAppLink className="fixed bottom-5 right-5 z-30 inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-4 font-bold text-whatsapp-foreground shadow-xl transition hover:scale-105" message={DEFAULT_MESSAGE}><MessageCircle size={21}/><span className="hidden sm:inline">WhatsApp</span></WhatsAppLink>

    {lightbox !== null && <div role="dialog" aria-modal="true" aria-label="Foto ampliada" className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4" onClick={()=>setLightbox(null)}><button type="button" aria-label="Fechar foto" className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-cream/30 text-cream" onClick={()=>setLightbox(null)}><X/></button><SafeImage src={photos[lightbox]} alt="Evento realizado no Iupiloop em tamanho ampliado" className="max-h-[88vh] max-w-full rounded-lg object-contain" /></div>}
  </>;
}