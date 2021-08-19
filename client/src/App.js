import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import Login from "./Components/Login/Login";
import Pedals from "./Components/Pedals/Pedals";
import NewPedal from "./Components/Pedals/NewPedal";
import PedalBoard from "./Components/PedalBoard/PedalBoard";
import NewPedalBoard from "./Components/PedalBoard/NewPedalBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/pedals">
              <Pedals />
            </Route>
            <Route path="/newpedal">
              <NewPedal />
            </Route>
            <Route path="/pedalboard">
              <PedalBoard />
            </Route>
            <Route path="/newpedalboard">
              <NewPedalBoard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
