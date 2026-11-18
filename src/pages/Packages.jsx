import { Link } from 'react-router-dom'
import { packages } from '../data.js'

export default function Packages() {
  return (
    <section className="section page">
      <div className="container">
        <h1 className="section__title">الباقات والأسعار</h1>
        <div className="grid grid--3">
          {packages.map((p) => (
            <article key={p.id} className={`card price ${p.featured ? 'price--featured' : ''}`}>
              {p.featured && <span className="badge">الأكثر طلبًا</span>}
              <h3>{p.name}</h3>
              <div className="price__amount">
                {p.price.toLocaleString('ar-EG')} <small>ج.م</small>
              </div>
              <ul className="price__list">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <Link to={`/booking?package=${p.id}`} className={`btn ${p.featured ? '' : 'btn--ghost'}`}>
                احجز هذه الباقة
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
