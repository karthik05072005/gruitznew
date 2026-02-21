export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora Blobs */}
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />
      
      {/* Glass Shapes */}
      <div className="glass-shape glass-shape-1" />
      <div className="glass-shape glass-shape-2" />
      <div className="glass-shape glass-shape-3" />
    </div>
  );
}
