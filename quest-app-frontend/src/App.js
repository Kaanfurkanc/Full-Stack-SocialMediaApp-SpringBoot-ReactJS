import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import User from './components/User/User';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/:userId" element={<User />}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
