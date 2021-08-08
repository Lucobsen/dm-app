import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./components/about/about.component";
import { HomePage } from "./components/home/home.component";
import { NavBar } from "./components/nav-bar/nav-bar.component";

function App() {
  return (
    <main className="app">
      <NavBar />

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </Switch>
    </main>
  );
}

export default App;
