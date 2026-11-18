import { Link } from 'react-router-dom'
import { studio, works, services } from '../data.js'
import WorkCard from '../components/WorkCard.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__content">
          <p className="eyebrow">استديو تصوير احترافي</p>
          <h1>{studio.tagline}</h1>
          <p className="lead">
            نلتقط التفاصيل التي تحكي قصتك — بعدسة محترفة وإضاءة مدروسة ولمسة فنية تميّز كل صورة.
          </p>
          <div className="hero__actions">
            <Link to="/booking" className="btn">احجز جلستك</Link>
            <Link to="/gallery" className="btn btn--ghost">شاهد أعمالنا</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">خدماتنا</h2>
          <div className="grid grid--4">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">من أعمالنا</h2>
          <div className="grid grid--3">
            {works.slice(0, 6).map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
          <div className="center">
            <Link to="/gallery" className="btn btn--ghost">عرض كل الأعمال</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <h2>جاهز تحجز موعدك؟</h2>
          <p className="muted">اختار الباقة المناسبة وإحنا هنتواصل معاك لتأكيد التفاصيل.</p>
          <Link to="/packages" className="btn">شاهد الباقات</Link>
        </div>
      </section>
    </>
  )
}
