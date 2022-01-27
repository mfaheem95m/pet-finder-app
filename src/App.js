import React from "react"
import "./App.css"
import { useState } from "react"
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value = {theme}>
    <div>
      <Router>
        <header>
           <Link to = "/">
        Adopt me!
        </Link>
        </header>


        <Switch>
            <Route path = "/details/:id">
          <Details/>
        </Route>
        <Route path= "/">
       <SearchParams/>
        </Route>
        </Switch>

      </Router>

    </div>
    </ThemeContext.Provider>
  )
};

export default App
