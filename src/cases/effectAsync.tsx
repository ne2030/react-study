import { useRef, useLayoutEffect, useEffect, useState } from "react";

let p;

export default function Effect() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);
  const ref = useRef<HTMLDivElement>();
  const rafRef = useRef<number>();
  const frameRef = useRef<number>(0);

  console.log(
    `%c render!! { a: ${a}, b: ${b}, c: ${c}, perf: ${performance.now()} }`,
    "color: red"
  );

  if (!p) {
    // micro task
    p = Promise.resolve().then(() => {
      console.log("promise!!", performance.now());
      // setA(100);
      p = null;
    });
  }

  // sync 동작으로 판명남, async 라면 위에 프로미스보다 먼저 실행될 수가 없음
  //
  useEffect(() => {
    console.log(
      "changed! effect",
      a,
      ref.current.textContent,
      performance.now()
    );
    setB(b + 1);
  }, [a]);

  useEffect(() => {
    console.log(`changed! effec2`);
  }, [b]);

  useLayoutEffect(() => {
    console.log("just layout");
  }, [a, b]);

  // useLayoutEffect(() => {
  //   console.log(
  //     "changed! Layout effect",
  //     a,
  //     ref.current.textContent,
  //     performance.now()
  //   );
  //   setC(c + 1);
  // }, [a]);

  let now = performance.now();
  while (performance.now() - now < 50) {
    // Do nothing for a bit...
  }

  if (!rafRef.current) {
    rafRef.current = requestAnimationFrame(() => {
      console.log("raf", ref.current.outerHTML);
      console.log(
        `%c ------------------------------------------rendering frame: ${ref.current.textContent} (a: ${a}, frame: ${frameRef.current})`,
        "color: gray"
      );
      frameRef.current += 1;
      rafRef.current = null;
    });
  }

  return (
    <div className="App">
      <button onClick={() => setA(a + 1)}>click</button>
      <div ref={ref}>{a}</div>
      <div>{b}</div>
      <div>{c}</div>
    </div>
  );
}
