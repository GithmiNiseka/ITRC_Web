import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GlobalStyles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CustomChatbot from './components/Chatbot/Chatbot';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import StudentServices from './pages/StudentServices';
import StaffServices from './pages/StaffServices';
import Facilities from './pages/Facilities';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-services" element={<StudentServices />} />
            <Route path="/staff-services" element={<StaffServices />} />
            <Route path="/facilities" element={<Facilities />} />
          </Routes>
        </main>
          <CustomChatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;