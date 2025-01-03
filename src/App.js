import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>

      <Header/>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/exchanges' element = {<Exchanges />} />
        <Route path='/coins' element = {<Coins />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
