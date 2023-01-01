import React, { useLayoutEffect, useEffect, useState } from "react";
import "./styles.css";
import Cycle from "./cases/cycle";
import Async from "./cases/useEffectAsync";
import Basic from "./cases/basic";
import Effect from "./cases/effectAsync";

export default function App() {
  // return <Async />;
  // return <Cycle />;
  // // return <Basic />;
  return <Effect />;
}
