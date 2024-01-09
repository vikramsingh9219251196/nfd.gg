import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
import Hero2 from './components/Hero2/Hero2';
import Features from './components/features/Features';
import Roadmap from './components/Roadmap/Roadmap';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div id="__next">
   <Navbar/>
   <Hero/>
   <Hero2/>
   <Features/>
   <Roadmap/>
   <Contact/>
   </div>
    </div>
  );
}

export default App;
