import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import PokemonGallery from "./components/PokemonGallery";
import PokemonCreate from "./components/PokemonCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
          </div>
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={PokemonGallery} />
            <Route exact path="/create" component={PokemonCreate} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
