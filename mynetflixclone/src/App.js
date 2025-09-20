import React from "react";
import Home from "./pages/Home";
import { BrowserRouter,Route ,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
         <BrowserRouter>
    <Home/>
      </BrowserRouter>

    </div>
  );
}

export default App;