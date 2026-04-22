const Hero = () => (
  <div id="home" style={{
    minHeight: 'calc(100vh - 64px)',
    background: `linear-gradient(135deg,rgba(26,26,46,0.75) 0%,rgba(0,0,0,0.5) 100%),
      url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop') center/cover no-repeat`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', padding: '3rem 1.25rem',
  }}>
    <div style={{ maxWidth: 840 }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(236,72,72,0.18)', border: '1px solid rgba(236,72,72,0.45)', color: '#ff9a9a', padding: '6px 18px', borderRadius: 40, fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'Syne,sans-serif', marginBottom: '1.6rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={14} height={14}><path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" /></svg>
        Powered by AI Vision
      </div>
      <h1 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4.5rem)', lineHeight: 1.12, color: '#fff', letterSpacing: '-1px', marginBottom: '1.4rem', textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
        Instant Fashion<br /><span style={{ color: '#ff6b6b' }}>Descriptions</span> with AI
      </h1>
      <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 400, fontSize: 'clamp(1rem,2vw,1.15rem)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, maxWidth: 580, margin: '0 auto 2.5rem' }}>
        Upload a clothing photo and receive a premium, conversion-ready product description in seconds — powered by our fashion-trained AI model.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#upload" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ec4848', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', transition: 'all 0.25s', boxShadow: '0 6px 24px rgba(236,72,72,0.4)' }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 32px rgba(236,72,72,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 6px 24px rgba(236,72,72,0.4)'; }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={16} height={16}><path d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z" /><path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" /></svg>
          Try It Free
        </a>
        <a href="#about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', padding: '14px 28px', borderRadius: 8, border: '2px solid rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.25s' }}
          onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.9)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(255,255,255,0.6)'; }}>
          Learn More
        </a>
      </div>
      <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        {[{ num:'500+', label:'Fashion Brands' },{ num:'50K+', label:'Descriptions Generated' },{ num:'< 6s', label:'Per Generation' }].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#fff' }}>{s.num}</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Hero;
