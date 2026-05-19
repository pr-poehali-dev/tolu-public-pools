import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/bucket/f7e71885-796d-43a5-83d7-27580e083dbe.jpg";

const IMG = {
  hero:       "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/924ca3a6-7e0a-42ec-bf1c-b3bbe3aeeae7.jpg",
  indoor:     "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/fe815788-db40-420d-80ad-b6348425b834.jpg",
  school:     "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/6eb9a543-6179-4df2-843b-3f3d422875fb.jpg",
  wellness:   "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/cb1ee020-66fa-4cf7-9e6c-2aa84bf723e2.jpg",
  outdoor:    "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/49721444-241d-4ffe-a8e6-89b2ad8c034a.jpg",
  construct:  "https://cdn.poehali.dev/projects/826ebd13-36ba-43d8-83ca-b84ce15b3421/files/562f2bdc-baba-45b6-be35-9d811617fa10.jpg",
};

const SERVICES = [
  { title: "Олимпийские бассейны", desc: "Строительство бассейнов 50×25 м для соревнований и профессиональных тренировок" },
  { title: "Учебные бассейны", desc: "Детские и учебные бассейны для школ, детских садов и образовательных учреждений" },
  { title: "Спортивные комплексы", desc: "Многофункциональные водные центры с несколькими чашами и трибунами" },
  { title: "Оздоровительные центры", desc: "Бассейны для санаториев, медицинских и wellness-учреждений" },
  { title: "Муниципальные объекты", desc: "Открытые и крытые бассейны для городских парков и районных центров" },
  { title: "Техническое обслуживание", desc: "Сервис, ремонт, модернизация оборудования и систем водоподготовки" },
];

const PROJECTS = [
  { title: "Спортивный комплекс «Олимп»", location: "Москва", year: "2024", area: "3 200 м²", img: IMG.indoor },
  { title: "Бассейн школы №47", location: "Казань", year: "2023", area: "800 м²", img: IMG.school },
  { title: "Оздоровительный центр", location: "Сочи", year: "2023", area: "1 500 м²", img: IMG.wellness },
  { title: "Муниципальный аквацентр", location: "Екатеринбург", year: "2022", area: "4 800 м²", img: IMG.outdoor },
];

const PROCESS = [
  { num: "01", title: "Техническое задание", desc: "Изучаем требования заказчика, нормы и стандарты для общественных объектов" },
  { num: "02", title: "Проектирование", desc: "Разрабатываем проектную документацию, 3D-модель и смету" },
  { num: "03", title: "Согласование", desc: "Получаем разрешения, проходим экспертизу, заключаем договор" },
  { num: "04", title: "Строительство", desc: "Ведём работы с соблюдением СНиП, ГОСТ и сроков контракта" },
  { num: "05", title: "Сдача объекта", desc: "Передаём объект с пакетом документации, обучением персонала и гарантией" },
];

// ── Reusable logo component ──────────────────────────────────────────────────
function Logo({ size = 56 }: { size?: number }) {
  return (
    <img
      src={LOGO}
      alt="TOLU Construction"
      style={{ height: size, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
    />
  );
}

function LogoDark({ size = 56 }: { size?: number }) {
  return (
    <img
      src={LOGO}
      alt="TOLU Construction"
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}

// ── Slide wrapper ─────────────────────────────────────────────────────────────
function Slide({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      className="slide"
      style={{
        width: "100%",
        aspectRatio: "297/210",
        position: "relative",
        overflow: "hidden",
        background: "#fff",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function ToluPresentation() {
  useEffect(() => {
    document.title = "TOLU Construction — Презентация";
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f0ede8; font-family: 'IBM Plex Sans', sans-serif; }

        .slide-label {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #888;
        }

        .slide-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          line-height: 1.1;
          color: #111;
        }

        .tolu-rule {
          width: 40px;
          height: 2px;
          background: #111;
        }

        @page { size: A4 landscape; margin: 0; }

        @media print {
          body { background: #fff !important; }
          .no-print { display: none !important; }
          .slide { page-break-after: always; page-break-inside: avoid; }
          .slide:last-child { page-break-after: avoid; }
          .slides-wrapper { padding: 0 !important; max-width: 100% !important; }
        }

        @media screen {
          .slides-wrapper {
            max-width: 960px;
            margin: 0 auto;
            padding: 32px 20px 80px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>

      {/* ── Toolbar ── */}
      <div
        className="no-print"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: "#111", borderBottom: "1px solid #222",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 24px", height: 52,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Logo size={32} />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Презентация
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="/"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              color: "rgba(255,255,255,0.45)", fontSize: 11,
              letterSpacing: "0.15em", textTransform: "uppercase",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
          >
            <Icon name="ArrowLeft" size={13} /> На сайт
          </a>
          <button
            onClick={() => window.print()}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "#fff", color: "#111",
              padding: "8px 20px", border: "none", cursor: "pointer",
              fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
              fontWeight: 500, fontFamily: "'IBM Plex Sans', sans-serif",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            <Icon name="Download" size={13} /> Скачать PDF
          </button>
        </div>
      </div>
      <div className="no-print" style={{ height: 52 }} />

      <div className="slides-wrapper">

        {/* ══ SLIDE 1 — COVER ══════════════════════════════════════════════ */}
        <Slide>
          {/* left dark panel */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "42%",
            background: "#111",
            display: "flex", flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 44px",
          }}>
            <Logo size={44} />

            <div>
              <div style={{ width: 36, height: 2, background: "#fff", marginBottom: 20, opacity: 0.3 }} />
              <h1 className="slide-heading" style={{ fontSize: 38, color: "#fff", marginBottom: 16 }}>
                Строительство<br />
                общественных<br />
                бассейнов
              </h1>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300 }}>
                Проектирование, монтаж<br />и обслуживание водных объектов
              </p>
            </div>

            <div style={{ display: "flex", gap: 28 }}>
              {[{ n: "50+", l: "Объектов" }, { n: "12", l: "Лет опыта" }, { n: "15", l: "Регионов" }].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#fff", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right photo */}
          <div style={{ position: "absolute", left: "42%", top: 0, right: 0, bottom: 0 }}>
            <img src={IMG.hero} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(17,17,17,0.3) 0%, transparent 40%)" }} />
          </div>

          {/* bottom tag */}
          <div style={{
            position: "absolute", bottom: 0, right: 0,
            background: "#fff", padding: "10px 20px",
          }}>
            <span style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#555" }}>
              TOLU CONSTRUCTION © 2024
            </span>
          </div>
        </Slide>

        {/* ══ SLIDE 2 — О КОМПАНИИ ════════════════════════════════════════ */}
        <Slide style={{ background: "#fafaf8" }}>
          {/* thin left accent */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "#111" }} />

          <div style={{
            height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr",
            padding: "52px 52px 52px 56px", gap: 48,
          }}>
            {/* left */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="slide-label" style={{ marginBottom: 14 }}>О компании</div>
              <h2 className="slide-heading" style={{ fontSize: 36, marginBottom: 16 }}>
                Эксперты в строительстве общественных водных объектов
              </h2>
              <div className="tolu-rule" style={{ marginBottom: 20 }} />
              <p style={{ fontSize: 12, color: "#444", lineHeight: 1.8, fontWeight: 300, marginBottom: 12 }}>
                TOLU Construction специализируется на строительстве и монтаже общественных бассейнов с 2012 года. Мы реализуем объекты любой сложности — от школьных бассейнов до крупных спортивных комплексов федерального уровня.
              </p>
              <p style={{ fontSize: 12, color: "#444", lineHeight: 1.8, fontWeight: 300, marginBottom: 32 }}>
                В каждом проекте мы соблюдаем строительные нормы, стандарты безопасности и требования FINA. Работаем с государственными заказчиками, муниципалитетами и частными инвесторами.
              </p>
              {/* key facts */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { n: "50+", l: "реализованных объектов" },
                  { n: "2012", l: "год основания" },
                  { n: "15", l: "регионов присутствия" },
                  { n: "5 лет", l: "гарантия на работы" },
                ].map((s, i) => (
                  <div key={i} style={{ borderLeft: "2px solid #ddd", paddingLeft: 12 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#111", lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: 10, color: "#888", marginTop: 3, letterSpacing: "0.05em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* right photo */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={IMG.construct} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "#111", padding: "14px 18px",
              }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Миссия</div>
                <div style={{ fontSize: 12, color: "#fff", marginTop: 4, lineHeight: 1.5 }}>
                  Создавать безопасные и современные водные объекты для здоровья общества
                </div>
              </div>
            </div>
          </div>

          <LogoMark />
        </Slide>

        {/* ══ SLIDE 3 — УСЛУГИ ════════════════════════════════════════════ */}
        <Slide style={{ background: "#111" }}>
          <div style={{ height: "100%", padding: "48px 52px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
              <div>
                <div className="slide-label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>Что мы делаем</div>
                <h2 className="slide-heading" style={{ fontSize: 36, color: "#fff" }}>
                  Услуги и компетенции
                </h2>
              </div>
              <Logo size={36} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, flex: 1 }}>
              {SERVICES.map((s, i) => (
                <div key={i} style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "22px 20px",
                  display: "flex", flexDirection: "column", gap: 8,
                  transition: "border-color 0.2s",
                }}>
                  <div style={{
                    width: 28, height: 28,
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                  }}>
                    <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 9, fontWeight: 500, letterSpacing: "0.05em" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "#fff", lineHeight: 1.2 }}>{s.title}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, fontWeight: 300 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* ══ SLIDE 4 — ПОРТФОЛИО ════════════════════════════════════════ */}
        <Slide style={{ background: "#fafaf8" }}>
          <div style={{ height: "100%", padding: "44px 52px 0", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: 24 }}>
              <div className="slide-label" style={{ marginBottom: 10 }}>Реализованные объекты</div>
              <h2 className="slide-heading" style={{ fontSize: 34 }}>Портфолио проектов</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, flex: 1, paddingBottom: 0 }}>
              {PROJECTS.map((p, i) => (
                <div key={i} style={{ position: "relative", overflow: "hidden" }}>
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%)",
                    display: "flex", flexDirection: "column", justifyContent: "flex-end",
                    padding: "12px 14px",
                  }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: "#fff", lineHeight: 1.2, marginBottom: 5 }}>{p.title}</div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em" }}>{p.location} · {p.year}</div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{p.area}</div>
                  </div>
                  {/* number badge */}
                  <div style={{
                    position: "absolute", top: 10, left: 10,
                    background: "#fff", padding: "3px 7px",
                  }}>
                    <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.1em", color: "#111" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom bar */}
            <div style={{
              background: "#111", margin: "0 -52px",
              padding: "12px 52px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>
                Более 50 реализованных объектов по всей России
              </span>
              <Logo size={24} />
            </div>
          </div>
        </Slide>

        {/* ══ SLIDE 5 — ПРОЦЕСС ═══════════════════════════════════════════ */}
        <Slide style={{ background: "#fafaf8" }}>
          {/* top photo strip */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "36%", overflow: "hidden" }}>
            <img src={IMG.indoor} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(17,17,17,0.62)" }} />
            <div style={{ position: "absolute", inset: 0, padding: "28px 52px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div>
                <div className="slide-label" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Как мы работаем</div>
                <h2 className="slide-heading" style={{ fontSize: 32, color: "#fff" }}>Процесс работы</h2>
              </div>
              <Logo size={32} />
            </div>
          </div>

          {/* steps */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "64%",
            padding: "24px 52px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 8,
            alignItems: "start",
          }}>
            {PROCESS.map((step, i) => (
              <div key={i} style={{ position: "relative" }}>
                {/* connector */}
                {i < PROCESS.length - 1 && (
                  <div style={{
                    position: "absolute", top: 20, left: "calc(40px + 8px)", right: -8,
                    height: 1, background: "#ddd", zIndex: 0,
                  }} />
                )}
                <div style={{
                  width: 40, height: 40,
                  border: "2px solid #111",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 14, position: "relative", zIndex: 1,
                  background: "#fafaf8",
                }}>
                  <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10, fontWeight: 600, color: "#111" }}>
                    {step.num}
                  </span>
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, color: "#111", marginBottom: 7, lineHeight: 1.2 }}>{step.title}</div>
                <div style={{ fontSize: 10, color: "#666", lineHeight: 1.65 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </Slide>

        {/* ══ SLIDE 6 — КОНТАКТЫ ══════════════════════════════════════════ */}
        <Slide>
          {/* background photo full */}
          <img src={IMG.outdoor} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.82)" }} />

          <div style={{
            position: "relative", zIndex: 1, height: "100%",
            display: "flex", flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 56px",
          }}>
            {/* top */}
            <Logo size={44} />

            {/* center */}
            <div style={{ textAlign: "center" }}>
              <div className="slide-label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 14 }}>Контакты</div>
              <h2 className="slide-heading" style={{ fontSize: 42, color: "#fff", marginBottom: 14 }}>
                Обсудим ваш проект
              </h2>
              <div style={{ width: 40, height: 2, background: "#fff", margin: "0 auto 28px", opacity: 0.3 }} />
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginBottom: 36 }}>
                Консультация бесплатна. Ответим на все вопросы по строительству общественных бассейнов.
              </p>
              <div style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}>
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 000-00-00" },
                  { icon: "Mail",  label: "Email",   val: "info@tolu-construction.ru" },
                  { icon: "MapPin",label: "Офис",    val: "Москва, Проектируемый пр-д, 1" },
                  { icon: "Globe", label: "Сайт",    val: "tolu-construction.ru" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 38, height: 38,
                      border: "1px solid rgba(255,255,255,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.7)",
                    }}>
                      <Icon name={c.icon} fallback="Circle" size={15} />
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{c.label}</div>
                    <div style={{ fontSize: 12, color: "#fff" }}>{c.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* bottom bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16 }}>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
                TOLU Construction © 2024. Все права защищены.
              </span>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
                Лицензия СРО № 000-000-00
              </span>
            </div>
          </div>
        </Slide>

      </div>
    </>
  );
}

// small logo mark for bottom-right corners
function LogoMark() {
  return (
    <div style={{
      position: "absolute", bottom: 16, right: 20,
      opacity: 0.12,
    }}>
      <img
        src={LOGO}
        alt=""
        style={{ height: 32, width: "auto", objectFit: "contain" }}
      />
    </div>
  );
}