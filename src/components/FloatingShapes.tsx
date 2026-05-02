const FloatingShapes = () => {
  return (
    <>
      {/* Circle - Pink outline */}
      <div
        className="floating-shape w-8 h-8 border-4 border-pink-400 rounded-full"
        style={{ top: "15%", right: "10%" }}
      />

      {/* Large black circle with pink dot */}
      <div
        className="floating-shape-slow"
        style={{ bottom: "30%", right: "8%" }}
      >
        <div className="relative">
          <div className="w-24 h-24 bg-foreground/90 rounded-full" />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-pink-500 rounded-full" />
        </div>
      </div>

      {/* Triangle outline */}
      <div
        className="floating-shape-fast"
        style={{ top: "10%", left: "35%" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path
            d="M30 5L55 50H5L30 5Z"
            stroke="hsl(330, 60%, 60%)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* Yellow rounded square */}
      <div
        className="floating-shape"
        style={{ bottom: "25%", left: "25%" }}
      >
        <div className="w-16 h-16 bg-amber-400 rounded-2xl rotate-12" />
      </div>

      {/* Small teal circle */}
      <div
        className="floating-shape-slow w-4 h-4 bg-teal rounded-full"
        style={{ top: "40%", right: "20%" }}
      />
    </>
  );
};

export default FloatingShapes;
