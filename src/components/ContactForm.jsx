import { useState } from 'react';

const WEB3FORMS_KEY = '97c7e6cc-0531-4afb-bf13-0abff9053f81';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, message }) => {
  const errs = {};
  if (!name.trim() || name.trim().length < 2 || !/^[A-Za-z]+$/.test(name.trim()))
    errs.name = 'Name must be at least 2 characters.';
  if (!email.trim() || !EMAIL_RE.test(email.trim()))
    errs.email = 'Please enter a valid email address.';
  if (!message.trim() || message.trim().length < 10)
    errs.message = 'Message must be at least 10 characters.';
  return errs;
};

const ContactForm = () => {
  const [form, setForm]           = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [errors, setErrors]       = useState({});
  const [apiError, setApiError]   = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    // Clear field-level error as the user types
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (apiError)     setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ── Validation ──────────────────────────────────────────
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    // ── API call ─────────────────────────────────────────────
    setLoading(true);
    setApiError('');

    try {
      const body = new FormData();
      body.append('access_key', WEB3FORMS_KEY);
      body.append('name',       form.name.trim());
      body.append('email',      form.email.trim());
      body.append('message',    form.message.trim());

      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        // Auto-reset the success screen after 4 s
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setApiError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setApiError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Shared styles (unchanged) ─────────────────────────────
  const inputStyle = {
    width: '100%', padding: '12px 16px',
    border: '1px solid #e5e7eb', borderRadius: 8,
    fontFamily: 'DM Sans,sans-serif', fontSize: '0.92rem',
    color: '#1a1a2e', background: '#f9fafb', outline: 'none',
    transition: 'border-color 0.2s,box-shadow 0.2s', boxSizing: 'border-box',
  };
  const labelStyle = {
    display: 'block', fontFamily: 'Syne,sans-serif', fontWeight: 600,
    fontSize: '0.8rem', letterSpacing: '0.5px', color: '#3f444a',
    textTransform: 'uppercase', marginBottom: '0.4rem',
  };
  const focusIn  = (e) => { e.target.style.borderColor = '#ec4848'; e.target.style.boxShadow = '0 0 0 3px rgba(236,72,72,0.12)'; e.target.style.background = '#fff'; };
  const focusOut = (e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none';                          e.target.style.background = '#f9fafb'; };

  // ── Error style helper (new — only affects inline text, not layout) ──
  const errText = (msg) =>
    msg ? (
      <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', color: '#ef4444', margin: '0.3rem 0 0', lineHeight: 1.4 }}>
        {msg}
      </p>
    ) : null;

  // ── JSX (UI structure identical to original) ─────────────
  return (
    <section id="contact" style={{ padding: '80px 0', background: '#1a1a2e' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', background: 'rgba(236,72,72,0.15)', color: '#ff8c69', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, border: '1px solid rgba(236,72,72,0.3)', marginBottom: '0.9rem' }}>Contact</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.2rem)', color: '#fff', marginBottom: '0.6rem' }}>Let's Talk Fashion AI</h2>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto' }}>Have a question or a custom requirement? Our team will get back to you quickly.</p>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '3rem', alignItems: 'start', maxWidth: 900, margin: '0 auto' }}>

          {/* ── Contact info (unchanged) ─────────────────── */}
          <div>
            {[
              { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20}><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>), label: 'Email',        value: 'contact@descriptoai.com', href: 'mailto:contact@descriptoai.com' },
              { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20}><path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.328a6.79 6.79 0 0 0-6.79-6.79A6.79 6.79 0 0 0 5.21 11c0 3.63 1.557 6.326 3.5 8.328a19.583 19.583 0 0 0 2.826 3.024ZM12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clipRule="evenodd" /></svg>), label: 'Headquarters', value: 'Rabat, Morocco',           href: null },
              { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20}><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" /></svg>), label: 'Availability',  value: 'Mon–Fri, 9am–6pm',        href: null },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(236,72,72,0.15)', border: '1px solid rgba(236,72,72,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff8c69', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '1px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', margin: '0 0 0.2rem' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.95rem', color: '#fff', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#ff8c69'} onMouseLeave={e => e.target.style.color = '#fff'}>{item.value}</a>
                    : <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.95rem', color: '#fff', margin: 0 }}>{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* ── Form card ────────────────────────────────── */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>

            {submitted ? (
              /* ── Success screen (unchanged) ─────────── */
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#f0fdf4', border: '2px solid #86efac', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#22c55e" width={28} height={28}><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /></svg>
                </div>
                <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#1a1a2e', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              /* ── Form ───────────────────────────────── */
              <form onSubmit={handleSubmit} noValidate>

                {/* Name */}
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={labelStyle} htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name" name="name" type="text"
                    placeholder="Jane Smith"
                    value={form.name} onChange={handleChange}
                    style={{ ...inputStyle, ...(errors.name ? { borderColor: '#ef4444' } : {}) }}
                    onFocus={focusIn} onBlur={focusOut}
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined}
                  />
                  <span id="err-name">{errText(errors.name)}</span>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={labelStyle} htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email" name="email" type="email"
                    placeholder="jane@DescriptoAI.com"
                    value={form.email} onChange={handleChange}
                    style={{ ...inputStyle, ...(errors.email ? { borderColor: '#ef4444' } : {}) }}
                    onFocus={focusIn} onBlur={focusOut}
                    aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined}
                  />
                  <span id="err-email">{errText(errors.email)}</span>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle} htmlFor="contact-msg">Message</label>
                  <textarea
                    id="contact-msg" name="message"
                    placeholder="Describe your question or project..."
                    value={form.message} onChange={handleChange}
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, ...(errors.message ? { borderColor: '#ef4444' } : {}) }}
                    onFocus={focusIn} onBlur={focusOut}
                    aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined}
                  />
                  <span id="err-message">{errText(errors.message)}</span>
                </div>

                {/* API-level error */}
                {apiError && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px', marginBottom: '1.2rem' }} role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ef4444" width={16} height={16} style={{ flexShrink: 0, marginTop: 1 }}><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>
                    <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.85rem', color: '#dc2626', margin: 0, lineHeight: 1.5 }}>{apiError}</p>
                  </div>
                )}

                {/* Submit button (unchanged styles, loading state added) */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{ width: '100%', background: loading ? '#9ca3af' : '#ec4848', color: '#fff', border: 'none', padding: '13px 20px', borderRadius: 8, fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '1px', textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all 0.2s', boxShadow: loading ? 'none' : '0 4px 16px rgba(236,72,72,0.3)' }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = '#c93535'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                  onMouseLeave={e => { if (!loading) { e.currentTarget.style.background = '#ec4848'; e.currentTarget.style.transform = 'none'; } }}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      {/* Inline spinner — no external dependency */}
                      <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.35)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={16} height={16}><path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.154.75.75 0 0 0 0-1.115A28.897 28.897 0 0 0 3.105 2.288Z" /></svg>
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;