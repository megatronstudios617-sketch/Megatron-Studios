import { categories } from '../data.js'

export default function WorkCard({ work }) {
  const label = categories.find((c) => c.id === work.category)?.label
  const style = work.image
    ? { backgroundImage: `url(${work.image})` }
    : {
        backgroundImage: `linear-gradient(135deg, hsl(${work.hue} 55% 38%), hsl(${(work.hue + 40) % 360} 45% 12%))`,
      }

  return (
    <figure className="work" style={style}>
      <figcaption className="work__caption">
        <span className="work__tag">{label}</span>
        <strong>{work.title}</strong>
      </figcaption>
    </figure>
  )
}
