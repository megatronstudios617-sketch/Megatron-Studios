import { Link } from 'react-router-dom'
import { studio } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="logo">
            <span className="logo__mark">◉</span> {studio.name}
          </div>
          <p className="muted">{studio.tagline}</p>
        </div>
        <div>
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to="/gallery">معرض الأعمال</Link></li>
            <li><Link to="/packages">الباقات</Link></li>
            <li><Link to="/booking">حجز موعد</Link></li>
            <li><Link to="/contact">تواصل معنا</Link></li>
          </ul>
        </div>
        <div>
          <h4>معلومات التواصل</h4>
          <ul className="muted">
            <li>{studio.address}</li>
            <li dir="ltr" style={{ textAlign: 'right' }}>{studio.phone}</li>
            <li>{studio.email}</li>
            <li>{studio.hours}</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} {studio.name}. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}
