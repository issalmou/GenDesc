const Loader = ({ size = 40, color = '#ec4848', className = '' }) => (
  <div className={className} style={{ display:'inline-block', width:size, height:size, border:'3px solid rgba(236,72,72,0.2)', borderTopColor:color, borderRadius:'50%', animation:'spin 0.75s linear infinite' }} role="status" aria-label="Loading..." />
);
export default Loader;
