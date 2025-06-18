import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GalleryGrid from './components/GalleryGrid'; // new import

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GalleryGrid />
    </>
  );
}

export default App;
