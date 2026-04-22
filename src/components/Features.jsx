const features = [
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" /></svg>), title: 'Lightning Fast', desc: 'Get a full fashion product description in under 6 seconds after uploading your outfit photo.' },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}><path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.386 1.26.594 1.927.594.88 0 1.218-.75 1.218-1.5v-1.61c-1.987.362-2.57-.48-2.733-.919-.137-.354-.61-1.174-1.042-1.412-.29-.162-.585-.573.004-.577a1.5 1.5 0 0 1 1.125.556c.535.68 1.46.965 2.335.483a1.872 1.872 0 0 1 .549-1.168c-1.924-.214-3.953-.971-3.953-4.3 0-.955.338-1.727.896-2.335-.09-.215-.39-1.1.086-2.295 0 0 .735-.234 2.407.9a8.4 8.4 0 0 1 4.374 0c1.671-1.134 2.406-.9 2.406-.9.476 1.194.176 2.08.086 2.295.558.608.896 1.38.896 2.335 0 3.338-2.034 4.085-3.968 4.295a2.099 2.099 0 0 1 .596 1.633v2.41c0 .75.337 1.5 1.218 1.5.667 0 1.241-.208 1.927-.594A8.25 8.25 0 0 0 12 .75Z" /></svg>), title: 'Fashion-Trained Model', desc: 'Fine-tuned on thousands of real fashion product listings for precise, on-brand, retail-ready copy.' },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}><path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" /></svg>), title: 'Dead-Simple Interface', desc: 'No technical skills needed. Upload your garment photo, click generate, and copy your description.' },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>), title: 'Premium Quality Copy', desc: 'Persuasive, elegant descriptions that highlight fabrics, fit, and style — boosting your conversion rate.' },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}><path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.121-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" /></svg>), title: 'All Fashion Categories', desc: 'Dresses, knitwear, sneakers, outerwear, accessories — our model adapts to virtually every clothing category.' },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}><path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" /></svg>), title: 'Secure Cloud Processing', desc: 'No local installation required. Everything runs on our secure cloud — your images are never stored.' },
];

const Features = () => (
  <section id="features" style={{ padding: '80px 0', background: '#fff' }}>
    <div className="container">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.2rem)', color: '#1a1a2e', marginBottom: '0.6rem' }}>Why DescriptoAI?</h2>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: '#6b7280' }}>Everything you need to automate your fashion product content at scale.</p>
      </div>
      <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: 52, height: 52, background: 'linear-gradient(135deg,#fef2f2,#fff1f1)', border: '1px solid #fecaca', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ec4848' }}>{f.icon}</div>
            <div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1a1a2e', marginBottom: '0.35rem' }}>{f.title}</h3>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.87rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Features;
