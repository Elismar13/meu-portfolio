import './App.css';
import Me from './components/Me';
import Header from './components/Header';
import About from './components/About';
import MyProjects from './components/MyProjects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <>
      <Header />
      <Me />
      <About />
      <MyProjects />
      <Experience />
      <Contact />
      <DarkModeToggle />
    </>
  );
};

export default App
