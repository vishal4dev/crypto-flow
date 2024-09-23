import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";


function App() {
  return (
    <Router>

      <Header/>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/exchanges' element = {<Exchanges />} />
        <Route path='/coins' element = {<Coins />} />
        <Route path='/coins/:id' element = {<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
