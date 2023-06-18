import './App.css';
import { Home } from './pages/home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
