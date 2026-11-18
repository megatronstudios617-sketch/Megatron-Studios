// كل بيانات الموقع هنا — عدّل الاسم والأسعار والصور من مكان واحد.
export const studio = {
  name: 'MEGATRON STUDIOS',
  tagline: 'نحول لحظاتك إلى ذكريات لا تُنسى',
  phone: '01116277197',
  whatsapp: '01554783435',
  email: 'megatronstudios617@gmail.com',
  address: 'القاهرة، مصر',
  hours: 'يوميًا من 10 صباحًا حتى 9 مساءً',
}

export const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'wedding', label: 'أعراس' },
  { id: 'portrait', label: 'بورتريه' },
  { id: 'product', label: 'منتجات' },
  { id: 'event', label: 'فعاليات' },
]

// بدّل الـ image بمسار صورة حقيقية (مثلاً '/photos/wedding-1.jpg') لما تجهزها.
// لحد وقتها بيتعرض تدرج لوني مكانها.
export const works = [
  { id: 1, title: 'ليلة العمر', category: 'wedding', image: null, hue: 28 },
  { id: 2, title: 'ضوء النافذة', category: 'portrait', image: null, hue: 210 },
  { id: 3, title: 'عطر فاخر', category: 'product', image: null, hue: 330 },
  { id: 4, title: 'حفل التخرج', category: 'event', image: null, hue: 160 },
  { id: 5, title: 'الزفاف الصيفي', category: 'wedding', image: null, hue: 45 },
  { id: 6, title: 'ظل وضوء', category: 'portrait', image: null, hue: 260 },
  { id: 7, title: 'ساعة كلاسيكية', category: 'product', image: null, hue: 15 },
  { id: 8, title: 'مؤتمر التقنية', category: 'event', image: null, hue: 190 },
  { id: 9, title: 'الكوشة', category: 'wedding', image: null, hue: 350 },
]

export const packages = [
  {
    id: 'basic',
    name: 'الأساسية',
    price: 1500,
    features: ['جلسة تصوير ساعتين', '30 صورة معدّلة', 'تسليم خلال 7 أيام', 'نسخة رقمية عالية الدقة'],
  },
  {
    id: 'pro',
    name: 'الاحترافية',
    price: 3500,
    featured: true,
    features: ['جلسة تصوير 4 ساعات', '80 صورة معدّلة', 'تسليم خلال 5 أيام', 'ألبوم مطبوع 20 صورة', 'مصوّر مساعد'],
  },
  {
    id: 'premium',
    name: 'المميزة',
    price: 7000,
    features: ['تغطية يوم كامل', '200 صورة معدّلة', 'فيديو سينمائي قصير', 'ألبوم فاخر + إطارات', 'مصوّران + إضاءة استديو'],
  },
]

export const services = [
  { title: 'تصوير الأعراس', text: 'نوثّق أجمل لحظات يومكم بأسلوب طبيعي وسينمائي.' },
  { title: 'تصوير بورتريه', text: 'جلسات شخصية وعائلية داخل الاستديو أو في الخارج.' },
  { title: 'تصوير منتجات', text: 'صور نظيفة وجذّابة تزوّد مبيعات متجرك.' },
  { title: 'تغطية فعاليات', text: 'مؤتمرات وحفلات وفعاليات شركات بتسليم سريع.' },
]
