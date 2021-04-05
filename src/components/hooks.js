import React, { useEffect, useLayoutEffect } from "react";

export default function HooksBox() {
  useEffect(() => {
    console.log("use effect ran");
  }, []);
  useLayoutEffect(() => {
    console.log("use effect layout ran");
  }, []);
  return <div>Oh Crap</div>;
}
