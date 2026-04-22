import { useState } from 'react';
const faqs = [
  { q:'How does the AI work?', a:'DescriptoAI uses a BLIP vision-language model fine-tuned on fashion e-commerce data. It analyses your garment image — detecting colour, fabric, silhouette, and style details — then generates a premium marketing description.' },
  { q:'What types of fashion items are supported?', a:'The model covers a wide range of clothing and accessories: dresses, tops, trousers, knitwear, outerwear, footwear, handbags, and more. It works across men\'s, women\'s, and unisex fashion.' },
  { q:'Can I use a product image URL instead of uploading?', a:'Yes! Use the "Image URL" tab in the demo section to paste a direct link to any publicly accessible product image. Click Preview to verify the image loads, then generate your description.' },
  { q:'How good are the generated descriptions?', a:'Descriptions are written in a professional fashion marketing tone — highlighting fit, fabric, and style. They\'re ready to publish directly or require only minor brand-specific edits.' },
  { q:'Are my images stored on your servers?', a:'No. Images are processed in real time and never retained after the description is generated. Your privacy and intellectual property are fully protected.' },
  { q:'Will you integrate with Shopify or WooCommerce?', a:'Direct integrations with major e-commerce platforms are planned for future releases. Stay tuned for updates — API access for bulk catalogue processing is also on the roadmap.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq" style={{ padding: '80px 0', background: '#f9fafb' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.2rem)', color: '#1a1a2e', marginBottom: '0.6rem' }}>Frequently Asked Questions</h2>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: '#6b7280' }}>Everything you need to know about DescriptoAI.</p>
        </div>
        <div className="reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, marginBottom: 10, overflow: 'hidden', transition: 'box-shadow 0.2s', boxShadow: openIndex === i ? '0 4px 20px rgba(0,0,0,0.07)' : 'none' }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{ width: '100%', textAlign: 'left', background: openIndex === i ? '#1a1a2e' : '#fff', color: openIndex === i ? '#fff' : '#1a1a2e', border: 'none', padding: '16px 20px', cursor: 'pointer', fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: '0.92rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', transition: 'background 0.25s,color 0.25s' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={openIndex === i ? '#ff8c69' : '#ec4848'} width={16} height={16} style={{ flexShrink: 0 }}><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>
                  {item.q}
                </span>
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: openIndex === i ? 'rgba(255,255,255,0.15)' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 300, transition: 'transform 0.25s', transform: openIndex === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {openIndex === i && (
                <div style={{ padding: '1rem 1.25rem 1.25rem', borderTop: '1px solid #f0f0f0', fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', color: '#555', lineHeight: 1.8 }}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
