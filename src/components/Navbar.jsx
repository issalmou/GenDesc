import { useState, useEffect } from 'react';

const links = [
  { href: '#home',     label: 'Home' },
  { href: '#about',    label: 'About' },
  { href: '#service',  label: 'Services' },
  { href: '#upload',   label: 'Try Now' },
  { href: '#features', label: 'Features' },
  { href: '#faq',      label: 'FAQ' },
  { href: '#contact',  label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <nav style={{ height: 64 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white shadow-sm'}`}>
        <div className="container h-full flex items-center justify-between" >
          <a href="#home" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '1px', color: '#ec4848', lineHeight: 1 }}>
              Descripto<span style={{ color: '#1a1a2e' }}>AI</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#3f444a', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target.style.color = '#ec4848')}
                  onMouseLeave={e => (e.target.style.color = '#3f444a')}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#upload" className="hidden md:inline-flex items-center gap-2" style={{ background: '#ec4848', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '1px', textTransform: 'uppercase', padding: '8px 20px', borderRadius: 6, textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c93535')}
            onMouseLeave={e => (e.currentTarget.style.background = '#ec4848')}>
            Try Free
          </a>
          <button className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {menuOpen
              ? <><span style={{ display:'block',width:22,height:2,background:'#ec4848',transform:'rotate(45deg) translate(3px,3px)' }} /><span style={{ display:'block',width:22,height:2,background:'#ec4848',transform:'rotate(-45deg) translate(3px,-3px)' }} /></>
              : <><span style={{ display:'block',width:22,height:2,background:'#3f444a' }} /><span style={{ display:'block',width:22,height:2,background:'#3f444a' }} /><span style={{ display:'block',width:14,height:2,background:'#3f444a',alignSelf:'flex-start' }} /></>
            }
          </button>
        </div>
      </nav>
      <div style={{ height: 64 }} />
      {menuOpen && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, background: '#fff', zIndex: 49, borderBottom: '1px solid #f0f0f0', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
          <ul className="list-none m-0 p-0">
            {links.map(l => (
              <li key={l.href} style={{ borderBottom: '1px solid #f5f5f5' }}>
                <a href={l.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 20px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.88rem', fontWeight: 600, color: '#3f444a', textDecoration: 'none', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Navbar;
