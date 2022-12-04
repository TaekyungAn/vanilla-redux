import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" exact element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
