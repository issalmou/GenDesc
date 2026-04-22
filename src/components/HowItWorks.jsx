const steps = [
  { step:'01', title:'Upload Your Fashion Photo', desc:'Import a clothing or accessory image from your device via drag & drop. Supports JPEG, PNG, and WebP — or paste a direct image URL.', icon:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={32} height={32}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg>) },
  { step:'02', title:'AI Reads the Outfit', desc:'Our fashion-trained vision model identifies garment style, colour, fabric texture, cut, and key design elements automatically.', icon:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={32} height={32}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>) },
  { step:'03', title:'Receive Your Description', desc:'A premium, marketing-ready fashion description is generated in seconds — copy it directly to your store listing or catalogue.', icon:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={32} height={32}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>) },
];

const HowItWorks = () => (
  <section id="how" style={{ padding: 0 }}>
    <div style={{ background:`linear-gradient(135deg,rgba(26,26,46,0.88),rgba(20,10,30,0.8)),url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&auto=format&fit=crop') center/cover no-repeat`, padding: '80px 20px' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.2rem)', color: '#fff', marginBottom: '0.6rem' }}>How It Works</h2>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.65)' }}>3 simple steps to automate your fashion product descriptions.</p>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: 'rgba(236,72,72,0.15)', border: '1px solid rgba(236,72,72,0.3)', borderRadius: 14, padding: '2.5rem 2rem', textAlign: 'center', transition: 'background 0.3s', backdropFilter: 'blur(8px)' }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(236,72,72,0.28)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(236,72,72,0.15)'}>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Syne,sans-serif', fontWeight: 900, fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem' }}>{s.step}</div>
              <div style={{ color: '#ff8c69', marginBottom: '1rem', display: 'inline-block' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.87rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default HowItWorks;
