import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar 
        expand="lg" 
        className="bg-white sticky-top border-bottom py-2"
        expanded={expanded}
        style={{ minHeight: '70px' }}
      >
        <Container>
          {/* Brand Section - Left Side */}
          <div className="d-flex align-items-center">
            {/* University Logo */}
            <motion.a 
              href="https://www.sjp.ac.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="me-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="https://www.sjp.ac.lk/wp-content/uploads/2020/10/usjp-logo.png"
                alt="University of Sri Jayewardenepura"
                height="40"
                style={{ objectFit: 'contain' }}
              />
            </motion.a>

            {/* Vertical Divider */}
            <div className="vr d-none d-md-block mx-2" style={{ height: '35px', opacity: 0.3 }}></div>

            {/* ITRC Logo and Brand */}
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center p-0" onClick={() => setExpanded(false)}>
              <div className="d-flex align-items-center">
                <img 
                  src="/logo.png"  
                  alt="ITRC"
                  height="45"
                  className="me-2"
                  onError={(e) => {
                    // Fallback if logo.png doesn't exist
                    e.target.src = "https://img.icons8.com/ios-filled/100/1a73e8/computer-support.png";
                  }}
                />
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-4 text-dark" style={{ lineHeight: '1.1' }}>ITRC | FMSC</span>
                  <small className="text-muted" style={{ fontSize: '0.7rem', lineHeight: '1.2' }}>
                    Information Technology Resource Centre
                  </small>
                </div>
              </div>
            </Navbar.Brand>
          </div>
          
          {/* Navigation - Right Side */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")}
            className="border-0"
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-1">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/team", label: "Staff" },
                { path: "/facilities", label: "Facilities" },
                { path: "/contact", label: "Contact" }
              ].map((item) => (
                <motion.div 
                  key={item.path}
                  whileHover={{ y: -1 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Nav.Link 
                    as={Link} 
                    to={item.path} 
                    onClick={() => setExpanded(false)}
                    className="fw-medium px-3 text-dark py-2"
                    style={{ fontSize: '0.95rem' }}
                  >
                    {item.label}
                  </Nav.Link>
                </motion.div>
              ))}
              
              {/* Lab Reservation Button */}
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="ms-2"
              >
                <a 
                  href="https://itrcprojects.sjp.ac.lk/e-clerk/login.php" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary px-3 py-2 text-white text-decoration-none d-flex align-items-center"
                  style={{ 
                    backgroundColor: '#1a73e8', 
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    fontSize: '0.9rem'
                  }}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Lab Reservation
                </a>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;