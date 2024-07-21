import './assets/css/App.css';
import Navbar from './views/components/Navbar';
import Header from './views/pages/Main';
import Footer from './views/components/Footer';
import Carousel from './views/pages/Carousel';
import Mentor from './views/pages/Mentor';
import { useState } from 'react';
import Courses from './views/pages/Courses';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const handleSectionChange = (section) => {
    console.log(section);
    setActiveSection(section);

  };
  return (
    <div className="App">
      <Navbar onSectionChange={handleSectionChange} />
      {activeSection === 'home' && (
        <>
          <Header />
          <Carousel />
          <Mentor />
        </>
      )}
      {activeSection === 'courses' && <Courses />}
      <Footer />
    </div>
  );
}

export default App;
