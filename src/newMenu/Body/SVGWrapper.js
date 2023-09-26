const SVGWrapper = ({ children }) => {
  return (
    <svg
      className="SVGWrapper"
      width="50"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};
export default SVGWrapper;
