import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Auction from './components/Auction';
import Details from "./components/Details"

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='auctions' element={<Auction/>}/>
      <Route path='/auctions/:id' element={<Details/>}/>
     </Routes>
    </div>
  );
}

export default App;
