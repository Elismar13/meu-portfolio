import Image from 'next/image';
import Me from './components/Me';
import Header from './components/Header';
import About from './components/About';
import MyProjects from './components/MyProjects';
import Experience from './components/Experience';

export default function Home() {
  return (
    <main lang="en">
      <section max-w-screen-lg mx-auto>
        <Header />
        <Me />
        <About />
        <MyProjects />
        <Experience />
      </section>
    </main>
  );
}
