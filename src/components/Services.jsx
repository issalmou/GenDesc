const services = [
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={36} height={36}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>), title: 'AI Fashion Image Analysis', desc: 'Our vision engine decomposes every garment photo to extract key style attributes: colour palette, silhouette, fabric texture, and design details.' },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={36} height={36}><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>), title: 'Premium Copy Generation', desc: 'Within seconds, get elegant, sales-driven fashion descriptions fine-tuned on thousands of real product listings — ready to publish instantly.' },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={36} height={36}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>), title: 'Fashion Store Automation', desc: 'Connect your clothing catalogue and let DescriptoAI generate all your product copy in one go — saving hours of manual writing every week.' },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={36} height={36}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253" /></svg>), title: 'Multi-language (Coming Soon)', desc: 'Soon: generate your fashion descriptions in multiple languages to reach international markets without any extra effort.' },
];

const Services = () => (
  <section id="service" style={{ padding: '80px 0', background: '#f9fafb' }}>
    <div className="container">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.2rem)', color: '#1a1a2e', marginBottom: '0.6rem' }}>Our Services</h2>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: '#6b7280' }}>AI-powered tools to accelerate your fashion content workflow.</p>
      </div>
      <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem' }}>
        {services.map((s, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '2rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.25s', cursor: 'default' }}
            onMouseEnter={e => { e.currentTarget.style.background='#1a1a2e'; e.currentTarget.style.borderColor='#1a1a2e'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(26,26,46,0.18)'; e.currentTarget.querySelectorAll('p').forEach(p=>p.style.color='#94a3b8'); e.currentTarget.querySelector('h4').style.color='#fff'; e.currentTarget.querySelector('.icon-wrap').style.color='#ff8c69'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.borderColor='#e5e7eb'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; e.currentTarget.querySelectorAll('p').forEach(p=>p.style.color='#6b7280'); e.currentTarget.querySelector('h4').style.color='#1a1a2e'; e.currentTarget.querySelector('.icon-wrap').style.color='#ec4848'; }}>
            <div className="icon-wrap" style={{ color: '#ec4848', marginBottom: '1.2rem', transition: 'color 0.25s' }}>{s.icon}</div>
            <h4 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1a1a2e', marginBottom: '0.75rem', transition: 'color 0.25s', lineHeight: 1.4 }}>{s.title}</h4>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.7, margin: '0 0 1.5rem', flexGrow: 1, transition: 'color 0.25s' }}>{s.desc}</p>
            <a href="#upload" style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#ec4848', textDecoration: 'none', borderBottom: '2px solid #ec4848', paddingBottom: 2, transition: 'all 0.2s', marginTop: 'auto' }}>Learn More →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Services;
