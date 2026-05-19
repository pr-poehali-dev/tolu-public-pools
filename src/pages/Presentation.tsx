import { useEffect } from "react";
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
  { title: "Частный бассейн с инфинити", category: "Частные", location: "Подмосковье", year: "2024", img: IMAGES.hero, area: "85 м²" },
  { title: "Спортивный комплекс", category: "Спортивные", location: "Москва", year: "2024", img: IMAGES.indoor, area: "1 200 м²" },
  { title: "Гостиничный бассейн", category: "Коммерческие", location: "Сочи", year: "2023", img: IMAGES.resort, area: "450 м²" },
  { title: "Бассейн на крыше", category: "Частные", location: "Москва", year: "2023", img: IMAGES.rooftop, area: "120 м²" },
  { title: "Аквапарк", category: "Коммерческие", location: "Краснодар", year: "2022", img: IMAGES.waterpark, area: "3 500 м²" },
  { title: "СПА-комплекс", category: "Коммерческие", location: "Санкт-Петербург", year: "2022", img: IMAGES.spa, area: "280 м²" },
];

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

export default function Presentation() {
  useEffect(() => {
    document.title = "АкваСтрой — Презентация компании";
  }, []);

  const handlePrint = () => window.print();

  return (
    <>
      {/* Print styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #fff; font-family: 'IBM Plex Sans', sans-serif; }

        @page {
          size: A4 landscape;
          margin: 0;
        }

        @media print {
          .no-print { display: none !important; }
          .slide { page-break-after: always; page-break-inside: avoid; }
          .slide:last-child { page-break-after: avoid; }
        }

        @media screen {
          .slides-wrapper {
            max-width: 960px;
            margin: 0 auto;
            padding: 32px 24px 80px;
          }
          .slide {
            margin-bottom: 24px;
            box-shadow: 0 4px 40px rgba(0,0,0,0.15);
          }
        }
      `}</style>

      {/* Toolbar */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-[#0a0f18] border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border border-[#3ab5c8]/60 rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#3ab5c8]" />
          </div>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, letterSpacing: "0.1em", color: "#e8eef5" }}>
            АКВА<span style={{ color: "#3ab5c8" }}>СТРОЙ</span>
          </span>
          <span className="ml-4 text-xs text-white/30 tracking-widest uppercase">Презентация</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors tracking-wider uppercase">
            <Icon name="ArrowLeft" size={14} /> На сайт
          </a>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-xs tracking-widest uppercase"
            style={{ background: "#3ab5c8", color: "#0a0f18", padding: "9px 20px", fontWeight: 500, border: "none", cursor: "pointer", transition: "opacity 0.2s" }}
            onMouseEnter={e => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={e => ((e.target as HTMLElement).style.opacity = "1")}
          >
            <Icon name="Download" size={14} /> Скачать PDF
          </button>
        </div>
      </div>

      <div className="no-print" style={{ height: 56 }} />

      <div className="slides-wrapper">

        {/* ── SLIDE 1: COVER ── */}
        <div className="slide" style={{ aspectRatio: "297/210", position: "relative", overflow: "hidden" }}>
          <img src={IMAGES.hero} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,10,18,0.92) 0%, rgba(5,10,18,0.6) 60%, rgba(5,10,18,0.25) 100%)" }} />
          <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px 56px" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 24, height: 24, border: "1px solid rgba(58,181,200,0.6)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 8, height: 8, background: "#3ab5c8" }} />
              </div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, letterSpacing: "0.12em", color: "#e8eef5" }}>
                АКВА<span style={{ color: "#3ab5c8" }}>СТРОЙ</span>
              </span>
            </div>
            {/* Title */}
            <div>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#3ab5c8", marginBottom: 16, fontFamily: "'IBM Plex Sans', sans-serif" }}>
                Профессиональное строительство
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 300, lineHeight: 1.05, color: "#e8eef5", marginBottom: 20 }}>
                Бассейны<br />
                <span style={{ color: "#3ab5c8" }}>высшего</span><br />
                класса
              </h1>
              <div style={{ width: 48, height: 1, background: "#c8a84b", marginBottom: 20 }} />
              <p style={{ color: "rgba(232,238,245,0.65)", fontSize: 14, lineHeight: 1.7, maxWidth: 420, fontWeight: 300 }}>
                Более 15 лет мы создаём водные объекты, которые становятся centrepiece архитектурных проектов
              </p>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: 0 }}>
              {[{ num: "200+", label: "Объектов" }, { num: "15", label: "Лет опыта" }, { num: "98%", label: "Довольных клиентов" }].map((s, i) => (
                <div key={i} style={{ paddingRight: 32, paddingLeft: i === 0 ? 0 : 32, borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, color: "#3ab5c8", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,238,245,0.5)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SLIDE 2: ABOUT ── */}
        <div className="slide" style={{ aspectRatio: "297/210", background: "#0a0f18", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
          <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#3ab5c8", marginBottom: 16, fontFamily: "'IBM Plex Sans', sans-serif" }}>О компании</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, lineHeight: 1.1, color: "#e8eef5", marginBottom: 16 }}>
              Строим не просто<br />
              <span style={{ color: "#3ab5c8" }}>бассейны</span>,<br />
              строим впечатления
            </h2>
            <div style={{ width: 48, height: 1, background: "#c8a84b", marginBottom: 20 }} />
            <p style={{ color: "rgba(232,238,245,0.6)", fontSize: 13, lineHeight: 1.75, fontWeight: 300, marginBottom: 8 }}>
              АкваСтрой — федеральная компания с 2009 года. Специализируемся на проектировании и строительстве бассейнов любой сложности.
            </p>
            <p style={{ color: "rgba(232,238,245,0.6)", fontSize: 13, lineHeight: 1.75, fontWeight: 300, marginBottom: 32 }}>
              Наша команда — 120 специалистов: инженеры, архитекторы, строители и технологи воды.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[{ num: "200+", label: "Проектов" }, { num: "15", label: "Лет на рынке" }, { num: "120", label: "Специалистов" }].map((s, i) => (
                <div key={i} style={{ borderLeft: "2px solid rgba(58,181,200,0.3)", paddingLeft: 12 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: "#3ab5c8", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,238,245,0.45)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={IMAGES.resort} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 24, left: 24, background: "rgba(10,15,24,0.9)", border: "1px solid rgba(255,255,255,0.1)", padding: "16px 20px" }}>
              <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3ab5c8", marginBottom: 4 }}>Гарантия</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#e8eef5", lineHeight: 1 }}>5 лет</div>
              <div style={{ fontSize: 12, color: "rgba(232,238,245,0.5)", marginTop: 4 }}>На все выполненные работы</div>
            </div>
          </div>
        </div>

        {/* ── SLIDE 3: SERVICES ── */}
        <div className="slide" style={{ aspectRatio: "297/210", background: "#0d1520", padding: "48px 56px", display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#3ab5c8", marginBottom: 10, fontFamily: "'IBM Plex Sans', sans-serif" }}>Что мы делаем</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, color: "#e8eef5" }}>
              Полный спектр <span style={{ color: "#3ab5c8" }}>услуг</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, flex: 1 }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "24px 20px", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ width: 36, height: 36, border: "1px solid rgba(58,181,200,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, color: "#3ab5c8" }}>
                  <Icon name={s.icon} fallback="Circle" size={16} />
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#e8eef5", marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: "rgba(232,238,245,0.5)", lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SLIDE 4: PORTFOLIO ── */}
        <div className="slide" style={{ aspectRatio: "297/210", background: "#0a0f18", padding: "48px 56px", display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#3ab5c8", marginBottom: 10, fontFamily: "'IBM Plex Sans', sans-serif" }}>Наши работы</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, color: "#e8eef5" }}>
              Портфолио <span style={{ color: "#3ab5c8" }}>проектов</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 6, flex: 1 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,18,0.88) 0%, transparent 55%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "10px 12px" }}>
                  <div style={{ fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3ab5c8", marginBottom: 3 }}>{p.category}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: "#e8eef5", lineHeight: 1.2 }}>{p.title}</div>
                  <div style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.5)", marginTop: 3 }}>{p.location} · {p.year} · {p.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SLIDE 5: PROCESS ── */}
        <div className="slide" style={{ aspectRatio: "297/210", background: "#0d1520", padding: "48px 56px", display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#3ab5c8", marginBottom: 10, fontFamily: "'IBM Plex Sans', sans-serif" }}>Как мы работаем</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, color: "#e8eef5" }}>
              Процесс <span style={{ color: "#3ab5c8" }}>работы</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, flex: 1 }}>
            {PROCESS.map((step, i) => (
              <div key={i} style={{ position: "relative" }}>
                {i < PROCESS.length - 1 && (
                  <div style={{ position: "absolute", top: 20, left: "calc(100% - 16px)", width: "50%", height: 1, background: "linear-gradient(to right, rgba(58,181,200,0.5), transparent)", zIndex: 1 }} />
                )}
                <div style={{ width: 40, height: 40, border: "1px solid rgba(58,181,200,0.5)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, position: "relative", zIndex: 2, background: "#0d1520" }}>
                  <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "0.65rem", fontWeight: 500, color: "#3ab5c8" }}>{step.num}</span>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "#e8eef5", marginBottom: 8 }}>{step.title}</div>
                <div style={{ fontSize: 11, color: "rgba(232,238,245,0.5)", lineHeight: 1.65 }}>{step.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, padding: "16px 20px", border: "1px solid rgba(58,181,200,0.2)", background: "rgba(58,181,200,0.04)", display: "inline-block", alignSelf: "flex-start" }}>
            <span style={{ fontSize: 12, color: "rgba(232,238,245,0.5)", letterSpacing: "0.05em" }}>Среднее время строительства: </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "#3ab5c8" }}>2–6 месяцев</span>
          </div>
        </div>

        {/* ── SLIDE 6: CONTACTS ── */}
        <div className="slide" style={{ aspectRatio: "297/210", position: "relative", overflow: "hidden" }}>
          <img src={IMAGES.rooftop} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(5,10,18,0.88)" }} />
          <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "48px 56px" }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#3ab5c8", marginBottom: 16, fontFamily: "'IBM Plex Sans', sans-serif" }}>Свяжитесь с нами</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 300, color: "#e8eef5", marginBottom: 12, lineHeight: 1.1 }}>
              Готовы обсудить<br />
              <span style={{ color: "#3ab5c8" }}>ваш проект?</span>
            </h2>
            <div style={{ width: 48, height: 1, background: "#c8a84b", margin: "0 auto 32px" }} />
            <p style={{ color: "rgba(232,238,245,0.55)", fontSize: 14, marginBottom: 40, fontWeight: 300 }}>
              Консультация бесплатна. Сориентируем по стоимости и срокам за 24 часа.
            </p>
            <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                { icon: "Mail", label: "Email", value: "info@aquastroy.ru" },
                { icon: "MapPin", label: "Офис", value: "Москва, ул. Строителей, 1" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 40, height: 40, border: "1px solid rgba(58,181,200,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3ab5c8" }}>
                    <Icon name={c.icon} fallback="Circle" size={16} />
                  </div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,238,245,0.4)" }}>{c.label}</div>
                  <div style={{ fontSize: 13, color: "#e8eef5" }}>{c.value}</div>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 16, height: 16, border: "1px solid rgba(58,181,200,0.5)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 5, height: 5, background: "#3ab5c8" }} />
                </div>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 500, letterSpacing: "0.12em", color: "rgba(232,238,245,0.5)" }}>
                  АКВА<span style={{ color: "#3ab5c8" }}>СТРОЙ</span>
                </span>
              </div>
              <span style={{ color: "rgba(232,238,245,0.2)", fontSize: 12 }}>·</span>
              <span style={{ fontSize: 11, color: "rgba(232,238,245,0.3)", letterSpacing: "0.05em" }}>© 2024. Все права защищены.</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
