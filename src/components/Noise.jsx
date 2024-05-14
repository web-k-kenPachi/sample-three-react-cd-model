const Noise = (props) => {
  const { className, style } = props;
  return (
    <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="2.5"
          numOctaves="2"
          stitchTiles="stitch"
        >
          <animate
            attributeName="baseFrequency"
            dur="50s"
            values="2.5 2.5;2.3 2.3; 2.5 2.5"
            repeatCount="indefinite"
          ></animate>
        </feTurbulence>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};

export default Noise;
