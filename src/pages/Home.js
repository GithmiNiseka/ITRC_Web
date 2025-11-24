import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeadset,
  faUserTie,
  faCalendarCheck,
  faDesktop,
  faChevronLeft,
  faChevronRight,
  faX
} from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Hero/Hero';

const Home = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      icon: faHeadset,
      title: 'Student Services & Support',
      description: 'Find out about the IT services that are available to undergraduates at FMSC, and how to access support.',
      buttonText: 'Get Student Support',
      variant: 'outline-primary',
      link: '/student-services'
    },
    {
      icon: faUserTie,
      title: 'Staff Services',
      description: 'The undergraduates of the Faculty of Management Studies and Commerce can register with this service and can get the full advantage of original Microsoft operating systems, Applications and other development tools.',
      buttonText: 'Get Started',
      variant: 'outline-primary',
      link: '/staff-services'
    },
    {
      icon: faCalendarCheck,
      title: 'Online Lab Reservation',
      description: 'Find out about the IT services that are available to undergraduates at FMSC, and how to access support.',
      buttonText: 'Reserve Now (Staff Only)',
      variant: 'primary',
      link: 'https://itrcprojects.sjp.ac.lk/e-clerk/login.php'
    }
  ];

  const stats = [
    { number: '8', label: 'Computer Labs' },
    { number: '~6000', label: 'Students Served' },
    { number: '20+', label: 'Dedicated Staff' }
  ];

  // ITRC-related gallery images
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Modern Computer Lab'
    },
    {
      url: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      title: 'Student Learning Zone'
    },
    {
      url: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      title: 'ITRC Infrastructure'
    },
    {
      url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80',
      title: 'Technology Workshop'
    },
    {
      url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Collaborative Learning'
    },
    {
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Advanced Equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Research Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Student Projects'
    }
  ];

  const openGallery = () => {
    setShowGallery(true);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title"
              >
                Who We Are
              </motion.h2>
              
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h4 mb-4 text-primary-custom"
              >
                ITRC | Your Hub for Digital Learning and Innovation
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted mb-4"
              >
                The ITRC is dedicated to providing state-of-the-art technological support for all students at FMSC. We maintain modern computer labs, high-speed networks, and comprehensive IT services to ensure every student has the tools they need to succeed in the digital economy.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="row text-center mt-4"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="col-4">
                    <h4 className="text-primary-custom fw-bold">{stat.number}</h4>
                    <p className="small text-muted">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-4 small text-muted"
              >
                We operate 7 days a week, from 8:00 am to 8:30 pm, providing flexible access to resources.
              </motion.p>
            </Col>
            
            <Col lg={6} className="mt-4 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="position-relative"
              >
                {/* Gallery Container */}
                <div 
                  className="gallery-container shadow-lg"
                  style={{
                    height: '400px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#f8f9fa',
                    cursor: 'pointer'
                  }}
                >
                  {/* Gallery Grid */}
                  <div 
                    className="gallery-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gridTemplateRows: 'repeat(4, 1fr)',
                      gap: '4px',
                      height: '100%',
                      width: '100%'
                    }}
                  >
                    {/* Image 1 - Large */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '1 / 3',
                        gridRow: '1 / 3',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src={galleryImages[0].url}
                        alt={galleryImages[0].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        className="hover-zoom"
                      />
                    </div>
                    
                    {/* Image 2 - Small */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '3 / 4',
                        gridRow: '1 / 2',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src={galleryImages[1].url}
                        alt={galleryImages[1].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        className="hover-zoom"
                      />
                    </div>
                    
                    {/* Image 3 - Medium */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '4 / 5',
                        gridRow: '1 / 3',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src={galleryImages[2].url}
                        alt={galleryImages[2].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        className="hover-zoom"
                      />
                    </div>
                    
                    {/* Image 4 - Tall */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '3 / 4',
                        gridRow: '2 / 4',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src={galleryImages[3].url}
                        alt={galleryImages[3].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        className="hover-zoom"
                      />
                    </div>
                    
                    {/* Image 5 - Wide */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '1 / 3',
                        gridRow: '3 / 5',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src={galleryImages[4].url}
                        alt={galleryImages[4].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        className="hover-zoom"
                      />
                    </div>
                    
                    {/* Clickable "20+" Gallery Opener */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '4 / 5',
                        gridRow: '3 / 5',
                        backgroundColor: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        padding: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={openGallery}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--secondary-blue)';
                        e.target.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--primary-blue)';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px' }}>
                          20+
                        </div>
                        <div style={{ fontSize: '0.7rem' }}>
                          View Gallery
                        </div>
                        <div style={{ fontSize: '0.6rem', opacity: 0.8, marginTop: '5px' }}>
                          Click to explore
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light-custom">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-title mb-5"
          >
            Our Core Services
          </motion.h2>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="service-card h-100 p-4">
                    <Card.Body className="d-flex flex-column">
                      {/* Service Icon */}
                      <div className="service-icon-container-home mb-4">
                        <FontAwesomeIcon icon={service.icon} className="service-fa-icon" />
                      </div>
                      
                      {/* Service Content - Left Aligned */}
                      <div className="text-start">
                        <h5 className="card-title fw-bold text-dark mb-3">
                          {service.title}
                        </h5>
                        <p className="card-text text-muted mb-4">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Small Button - Left Aligned */}
                      <div className="mt-auto text-start">
                        {service.link.startsWith('http') ? (
                          <a 
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-${service.variant} btn-sm`}
                          >
                            {service.buttonText}
                          </a>
                        ) : (
                          <Link 
                            to={service.link} 
                            className={`btn btn-${service.variant} btn-sm`}
                          >
                            {service.buttonText}
                          </Link>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Gallery Modal */}
      <Modal 
        show={showGallery} 
        onHide={closeGallery} 
        size="xl" 
        centered
        className="gallery-modal"
      >
        <Modal.Header className="border-0 pb-0">
          <Modal.Title className="w-100">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">ITRC Gallery</h5>
              <button 
                onClick={closeGallery}
                className="btn btn-sm btn-outline-secondary border-0"
                style={{ fontSize: '1.2rem' }}
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="pt-0">
          {/* Main Image Display */}
          <div className="position-relative mb-4">
            <div 
              style={{
                height: '400px',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#f8f9fa'
              }}
            >
              <img 
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="btn btn-primary position-absolute"
              style={{
                top: '50%',
                left: '15px',
                transform: 'translateY(-50%)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <button 
              onClick={nextImage}
              className="btn btn-primary position-absolute"
              style={{
                top: '50%',
                right: '15px',
                transform: 'translateY(-50%)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          
          {/* Image Title */}
          <h6 className="text-center mb-3">
            {galleryImages[currentImageIndex].title}
          </h6>
          
          {/* Thumbnail Strip */}
          <div 
            className="d-flex justify-content-center gap-2"
            style={{
              overflowX: 'auto',
              paddingBottom: '10px'
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => goToImage(index)}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: currentImageIndex === index ? '3px solid var(--primary-blue)' : '2px solid #dee2e6',
                  flexShrink: 0
                }}
                className="transition-all"
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Image Counter */}
          <div className="text-center mt-3 text-muted small">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </Modal.Body>
      </Modal>

      {/* Add CSS for hover effects */}
      <style jsx>{`
        .hover-zoom:hover {
          transform: scale(1.05);
        }
        .gallery-item {
          transition: transform 0.3s ease;
        }
        .gallery-item:hover {
          z-index: 2;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Home;