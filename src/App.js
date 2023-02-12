import React, { Suspense } from "react";
// // import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Layout/Navigation";
import Content from "./Pages/Content";
import Dynamics from "./Pages/ModulePages/Dynamics";
import Electrical from "./Pages/ModulePages/Electrical";
import Mathematics from "./Pages/ModulePages/Mathematics";
import Systems from "./Pages/ModulePages/Systems";
// // import ReactDOM from "react-dom";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/Pages/ModulePages/Dynamics" element={<Dynamics />} />
          <Route
            path="/Pages/ModulePages/Electrical"
            element={<Electrical />}
          />
          <Route
            path="/Pages/ModulePages/Mathematics"
            element={<Mathematics />}
          />
          <Route path="/Pages/ModulePages/Systems" element={<Systems />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
