import React, { lazy, Suspense, Profiler, useState } from "react";
import ReactBasics from "./components/basics";
import ChildrenProp from "./components/children";
import Errorboundary from "./components/errorboundary";
import Hocfile from "./components/hocfile";
import LifeCyleMethods from "./components/lifecycle";
import PortalPop from "./components/portal";
import ProptypesBox from "./components/proptypes";
import PureComponentBox from "./components/purecomp";
import RefReact from "./components/ref";
import RenderBox from "./components/render";
import RenderA from "./components/rendera";
import RenderB from "./components/renderb";
import HooksBox from "./components/hooks";

const Todoslist = lazy(() => import("./components/todoslist.js"));

function App() {
  const [popShow, setPopShow] = useState(false);
  const [count, setCount] = useState("WebHungaa");
  const closePopShow = () => {
    setPopShow(false);
  };

  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    console.log("Portal Log ", startTime, baseDuration);
  }

  // setInterval(() => {
  //   setCount("WebHungaa");
  // }, 1000);

  return (
    <>
      <Errorboundary>
        <Profiler id="Navigation" onRender={onRenderCallback}>
          <ReactBasics />
        </Profiler>

        <ChildrenProp />
        <RefReact />
        <LifeCyleMethods />
        {/* load lazily */}
        <Suspense fallback={<div>Loading...</div>}>
          <Todoslist />
        </Suspense>
        <Hocfile />
        <RenderBox
          render={(state) => (
            <>
              <RenderA location={state} />
              <RenderB location={state} />
            </>
          )}
        />
        <ProptypesBox name="WebHungaa - React Class" />
        <PureComponentBox count={count} />

        <button onClick={() => setPopShow(true)}>Show Portal</button>
        {popShow && (
          <PortalPop closePopShow={closePopShow}>
            <p>Hello this is a portal message</p>
            <span className="close" onClick={closePopShow}>
              &#10006;
            </span>
          </PortalPop>
        )}
      </Errorboundary>
      <HooksBox />
    </>
  );
}

export default App;
