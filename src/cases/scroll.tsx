import { useRef, useLayoutEffect, useEffect, useState } from "react";

export default function Scroll() {
  const [a, setA] = useState(1);
  const ref = useRef<HTMLDivElement>();

  const handleScroll = (e) => {
    console.log(e.target.scrollTop);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [a]);

  return (
    <div className="App">
      <div ref={ref}>
        <div
          onScroll={handleScroll}
          style={{ height: "10000px", width: "100%" }}
        >
          long
        </div>
      </div>
    </div>
  );
}
