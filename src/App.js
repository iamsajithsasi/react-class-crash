import React, { lazy, Suspense } from "react";
import ReactBasics from "./components/basics";
import ChildrenProp from "./components/children";
import Errorboundary from "./components/errorboundary";
import LifeCyleMethods from "./components/lifecycle";
import RefReact from "./components/ref";

const Todoslist = lazy(() => import("./components/todoslist.js"));

function App() {
  return (
    <>
      <Errorboundary>
        <ReactBasics />
        <ChildrenProp />
        <RefReact />
        <LifeCyleMethods />
        {/* load lazily */}
        <Suspense fallback={<div>Loading...</div>}>
          <Todoslist />
        </Suspense>
      </Errorboundary>
    </>
  );
}

export default App;
