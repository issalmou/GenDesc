import { useEffect, useState } from 'react';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-reveal observer
  useEffect(() => {
    if (loading) return;
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [loading]);

  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader-ring"></div>
      </div>
    );
  }

  return <Home />;
}

export default App;
