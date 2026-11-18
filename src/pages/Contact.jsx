import { studio } from '../data.js'

export default function Contact() {
  return (
    <section className="section page">
      <div className="container container--narrow">
        <h1 className="section__title">تواصل معنا</h1>
        <div className="grid grid--2">
          <div className="card">
            <h3>بيانات الاستديو</h3>
            <ul className="contact__list">
              <li><strong>العنوان:</strong> {studio.address}</li>
              <li><strong>الهاتف:</strong> <span dir="ltr">{studio.phone}</span></li>
              <li><strong>البريد:</strong> {studio.email}</li>
              <li><strong>مواعيد العمل:</strong> {studio.hours}</li>
            </ul>
          </div>
          <div className="card">
            <h3>كلمنا مباشرة</h3>
            <p className="muted">أسرع طريقة للرد على استفساراتك هي واتساب.</p>
            <a
              className="btn"
              href={`https://wa.me/${studio.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              راسلنا على واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
