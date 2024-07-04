import Image from 'next/image';
import Me from './components/Me';
import Header from './components/Header';

export default function Home() {
  return (
    <main lang="en">
      <section>
        <Header />
        <Me />
      </section>
    </main>
  );
}
