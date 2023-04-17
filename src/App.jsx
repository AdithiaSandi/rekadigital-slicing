import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { SideMenu } from "./components/SideMenu";
import { Banner } from "./components/Banner";

function App() {

  return (
    <div className="App">
      <SideMenu />
      <Banner/>
    </div>
  );
}

export default App;
