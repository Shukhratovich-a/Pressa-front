const Marker = () => {
  return (
    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="m19 8.5-7 7-7-7"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
    </svg>
  );
};

export default Marker;
