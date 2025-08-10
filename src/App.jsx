import { Articles } from './components/Articles/Articles';
import { FixedNav } from './components/FixedNav/FixedNav';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';

function App() {
  return (
    <>
      <Header />
      <FixedNav />
      <main>
        <HeroSection />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
