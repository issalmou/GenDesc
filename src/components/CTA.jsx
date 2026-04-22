const CTA = () => (
  <section id="joinus" style={{ padding: 0 }}>
    <div style={{ background:`linear-gradient(135deg,rgba(26,26,46,0.88),rgba(60,20,20,0.8)),url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&auto=format&fit=crop') center/cover no-repeat`, padding: '90px 20px', textAlign: 'center' }}>
      <div className="reveal" style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: 'rgba(236,72,72,0.25)', border: '1px solid rgba(236,72,72,0.4)', marginBottom: '1.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff8c69" width={28} height={28}><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" /></svg>
        </div>
        <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.6rem)', color: '#fff', marginBottom: '1.2rem', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
          Ready to Elevate Your Fashion Listings?
        </h2>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 560, margin: '0 auto 2.2rem' }}>
          Join hundreds of fashion brands and sellers who use DescriptoAI to generate premium product descriptions that convert browsers into buyers.
        </p>
        <a href="#upload" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ec4848', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '1px', textTransform: 'uppercase', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', transition: 'all 0.25s', boxShadow: '0 6px 28px rgba(236,72,72,0.45)' }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 36px rgba(236,72,72,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 6px 28px rgba(236,72,72,0.45)'; }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={16} height={16}><path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.154.75.75 0 0 0 0-1.115A28.897 28.897 0 0 0 3.105 2.288Z" /></svg>
          Generate Your First Description
        </a>
      </div>
    </div>
  </section>
);
export default CTA;
