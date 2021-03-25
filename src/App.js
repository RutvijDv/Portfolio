import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Projects" exact component={() => <Projects />} />
          <Route path="/About" exact component={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
