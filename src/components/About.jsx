import { useState, useEffect, useRef } from 'react';

const accordionItems = [
  { title: 'Our Mission', content: 'We are a passionate team at the intersection of AI and fashion e-commerce. Our goal is to empower clothing brands and retailers by automating the creation of compelling product descriptions — so you can focus on what you do best: curating beautiful fashion.' },
  { title: 'Our Technology', content: 'DescriptoAI is built on a BLIP vision-language model fine-tuned on thousands of real fashion product images and descriptions. It understands garment details like cut, fabric, colour, and style — generating copy that resonates with shoppers.' },
  { title: 'Our Vision', content: 'We believe no fashion seller should spend hours writing product copy. In seconds, DescriptoAI transforms a single outfit photo into a ready-to-publish, conversion-optimised description for your online store.' },
];

const skills = [
  { label: 'Fashion Image Analysis',       value: 95 },
  { label: 'Marketing Copy Generation',    value: 90 },
  { label: 'Product Category Coverage',    value: 88 },
  { label: 'Fashion E-commerce Accuracy',  value: 85 },
  { label: 'Multi-language Support',       value: 40 },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [animated, setAnimated]   = useState(false);
  const skillRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !animated) setAnimated(true); }, { threshold: 0.3 });
    if (skillRef.current) observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="about" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.2rem)', color: '#1a1a2e', marginBottom: '0.6rem' }}>About DescriptoAI</h2>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: '#6b7280', maxWidth: 520, margin: '0 auto' }}>A team dedicated to automating fashion product content through AI.</p>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            {accordionItems.map((item, i) => (
              <div key={i} style={{ marginBottom: 10, borderRadius: 8, overflow: 'hidden', border: '1px solid #f0f0f0' }}>
                <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  style={{ background: openIndex === i ? '#ec4848' : '#2d2d3e', color: '#fff', width: '100%', textAlign: 'left', padding: '16px 20px', border: 'none', cursor: 'pointer', fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: '0.92rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background 0.3s' }}>
                  {item.title}
                  <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{openIndex === i ? '−' : '+'}</span>
                </button>
                {openIndex === i && (
                  <div style={{ background: '#fff', padding: '1rem 1.25rem', borderTop: '1px solid #f5f5f5' }}>
                    <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', color: '#555', lineHeight: 1.8, margin: 0 }}>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div ref={skillRef}>
            {skills.map((s, i) => (
              <div key={i} style={{ marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#3f444a' }}>{s.label}</span>
                  <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#ec4848' }}>{s.value}%</span>
                </div>
                <div style={{ background: '#f0f0f0', borderRadius: 4, height: 8, overflow: 'hidden' }}>
                  <div style={{ width: animated ? `${s.value}%` : '0%', height: '100%', background: 'linear-gradient(90deg,#ec4848 0%,#ff8c69 100%)', borderRadius: 4, transition: `width 1.2s ease-in-out ${i*0.15}s` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
