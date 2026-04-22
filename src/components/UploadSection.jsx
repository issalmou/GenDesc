import { useState, useRef, useEffect, useCallback } from 'react';
import Loader from './Loader';

const API_BASE = 'https://isalmoad-gendesc.hf.space';

const cleanCaption = (raw = '') => {
  const prefixRe = /^generate\s+a\s+(detailed\s+and\s+)?attractive\s+(fashion\s+)?product\s+description\s*:?\s*/i;
  return raw.replace(prefixRe, '').trim();
};
const formatCaption = (text) => (!text ? '' : text.charAt(0).toUpperCase() + text.slice(1));

const UploadSection = () => {
  const [mode, setMode] = useState('upload');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef(null);
  const objectUrlRef = useRef(null);

  useEffect(() => () => { if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current); }, []);

  const setPreviewSafe = useCallback((url) => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = url;
    setPreview(url);
  }, []);

  const handleFile = (f) => {
    if (!f) return;
    if (!f.type.startsWith('image/')) { setError('Please select a valid image file (JPG, PNG, WebP).'); return; }
    if (f.size > 10 * 1024 * 1024) { setError('Image must be under 10 MB.'); return; }
    setError(null); setResult(null); setFile(f);
    setPreviewSafe(URL.createObjectURL(f));
  };

  const onDrop = (e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); };

  const handleUrlPreview = () => {
    const t = imageUrl.trim();
    if (!t) { setError('Please enter an image URL.'); return; }
    try { new URL(t); } catch { setError('Please enter a valid URL (e.g. https://...).'); return; }
    setError(null); setResult(null);
    if (objectUrlRef.current) { URL.revokeObjectURL(objectUrlRef.current); objectUrlRef.current = null; }
    setPreview(t);
  };

  const generate = async () => {
    setError(null); setResult(null); setLoading(true);
    try {
      let response;
      if (mode === 'upload') {
        if (!file) { setError('Please select an image first.'); setLoading(false); return; }
        const form = new FormData();
        form.append('file', file);
        response = await fetch(`${API_BASE}/caption`, { method: 'POST', body: form, signal: AbortSignal.timeout(30000) });
      } else {
        const t = imageUrl.trim();
        if (!t) { setError('Please enter an image URL.'); setLoading(false); return; }
        response = await fetch(`${API_BASE}/caption-url`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: t }),
          signal: AbortSignal.timeout(30000),
        });
      }
      if (!response.ok) {
        const d = await response.json().catch(() => ({}));
        throw new Error(d.detail || `Server error ${response.status}`);
      }
      const data = await response.json();
      const cleaned = formatCaption(cleanCaption(data.caption || ''));
      if (!cleaned) throw new Error('No description was returned from the model.');
      setResult(cleaned);
    } catch (err) {
      if (err.name === 'TimeoutError' || err.name === 'AbortError') {
        setError('Request timed out. The AI server may be warming up — please try again.');
      } else if (!navigator.onLine || err.message.toLowerCase().includes('fetch')) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError(err.message || 'Something went wrong. Please try again.');
      }
    } finally { setLoading(false); }
  };

  const reset = () => {
    if (objectUrlRef.current) { URL.revokeObjectURL(objectUrlRef.current); objectUrlRef.current = null; }
    setFile(null); setPreview(null); setImageUrl(''); setResult(null); setError(null); setLoading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const switchMode = (m) => {
    setMode(m); reset();
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const hasInput = mode === 'upload' ? !!file : !!imageUrl.trim();
  const showRight = preview || result || loading;

  const S = {
    section: { padding: '80px 0', background: 'linear-gradient(180deg,#fff8f8 0%,#fff 100%)', borderTop: '1px solid #f0e8e8' },
    card: { background: '#fff', borderRadius: 16, border: '1px solid #f0e8e8', boxShadow: '0 8px 40px rgba(236,72,72,0.06)', padding: '2.5rem', maxWidth: 960, margin: '0 auto' },
    tab: (a) => ({ flex: 1, padding: '10px 16px', border: 'none', borderRadius: 8, cursor: 'pointer', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.5px', textTransform: 'uppercase', transition: 'all 0.2s', background: a ? '#ec4848' : 'transparent', color: a ? '#fff' : '#6b7280', boxShadow: a ? '0 4px 12px rgba(236,72,72,0.3)' : 'none' }),
    dropZone: (d) => ({ border: `2px dashed ${d ? '#ec4848' : '#fca5a5'}`, borderRadius: 12, background: d ? 'rgba(236,72,72,0.04)' : '#fffafa', padding: '2.5rem 1.5rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', marginBottom: '1.2rem' }),
    previewImg: { maxHeight: 260, maxWidth: '100%', borderRadius: 10, objectFit: 'contain', boxShadow: '0 6px 24px rgba(0,0,0,0.1)' },
    btn: { display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ec4848', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '1px', textTransform: 'uppercase', padding: '13px 28px', borderRadius: 8, border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(236,72,72,0.35)' },
    btnDisabled: { background: '#e5e7eb', color: '#9ca3af', boxShadow: 'none', cursor: 'not-allowed' },
    urlInput: { flex: 1, padding: '12px 16px', border: '1.5px solid #e5e7eb', borderRadius: '8px 0 0 8px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', color: '#1a1a2e', background: '#f9fafb', outline: 'none', transition: 'border-color 0.2s,box-shadow 0.2s', minWidth: 0 },
    resultBox: { background: '#1a1a2e', borderRadius: 12, padding: '1.8rem', marginTop: '1.5rem', position: 'relative' },
    errorBox: { background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '1rem 1.25rem', marginTop: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' },
    placeholder: { background: '#f9fafb', borderRadius: 12, padding: '2rem', marginTop: '1.5rem', textAlign: 'center', border: '1px dashed #e5e7eb' },
  };

  return (
    <section id="upload" style={S.section}>
      <div className="container">
        <div className="reveal">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', background: '#fef2f2', color: '#ec4848', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, border: '1px solid #fecaca', marginBottom: '0.9rem' }}>
              Live Demo
            </span>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#1a1a2e', marginBottom: '0.6rem' }}>
              Generate a Fashion Description Instantly
            </h2>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: '#6b7280' }}>
              Upload a clothing photo or paste a product image URL — our AI crafts a premium marketing description in seconds.
            </p>
          </div>

          <div style={S.card}>
            {/* Mode Toggle */}
            <div style={{ display: 'flex', gap: 4, background: '#f3f4f6', borderRadius: 10, padding: 4, marginBottom: '1.8rem', maxWidth: 360 }}>
              <button style={S.tab(mode === 'upload')} onClick={() => switchMode('upload')} aria-pressed={mode === 'upload'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={14} height={14} style={{ verticalAlign: 'middle', marginRight: 5 }}>
                  <path d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z" />
                  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
                Upload Image
              </button>
              <button style={S.tab(mode === 'url')} onClick={() => switchMode('url')} aria-pressed={mode === 'url'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={14} height={14} style={{ verticalAlign: 'middle', marginRight: 5 }}>
                  <path fillRule="evenodd" d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" clipRule="evenodd" />
                </svg>
                Image URL
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
              alignItems: 'start',
            }}>
              {/* LEFT */}
              <div>
                {mode === 'upload' ? (
                  <>
                    <label style={{ display: 'block' }}>
                      <div
                        style={S.dropZone(dragging)}
                        onDragOver={e => { e.preventDefault(); setDragging(true); }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={onDrop}
                        onClick={() => fileInputRef.current?.click()}
                        role="button" tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && fileInputRef.current?.click()}
                        aria-label="Click or drag to upload a fashion image"
                      >
                        {preview
                          ? <img src={preview} alt="Selected fashion item preview" style={S.previewImg} />
                          : <>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ec4848" strokeWidth={1.5} width={52} height={52} style={{ margin: '0 auto 1rem' }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.338-2.032A4.5 4.5 0 0 1 17.25 19.5H6.75Z" />
                            </svg>
                            <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1a1a2e', margin: '0 0 0.4rem' }}>Drop your fashion photo here</p>
                            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', color: '#9ca3af', margin: 0 }}>or click to browse — JPG, PNG, WebP · max 10 MB</p>
                          </>
                        }
                      </div>
                    </label>
                    <input id="upload-input" ref={fileInputRef} type="file" accept="image/*" onChange={e => handleFile(e.target.files[0])} style={{ display: 'none' }} aria-label="Select image file" />
                  </>
                ) : (
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label htmlFor="url-input" style={{ display: 'block', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#3f444a', marginBottom: '0.5rem' }}>
                      Paste Image URL
                    </label>
                    <div style={{ display: 'flex', alignItems: 'stretch' }}>
                      <input
                        id="url-input" type="url"
                        placeholder="https://example.com/fashion-item.jpg"
                        value={imageUrl}
                        onChange={e => { setImageUrl(e.target.value); setError(null); setResult(null); setPreview(null); }}
                        style={S.urlInput}
                        onFocus={e => { e.target.style.borderColor = '#ec4848'; e.target.style.boxShadow = '0 0 0 3px rgba(236,72,72,0.12)'; e.target.style.background = '#fff'; }}
                        onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; e.target.style.background = '#f9fafb'; }}
                        aria-label="Fashion image URL"
                      />
                      <button
                        onClick={handleUrlPreview}
                        disabled={!imageUrl.trim()}
                        style={{ padding: '12px 16px', background: imageUrl.trim() ? '#1a1a2e' : '#e5e7eb', color: imageUrl.trim() ? '#fff' : '#9ca3af', border: 'none', borderRadius: '0 8px 8px 0', cursor: imageUrl.trim() ? 'pointer' : 'not-allowed', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.5px', textTransform: 'uppercase', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                      >
                        Preview
                      </button>
                    </div>
                    {preview && (
                      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <img src={preview} alt="Fashion item from URL" style={S.previewImg} onError={() => { setError('Could not load image from this URL. Please check the link.'); setPreview(null); }} />
                      </div>
                    )}
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div style={S.errorBox} role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ef4444" width={18} height={18} style={{ flexShrink: 0, marginTop: 1 }}>
                      <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                    </svg>
                    <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.88rem', color: '#dc2626', margin: 0, lineHeight: 1.5 }}>{error}</p>
                  </div>
                )}

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
                  <button
                    onClick={generate}
                    disabled={!hasInput || loading}
                    style={{ ...S.btn, ...(!hasInput || loading ? S.btnDisabled : {}) }}
                    onMouseEnter={e => { if (hasInput && !loading) e.currentTarget.style.background = '#c93535'; }}
                    onMouseLeave={e => { if (hasInput && !loading) e.currentTarget.style.background = '#ec4848'; }}
                    aria-label="Generate fashion description" aria-busy={loading}
                  >
                    {loading
                      ? <><Loader size={17} color="#fff" /> Analysing outfit…</>
                      : <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={15} height={15}><path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.784-.785l-.24-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684Z" /></svg> Generate Description</>
                    }
                  </button>
                  {(file || preview || result) && (
                    <button
                      onClick={reset}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', color: '#6b7280', fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: '0.82rem', padding: '13px 18px', borderRadius: 8, border: '1px solid #e5e7eb', cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#ec4848'; e.currentTarget.style.color = '#ec4848'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#6b7280'; }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={14} height={14}>
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4Z" clipRule="evenodd" />
                      </svg>
                      Reset
                    </button>
                  )}
                </div>
              </div>

              {/* RIGHT: Result */}
              {showRight && (
                <div>
                  {loading
                    ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 200, gap: '1rem', background: '#f9fafb', borderRadius: 12, border: '1px dashed #e5e7eb' }}>
                      <Loader size={44} />
                      <p style={{ fontFamily: 'DM Sans,sans-serif', color: '#9ca3af', fontSize: '0.9rem', margin: 0, textAlign: 'center' }}>Our AI is reading your fashion item…</p>
                    </div>
                    : result
                      ? <div style={S.resultBox}>
                        <button
                          onClick={copyToClipboard}
                          style={{ position: 'absolute', top: 14, right: 14, display: 'inline-flex', alignItems: 'center', gap: 5, background: copied ? '#22c55e' : 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: '0.75rem', padding: '5px 12px', borderRadius: 6, transition: 'background 0.2s' }}
                          aria-label={copied ? 'Copied' : 'Copy to clipboard'}
                        >
                          {copied
                            ? <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width={13} height={13}><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" /></svg>Copied!</>
                            : <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width={13} height={13}><path fillRule="evenodd" d="M10.986 3H12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.014A2.25 2.25 0 0 1 7.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM9.75 3a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v.25h3V3Z" clipRule="evenodd" /></svg>Copy</>
                          }
                        </button>
                        <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#ff8c69', margin: '0 0 0.8rem' }}>✦ AI-Generated Fashion Description</p>
                        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: '#e2e8f0', whiteSpace: 'pre-wrap', margin: 0, paddingRight: '4rem' }}>{result}</p>
                      </div>
                      : <div style={S.placeholder}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth={1.5} width={44} height={44} style={{ margin: '0 auto 1rem' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                        </svg>
                        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', color: '#9ca3af', margin: 0 }}>
                          Your AI-generated fashion description will appear here.<br />
                          Hit <strong>Generate Description</strong> to get started.
                        </p>
                      </div>
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
