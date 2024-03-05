
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import First from './components/main';
import Destination from './components/Danstination';
import Pakege from './components/packege';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Hero from './components/hero';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destination />
      <Pakege />
      <Testimonials />
      <Contact />
      <Footer />
       <First />
      

    </div>
  
   
  );
}

export default App;
