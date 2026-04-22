import { useState } from 'react';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e) => { e.preventDefault(); setSubscribed(true); setEmail(''); setTimeout(() => setSubscribed(false), 3500); };
  const footerLinks = [
    { href: '#home', label: 'Home' }, { href: '#about', label: 'About' },
    { href: '#service', label: 'Services' }, { href: '#upload', label: 'AI Demo' },
    { href: '#features', label: 'Features' }, { href: '#faq', label: 'FAQ' }, { href: '#contact', label: 'Contact' },
  ];
  const features = ['AI Image Analysis', 'Auto Description', 'Multi-category Fashion', 'Copy & Export', 'API Access', 'Secure Cloud'];
  const tags = ['fashion', 'AI', 'e-commerce', 'clothing', 'automation', 'product copy', 'vision AI','digital fashion','outfit AI'];
  const socialPaths = [
    { label: 'Twitter', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { label: 'GitHub', d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
  ];
  const colHead = (text) => <h4 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1.5px', color: '#fff', textTransform: 'uppercase', marginBottom: '1.4rem', paddingBottom: '0.6rem', borderBottom: '2px solid #ec4848', display: 'inline-block' }}>{text}</h4>;
  return (
    <>
      {/* Main footer */}
      <footer id="footer" style={{ background: '#0d1117', padding: '60px 0 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '2.5rem', paddingBottom: '3rem' }}>
            <div>
              <a href="#home" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '1px', color: '#ec4848' }}>Descripto<span style={{ color: '#fff' }}>AI</span></span>
              </a>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.87rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '1.2rem' }}>Automate your fashion product descriptions with AI. Fast, precise, and ready to publish.</p>
              
            </div>
            <div>
              {colHead('Navigation')}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {footerLinks.map(l => (
                  <li key={l.href} style={{ marginBottom: 8 }}>
                    <a href={l.href} style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.87rem', color: '#6b7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#ec4848'} onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width={10} height={10} style={{ color: '#ec4848', flexShrink: 0 }}><path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {colHead('Features')}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {features.map((f, i) => (
                  <li key={i} style={{ marginBottom: 8, fontFamily: 'DM Sans,sans-serif', fontSize: '0.87rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 7 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#ec4848" width={10} height={10} style={{ flexShrink: 0 }}><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {colHead('Tags')}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {tags.map(tag => (
                  <a key={tag} href="#!" style={{ display: 'inline-block', background: '#1f2937', color: '#9ca3af', padding: '4px 10px', borderRadius: 4, fontSize: '0.78rem', fontFamily: 'DM Sans,sans-serif', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#ec4848'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#1f2937'; e.currentTarget.style.color = '#9ca3af'; }}>
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1f2937', padding: '1.2rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <p
                style={{
                  fontFamily: 'DM Sans,sans-serif',
                  fontSize: '0.82rem',
                  color: '#4b5563',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Made with
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#ec4848"
                  width={12}
                  height={12}
                  style={{ verticalAlign: 'middle' }}
                >
                  <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-2.184C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.851l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                </svg>

                <span>
                  by{' '}
                  <a href="/#home" style={{ color: '#ec4848', textDecoration: 'none' }}>
                    DescriptoAI
                  </a>
                </span>

                © {new Date().getFullYear()}
              </p>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', color: '#4b5563', margin: 0 }}>AI-Powered Fashion Description Generator</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
