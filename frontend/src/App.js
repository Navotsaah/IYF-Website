import logo from './logo.svg';
import './assets/css/App.css';
import Navbar from './views/components/Navbar';
import Header from './views/pages/Main';
import Feature from './Feature';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
    </div>
  );
}

export default App;
