import Navbar from "./Componets/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./Componets/Home";
import About from "./Componets/About";
import Skills from "./Componets/Skills";
import Project from "./Componets/Project";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
