import "./App.css";

import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [query, setquery] = useState("world");
  const [progress, setprogress] = useState(10);

  return (
    <>
      <LoadingBar
        color="#a25e36"
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <Navbar querySelect={setquery} />
      <News query={query} setProgress={setprogress} />
    </>
  );
};

export default App;
