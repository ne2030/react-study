import React, { useEffect, useRef, useLayoutEffect, useState } from "react";

export default function Basic() {
  const [a, setA] = useState(1);
  const [b, setB] = useState("1");

  const ref = useRef<HTMLDivElement>();
  const rafRef = useRef<number>();
  const frameRef = useRef<number>(0);

  console.log(`%c render!! ${a}`, "color: red");

  useEffect(() => {
    setA(2);
  }, []);

  if (!rafRef.current) {
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      console.log(ref.current.outerHTML);
      console.log(
        `%c rendering frame: ${ref.current.textContent} (a: ${a}, frame: ${frameRef.current})`,
        "color: gray"
      );
      frameRef.current += 1;
      rafRef.current = null;
    });
  }

  // useEffect(() => {
  //   console.log("use effect1: ", a);
  // }, [a]);

  // useLayoutEffect(() => {
  //   console.log("use layout effect1: ", a);
  // }, [a]);

  // useEffect(() => {
  //   console.log("use effect2: ", a);
  // }, [a]);

  // useLayoutEffect(() => {
  //   console.log("use layout effect2: ", a);
  // }, [a]);

  // // effect b

  // useLayoutEffect(() => {
  //   console.log("use layout effect0: ", b);
  // }, [b]);

  // useEffect(() => {
  //   console.log("set b");
  //   setB(b + "0");
  // }, [a]);

  // useLayoutEffect(() => {
  //   console.log("listen a, console b", b);
  // }, [a]);

  // useEffect(() => {
  //   console.log("use effect1: ", b);
  // }, [b]);

  // useLayoutEffect(() => {
  //   console.log("use layout effect1: ", b);
  // }, [b]);

  // useEffect(() => {
  //   console.log("use effect2: ", b);
  // }, [b]);

  // useLayoutEffect(() => {
  //   console.log("use layout effect2: ", b);
  // }, [b]);

  return (
    <div className="App">
      <button onClick={() => setA(a + 1)}>A button</button>
      <button onClick={() => setB(b + "0")}>B button</button>
      <div ref={ref}>{a}</div>
    </div>
  );
}
