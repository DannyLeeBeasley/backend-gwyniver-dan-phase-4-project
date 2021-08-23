import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import Login from "./Components/Login/Login";
import Pedals from "./Components/Pedals/Pedals";
import MyPedals from "./Components/Pedals/MyPedals";
import NewPedal from "./Components/Pedals/NewPedal";
import PedalBoards from "./Components/PedalBoard/PedalBoards";
import NewPedalBoard from "./Components/PedalBoard/NewPedalBoard";
import useToken from "./useToken";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useEffect, useState } from "react";

function App() {
  // const [pedals, setPedals] = useState([]);

  // useEffect(() => {
  //   async function fetchPedals() {
  //     const result = await fetch("");
  //     if (result.ok) {
  //       const data = await result.json();
  //       setPedals(data);
  //     }
  //   }
  // });
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="App">
        <Navbar />
        <Login setToken={setToken} />;
      </div>
    );
  }
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
            <Route path="/mypedals">
              <MyPedals />
            </Route>
            <Route path="/newpedal">
              <NewPedal />
            </Route>
            <Route path="/pedalboards">
              <PedalBoards />
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
