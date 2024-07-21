import './assets/css/App.css';
import Navbar from './views/components/Navbar';
import Header from './views/pages/Main';
import Feature from './Feature';
import Footer from './views/components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
