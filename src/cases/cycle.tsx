import { useRef, useLayoutEffect, useEffect, useState } from "react";

export default function Cycle() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);
  const ref = useRef<HTMLDivElement>();
  const rafRef = useRef<number>();
  const frameRef = useRef<number>(0);

  console.log(`%c render!! { a: ${a}, b: ${b}, c: ${c} }`, "color: red");

  useEffect(() => {
    console.log(
      "changed! effect",
      a,
      ref.current.textContent,
      performance.now()
    );
    setB(b + 1);
  }, [a]);

  useLayoutEffect(() => {
    console.log(
      "changed! Layout effect",
      a,
      ref.current.textContent,
      performance.now()
    );
    setC(c + 1);
  }, [a]);

  useEffect(() => {
    console.log("effect b", b);
  }, [b]);

  useEffect(() => {
    console.log("effect c", c);
  }, [c]);

  let now = performance.now();
  while (performance.now() - now < 150) {
    // Do nothing for a bit...
  }

  // if (a < 10) {
  //   setTimeout(() => {
  //     setA(a + 1);
  //   }, 0);
  // }

  if (!rafRef.current) {
    rafRef.current = requestAnimationFrame(() => {
      console.log(ref.current.outerHTML);
      console.log(
        `%c rendering frame: ${ref.current.textContent} (a: ${a}, frame: ${frameRef.current})`,
        "color: gray"
      );
      frameRef.current += 1;
      rafRef.current = null;
    });
  }

  return (
    <div className="App">
      <button onClick={() => setA(a + 1)}>A button</button>
      <button onClick={() => setB(b + "0")}>B button</button>
      <div ref={ref}>{b}</div>
      <div>{b}</div>
      <div>{c}</div>
    </div>
  );
}
