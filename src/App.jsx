import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cta from './components/Cta';

function App() {
  return (
    <div className="flex flex-col min-h-screen pt-[70px]">
      <Navbar />
      <div className="flex-1 flex flex-col md:flex-row">
        <Hero />
        <Cta />
      </div>
    </div>
  );
}

export default App;
