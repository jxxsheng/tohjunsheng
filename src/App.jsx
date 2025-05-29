import { Navbar } from './components/Navbar';
import { StarryBackground } from './components/StarryBackground';
import { About } from './pages/About';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-black to-blue-950">
      <Navbar />
      <StarryBackground />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
