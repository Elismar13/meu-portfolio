import Me from './components/Me';
import Header from './components/Header';
import About from './components/About';
import MyProjects from './components/MyProjects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main lang="en" max-w-screen-lg mx-auto>
      <Header />
      <Me />
      <About />
      <MyProjects />
      <Experience />
      <Contact />
    </main>
  );
}
