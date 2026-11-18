import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { packages, categories, studio } from '../data.js'

export default function Booking() {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: 'wedding',
    package: params.get('package') || 'pro',
    date: '',
    notes: '',
  })

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const today = new Date().toISOString().split('T')[0]

  const submit = (e) => {
    e.preventDefault()
    // مؤقتًا بنبعت الطلب على واتساب. لاحقًا ممكن نربطه بـ API أو Formspree.
    const pkg = packages.find((p) => p.id === form.package)?.name
    const type = categories.find((c) => c.id === form.type)?.label
    const text =
      `طلب حجز جديد\n` +
      `الاسم: ${form.name}\nالهاتف: ${form.phone}\n` +
      `نوع التصوير: ${type}\nالباقة: ${pkg}\nالتاريخ: ${form.date}\n` +
      `ملاحظات: ${form.notes || '-'}`
    window.open(`https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  return (
    <section className="section page">
      <div className="container container--narrow">
        <h1 className="section__title">احجز موعدك</h1>

        {sent ? (
          <div className="card center">
            <h3>تم تجهيز طلبك ✓</h3>
            <p className="muted">فتحنا لك واتساب لإرسال الطلب. هنرد عليك لتأكيد الموعد في أقرب وقت.</p>
            <button className="btn btn--ghost" onClick={() => setSent(false)}>حجز جديد</button>
          </div>
        ) : (
          <form className="card form" onSubmit={submit}>
            <label>
              الاسم
              <input name="name" value={form.name} onChange={set} required placeholder="اسمك بالكامل" />
            </label>
            <label>
              رقم الهاتف
              <input name="phone" value={form.phone} onChange={set} required type="tel" dir="ltr" placeholder="01xxxxxxxxx" />
            </label>
            <div className="form__row">
              <label>
                نوع التصوير
                <select name="type" value={form.type} onChange={set}>
                  {categories.filter((c) => c.id !== 'all').map((c) => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </label>
              <label>
                الباقة
                <select name="package" value={form.package} onChange={set}>
                  {packages.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              التاريخ المفضل
              <input name="date" value={form.date} onChange={set} required type="date" min={today} />
            </label>
            <label>
              ملاحظات
              <textarea name="notes" value={form.notes} onChange={set} rows="4" placeholder="أي تفاصيل تحب نعرفها" />
            </label>
            <button className="btn" type="submit">إرسال الطلب</button>
          </form>
        )}
      </div>
    </section>
  )
}
