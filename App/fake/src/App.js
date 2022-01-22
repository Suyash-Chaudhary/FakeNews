import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Results from './components/Results';
import Home from './components/Home';

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="" element={<Home></Home>}></Route>
      <Route exact path="/results" element={<Results></Results>}></Route>
    </Routes>
  </Router>
  )
}

export default App;
