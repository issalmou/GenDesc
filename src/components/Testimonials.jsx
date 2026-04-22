const testimonials = [
  { initials:'SK', name:'Sofia K.', role:'Fashion Brand Owner', text:'DescriptoAI saves me hours every week. I upload my outfit photos and get polished, on-brand descriptions instantly. The quality is genuinely impressive.', stars:5 },
  { initials:'MR', name:'Marcus R.', role:'E-commerce Content Manager', text:'We reduced time spent on product copy by over 80%. The AI understands fashion nuances — fabric, fit, style — and produces descriptions that actually drive sales.', stars:5 },
  { initials:'AL', name:'Aisha L.', role:'Boutique Founder', text:'Perfect for small fashion brands without a dedicated copywriter. The AI nails the tone on the first try and the results are ready to publish straight away.', stars:4 },
];

const StarIcon = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={filled ? '#ec4848' : '#e5e7eb'} width={16} height={16}>
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
  </svg>
);

const Testimonials = () => (
  <section id="client" style={{ padding: '80px 0', background: '#f9fafb' }}>
    <div className="container">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.2rem)', color: '#1a1a2e', marginBottom: '0.6rem' }}>What Our Users Say</h2>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: '#6b7280' }}>Fashion sellers and brands who trust DescriptoAI every day.</p>
      </div>
      <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 14, border: '1px solid #e5e7eb', borderLeft: '4px solid #ec4848', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.1)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow='none'}>
            <div style={{ display: 'flex', gap: 3, marginBottom: '1rem' }}>
              {Array.from({ length: 5 }).map((_, s) => <StarIcon key={s} filled={s < t.stars} />)}
            </div>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.93rem', color: '#444', lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 1.5rem', flexGrow: 1 }}>"{t.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginTop: 'auto' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,#ec4848,#ff8c69)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>{t.initials}</div>
              <div>
                <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#1a1a2e', margin: 0, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{t.name}</p>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.75rem', color: '#ec4848', fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Testimonials;
