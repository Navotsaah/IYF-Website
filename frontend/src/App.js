import './assets/css/App.css';
import Navbar from './views/components/Navbar';
import Header from './views/pages/Main';
import Footer from './views/components/Footer';
import Carousel from './views/pages/Carousel';
import Mentor from './views/pages/Mentor';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Carousel />
      <Mentor />
      <Footer />
    </div>
  );
}

export default App;
