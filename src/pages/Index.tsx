import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  hero: "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/287e9195-6be4-43f4-9044-f6745b235982.jpg",
  indoor: "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/82d55d68-25c0-49e7-b3ea-ab6173f555ab.jpg",
  resort: "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/7a2675db-f125-4314-bfb1-ac20998319ae.jpg",
  rooftop: "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/ac20db82-3eeb-48c4-9513-07d2eae6b62c.jpg",
  waterpark: "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/7e048205-663f-44a9-b7ea-d4a01982a7e6.jpg",
  spa: "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/d31800b5-1d50-4661-bcca-87e57c2288cb.jpg",
};

const PROJECTS = [
  { id: 1, title: "Частный бассейн с инфинити", category: "Частные", location: "Подмосковье", year: "2024", img: IMAGES.hero, area: "85 м²" },
  { id: 2, title: "Спортивный комплекс", category: "Спортивные", location: "Москва", year: "2024", img: IMAGES.indoor, area: "1200 м²" },
  { id: 3, title: "Гостиничный бассейн", category: "Коммерческие", location: "Сочи", year: "2023", img: IMAGES.resort, area: "450 м²" },
  { id: 4, title: "Бассейн на крыше", category: "Частные", location: "Москва", year: "2023", img: IMAGES.rooftop, area: "120 м²" },
  { id: 5, title: "Аквапарк", category: "Коммерческие", location: "Краснодар", year: "2022", img: IMAGES.waterpark, area: "3500 м²" },
  { id: 6, title: "СПА-комплекс", category: "Коммерческие", location: "Санкт-Петербург", year: "2022", img: IMAGES.spa, area: "280 м²" },
];

const CATEGORIES = ["Все проекты", "Частные", "Спортивные", "Коммерческие"];

const SERVICES = [
  { icon: "Waves", title: "Проектирование", desc: "Архитектурные и инженерные решения для любого типа бассейна" },
  { icon: "Wrench", title: "Строительство", desc: "Полный цикл строительных работ с гарантией качества" },
  { icon: "Settings", title: "Оборудование", desc: "Системы фильтрации, подогрева и автоматики ведущих брендов" },
  { icon: "Sparkles", title: "Отделка", desc: "Мозаика, плитка, полимерные покрытия — любые материалы" },
  { icon: "Shield", title: "Обслуживание", desc: "Регулярный уход, химия воды, ремонт и модернизация" },
  { icon: "Leaf", title: "Ландшафт", desc: "Комплексное благоустройство прилегающей территории" },
];

const PROCESS = [
  { num: "01", title: "Консультация", desc: "Встреча с нашим специалистом для обсуждения вашего проекта, пожеланий и бюджета" },
  { num: "02", title: "Проектирование", desc: "Разработка 3D-визуализации, технического проекта и сметы" },
  { num: "03", title: "Согласование", desc: "Утверждение проекта, заключение договора и планирование работ" },
  { num: "04", title: "Строительство", desc: "Поэтапное выполнение работ с фотоотчётом и контролем качества" },
  { num: "05", title: "Сдача объекта", desc: "Финальная проверка, обучение пользованию системами, гарантийный документ" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Все проекты");
  const [lightbox, setLightbox] = useState<null | typeof PROJECTS[0]>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lightbox]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  const filtered = activeCategory === "Все проекты"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "about", label: "О компании" },
    { id: "portfolio", label: "Портфолио" },
    { id: "services", label: "Услуги" },
    { id: "process", label: "Процесс" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-primary/60 rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rotate-0" />
            </div>
            <span className="font-cormorant text-xl tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
              АКВА<span className="text-primary">СТРОЙ</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="nav-link">{l.label}</button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:block btn-primary text-xs"
            style={{ background: "hsl(196 60% 45%)", color: "hsl(210 20% 6%)", padding: "10px 24px", letterSpacing: "0.15em", fontSize: "0.65rem", textTransform: "uppercase", fontWeight: 500, transition: "all 0.3s", border: "1px solid transparent" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "hsl(196 60% 45%)"; (e.target as HTMLElement).style.borderColor = "hsl(196 60% 45%)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = "hsl(196 60% 45%)"; (e.target as HTMLElement).style.color = "hsl(210 20% 6%)"; (e.target as HTMLElement).style.borderColor = "transparent"; }}
          >
            Заказать проект
          </button>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden nav-glass border-t border-border/40">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(l => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="nav-link text-left py-1">{l.label}</button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <img src={IMAGES.hero} alt="Бассейн" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="section-label animate-fade-in-up mb-6">Профессиональное строительство</p>
            <h1 className="text-6xl md:text-8xl text-foreground animate-fade-in-up delay-100 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.05 }}>
              Бассейны<br />
              <span className="text-primary">высшего</span><br />
              класса
            </h1>
            <div className="gold-line animate-fade-in-up delay-200 mb-6" />
            <p className="text-muted-foreground text-lg animate-fade-in-up delay-300 mb-10 max-w-lg leading-relaxed" style={{ fontWeight: 300 }}>
              Более 15 лет мы создаём водные объекты, которые становятся centrepiece архитектурных проектов
            </p>
            <div className="flex gap-4 flex-wrap animate-fade-in-up delay-400">
              <button
                onClick={() => scrollTo("portfolio")}
                style={{ background: "hsl(196 60% 45%)", color: "hsl(210 20% 6%)", padding: "14px 36px", letterSpacing: "0.15em", fontSize: "0.7rem", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", border: "1px solid transparent", transition: "all 0.3s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "hsl(196 60% 45%)"; (e.target as HTMLElement).style.borderColor = "hsl(196 60% 45%)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = "hsl(196 60% 45%)"; (e.target as HTMLElement).style.color = "hsl(210 20% 6%)"; (e.target as HTMLElement).style.borderColor = "transparent"; }}
              >
                Смотреть проекты
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                style={{ background: "transparent", color: "hsl(210 15% 80%)", padding: "14px 36px", letterSpacing: "0.15em", fontSize: "0.7rem", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", border: "1px solid rgba(255,255,255,0.25)", transition: "all 0.3s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "hsl(196 60% 45%)"; (e.target as HTMLElement).style.color = "hsl(196 60% 45%)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)"; (e.target as HTMLElement).style.color = "hsl(210 15% 80%)"; }}
              >
                Получить консультацию
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
          <span className="section-label text-muted-foreground" style={{ fontSize: "0.55rem" }}>SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </div>

        {/* Stats overlay */}
        <div className="absolute bottom-0 right-0 hidden lg:flex">
          {[
            { num: "200+", label: "Объектов" },
            { num: "15", label: "Лет опыта" },
            { num: "98%", label: "Довольных клиентов" },
          ].map((s, i) => (
            <div key={i} className="px-8 py-6 border-l border-white/10" style={{ background: "rgba(5,10,18,0.7)", backdropFilter: "blur(10px)" }}>
              <div className="stat-number text-3xl text-primary">{s.num}</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-widest uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-label mb-5">О компании</p>
              <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.1 }}>
                Строим не просто<br />
                <span className="text-primary">бассейны</span>,<br />
                строим впечатления
              </h2>
              <div className="gold-line mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                АкваСтрой — федеральная компания с 2009 года. Мы специализируемся на проектировании и строительстве бассейнов любой сложности: от частных домашних до крупных спортивных и развлекательных комплексов.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Наша команда — это 120 специалистов: инженеры, архитекторы, строители и технологи воды с многолетним опытом работы на объектах по всей России.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "200+", label: "Проектов" },
                  { num: "15", label: "Лет на рынке" },
                  { num: "120", label: "Специалистов" },
                ].map((s, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <div className="stat-number text-4xl text-primary">{s.num}</div>
                    <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={IMAGES.resort} alt="О компании" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 max-w-xs">
                <div className="text-primary text-sm tracking-wider uppercase mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>Гарантия</div>
                <div className="stat-number text-3xl text-foreground">5 лет</div>
                <div className="text-muted-foreground text-sm mt-1">На все выполненные работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-5">Наши работы</p>
              <h2 className="text-5xl md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.1 }}>
                Портфолио<br />
                <span className="text-primary">проектов</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 20px",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid",
                    borderColor: activeCategory === cat ? "hsl(196 60% 45%)" : "rgba(255,255,255,0.15)",
                    background: activeCategory === cat ? "hsl(196 60% 45%)" : "transparent",
                    color: activeCategory === cat ? "hsl(210 20% 6%)" : "hsl(210 10% 60%)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="gallery-item"
                style={{ aspectRatio: i === 0 ? "16/10" : "4/3" }}
                onClick={() => setLightbox(project)}
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                <div className="gallery-overlay absolute inset-0 flex flex-col justify-end p-6">
                  <span className="section-label mb-1">{project.category}</span>
                  <h3 className="text-xl text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{project.title}</h3>
                  <div className="flex gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1"><Icon name="MapPin" size={12} />{project.location}</span>
                    <span>{project.year}</span>
                    <span>{project.area}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100">
                  <div className="w-8 h-8 bg-primary/80 flex items-center justify-center">
                    <Icon name="Expand" size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-5">Что мы делаем</p>
            <h2 className="text-5xl md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Полный спектр <span className="text-primary">услуг</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card p-8 bg-card">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-6 text-primary">
                  <Icon name={s.icon} fallback="Circle" size={22} />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-24">
              <p className="section-label mb-5">Как мы работаем</p>
              <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.1 }}>
                Процесс<br />
                <span className="text-primary">работы</span>
              </h2>
              <div className="gold-line mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-10">
                Мы ведём каждый проект от первой встречи до сдачи объекта. Никаких неожиданностей — только прозрачный процесс и соблюдение сроков.
              </p>
              <div className="border border-border p-6 bg-card">
                <div className="text-muted-foreground text-xs tracking-widest uppercase mb-2">Среднее время строительства</div>
                <div className="stat-number text-5xl text-primary">2–6</div>
                <div className="text-muted-foreground mt-1">месяцев в зависимости от объекта</div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {PROCESS.map((step, i) => (
                <div key={i} className="relative flex gap-6 process-step">
                  {i < PROCESS.length - 1 && <div className="process-connector" />}
                  <div className="flex-shrink-0 w-12 h-12 border border-primary/50 flex items-center justify-center text-primary relative z-10 bg-muted">
                    <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "0.7rem", fontWeight: 500 }}>{step.num}</span>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "hsl(210 20% 6%)" }}>
            Готовы обсудить ваш проект?
          </h2>
          <p className="mb-10 text-sm" style={{ color: "hsl(210 20% 20%)", letterSpacing: "0.05em" }}>
            Консультация бесплатна. Сориентируем по стоимости и срокам за 24 часа.
          </p>
          <button
            onClick={() => scrollTo("contacts")}
            style={{ background: "hsl(210 20% 6%)", color: "hsl(196 60% 70%)", padding: "16px 48px", letterSpacing: "0.2em", fontSize: "0.7rem", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", border: "1px solid transparent", transition: "all 0.3s" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.borderColor = "hsl(210 20% 6%)"; (e.target as HTMLElement).style.color = "hsl(210 20% 6%)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = "hsl(210 20% 6%)"; (e.target as HTMLElement).style.borderColor = "transparent"; (e.target as HTMLElement).style.color = "hsl(196 60% 70%)"; }}
          >
            Оставить заявку
          </button>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="section-label mb-5">Свяжитесь с нами</p>
              <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.1 }}>
                Обсудим<br />
                <span className="text-primary">ваш проект</span>
              </h2>
              <div className="gold-line mb-10" />

              <div className="flex flex-col gap-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "info@aquastroy.ru" },
                  { icon: "MapPin", label: "Офис", value: "Москва, ул. Строителей, 1" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <Icon name={c.icon} fallback="Circle" size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground tracking-widest uppercase mb-1">{c.label}</div>
                      <div className="text-foreground">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Оставить заявку</h3>

              <div className="flex flex-col gap-4">
                {[
                  { placeholder: "Ваше имя", type: "text" },
                  { placeholder: "Телефон", type: "tel" },
                  { placeholder: "Email", type: "email" },
                ].map((f, i) => (
                  <input
                    key={i}
                    type={f.type}
                    placeholder={f.placeholder}
                    style={{
                      background: "hsl(210 20% 6%)",
                      border: "1px solid hsl(210 15% 18%)",
                      color: "hsl(210 15% 80%)",
                      padding: "14px 16px",
                      fontSize: "0.875rem",
                      outline: "none",
                      transition: "border-color 0.3s",
                      fontFamily: "'IBM Plex Sans', sans-serif",
                    }}
                    onFocus={e => (e.target.style.borderColor = "hsl(196 60% 45%)")}
                    onBlur={e => (e.target.style.borderColor = "hsl(210 15% 18%)")}
                  />
                ))}

                <select
                  style={{
                    background: "hsl(210 20% 6%)",
                    border: "1px solid hsl(210 15% 18%)",
                    color: "hsl(210 15% 55%)",
                    padding: "14px 16px",
                    fontSize: "0.875rem",
                    outline: "none",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  <option value="">Тип объекта</option>
                  <option>Частный бассейн</option>
                  <option>Спортивный объект</option>
                  <option>Коммерческий объект</option>
                  <option>СПА / Wellness</option>
                </select>

                <textarea
                  placeholder="Краткое описание проекта"
                  rows={4}
                  style={{
                    background: "hsl(210 20% 6%)",
                    border: "1px solid hsl(210 15% 18%)",
                    color: "hsl(210 15% 80%)",
                    padding: "14px 16px",
                    fontSize: "0.875rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.3s",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                  onFocus={e => (e.target.style.borderColor = "hsl(196 60% 45%)")}
                  onBlur={e => (e.target.style.borderColor = "hsl(210 15% 18%)")}
                />

                <button
                  style={{
                    background: "hsl(196 60% 45%)",
                    color: "hsl(210 20% 6%)",
                    padding: "16px",
                    letterSpacing: "0.2em",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    cursor: "pointer",
                    border: "1px solid transparent",
                    transition: "all 0.3s",
                    marginTop: "4px",
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "hsl(196 60% 45%)"; (e.target as HTMLElement).style.borderColor = "hsl(196 60% 45%)"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.background = "hsl(196 60% 45%)"; (e.target as HTMLElement).style.color = "hsl(210 20% 6%)"; (e.target as HTMLElement).style.borderColor = "transparent"; }}
                >
                  Отправить заявку
                </button>

                <p className="text-muted-foreground text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-primary/60 rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-primary" />
            </div>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, letterSpacing: "0.1em" }}>
              АКВА<span className="text-primary">СТРОЙ</span>
            </span>
          </div>
          <p className="text-muted-foreground text-xs tracking-wider">© 2024 АкваСтрой. Все права защищены.</p>
          <div className="flex gap-6">
            {["Telegram", "Instagram", "Youtube"].map(s => (
              <button key={s} className="text-muted-foreground hover:text-primary transition-colors text-xs tracking-widest uppercase">{s}</button>
            ))}
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] lightbox-bg flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={24} />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[70vh] object-cover" />
            <div className="mt-4 flex items-start justify-between">
              <div>
                <span className="section-label block mb-2">{lightbox.category}</span>
                <h3 className="text-3xl text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{lightbox.title}</h3>
              </div>
              <div className="text-right text-muted-foreground text-sm">
                <div className="flex items-center gap-1 justify-end mb-1"><Icon name="MapPin" size={13} />{lightbox.location}</div>
                <div>{lightbox.year} · {lightbox.area}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}