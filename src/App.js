import React from "react"
import "./App.css"
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"
import SearchParams from "./SearchParams";
import Details from "./Details";
const App = () => {
  return (
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
  )
};

export default App
