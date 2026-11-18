import { useState } from 'react'
import { categories, works } from '../data.js'
import WorkCard from '../components/WorkCard.jsx'

export default function Gallery() {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? works : works.filter((w) => w.category === active)

  return (
    <section className="section page">
      <div className="container">
        <h1 className="section__title">معرض الأعمال</h1>

        <div className="filters" role="tablist">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`chip ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid--3">
          {visible.map((w) => (
            <WorkCard key={w.id} work={w} />
          ))}
        </div>
      </div>
    </section>
  )
}
