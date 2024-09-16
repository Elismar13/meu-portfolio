import './App.css';
import './i18n/i18n';
import Me from './components/Me';
import Header from './components/Header';
import About from './components/About';
import MyProjects from './components/MyProjects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Me />
      <About />
      <MyProjects />
      <Experience />
      <Contact />
      <DarkModeToggle />
      <Footer />
    </ThemeProvider>
  );
};

export default App
