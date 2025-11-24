import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const values = [
    {
      icon: 'bi-people',
      title: 'Respect & Dignity',
      description: 'Respect the rights, differences, and dignity of our community'
    },
    {
      icon: 'bi-shield-check',
      title: 'Honesty & Integrity',
      description: 'Maintain honesty and integrity in all activities'
    },
    {
      icon: 'bi-award',
      title: 'Excellence',
      description: 'Diligent pursuit of excellence in all our work'
    },
    {
      icon: 'bi-check-circle',
      title: 'Accountability',
      description: 'Accountability for actions and workplace conduct'
    },
    {
      icon: 'bi-lightning',
      title: 'Reliability',
      description: 'Responsive, accessible, and reliable infrastructure'
    },
    {
      icon: 'bi-graph-up',
      title: 'Collaboration',
      description: 'Results through leadership and teamwork'
    }
  ];

  const facilities = [
    { 
      number: '8', 
      label: 'Computer Labs'
    },
    { 
      number: '500+', 
      label: 'Networked Computers'
    },
    { 
      number: '20+', 
      label: 'Qualified Staff'
    },
   
  ];

  const services = [
    {
      icon: 'bi-check-circle-fill',
      title: 'Personal User Accounts',
      description: 'Individual login with personal storage space for academic content'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'File Management',
      description: 'Take Files-out System for easy data transfer to removable devices'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'Password Reset',
      description: 'Self-service password reset system for student convenience'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'Internet Access',
      description: 'Dedicated lab with 50 computers for internet activities'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'Licensed Software',
      description: 'Free Microsoft software through university partnership'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'Digital Notice Board',
      description: 'Real-time updates on timetables and activities'
    }
  ];

  // ITRC Gallery Images
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "ITRC Computer Lab"
    },
    {
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern Computer Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "ITRC Students Working"
    },
    {
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "IT Infrastructure"
    }
  ];

  // Split services into two arrays for two columns
  const leftColumnServices = services.slice(0, 3);
  const rightColumnServices = services.slice(3, 6);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.8)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 0 80px'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="display-5 fw-bold mb-4"
              >
                About ITRC
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lead fs-4"
              >
                Gateway for IT Development Among FMSC Students
              </motion.p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title mb-4"
              >
                Our Mission
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="lead text-muted mb-4">
                  To develop and maintain <strong>excellence in Information and Communication Systems</strong> through facilitating accessibility to information for our academic community.
                </p>
                
                <p className="mb-4">
                  We provide the latest knowledge and highest quality skills in computing technologies, using innovative and secure technologies to support productivity and wider accessibility to information resources.
                </p>

                <div className="bg-light-custom p-4 rounded">
                  <p className="mb-0 text-primary-custom fw-semibold">
                    <i className="bi bi-info-circle me-2"></i>
                    ITRC serves as the main gateway for IT development among FMSC students and fulfills most IT-related needs of faculty academics.
                  </p>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6} className="mt-5 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Image Gallery Grid */}
                <Row className="g-3">
                  {galleryImages.map((image, index) => (
                    <Col key={index} sm={6}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="gallery-image-container"
                      >
                        <img 
                          src={image.url}
                          alt={image.alt}
                          className="gallery-image"
                          style={{
                            width: '100%',
                            height: '180px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                          }}
                        />
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Facilities Overview - Single Line Design */}
      <section className="py-5 bg-light-custom">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-title mb-5"
          >
            Our Facilities
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="facilities-single-line"
          >
            <Row className="g-0 align-items-center justify-content-center">
              {facilities.map((facility, index) => (
                <React.Fragment key={index}>
                  <Col lg={3} md={6} className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="facility-item-single"
                    >
                      <h3 className="facility-number-single text-primary-custom fw-bold mb-2">
                        {facility.number}
                      </h3>
                      <p className="facility-label-single text-dark mb-0">
                        {facility.label}
                      </p>
                    </motion.div>
                  </Col>
                  {index < facilities.length - 1 && (
                    <div className="col-auto d-none d-lg-block">
                      <div className="facility-divider-single"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </Row>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-5"
          >
            <div className="bg-primary-custom text-white p-4 rounded">
              <h5 className="mb-2">
                <i className="bi bi-clock me-2"></i>
                Operating Hours
              </h5>
              <p className="mb-1 operating-hours-text">Weekdays: 8:00 AM - 8:30 PM   |    Weekends: 8:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services Section - 2 Column Layout */}
      <section className="section-padding">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-title mb-5"
          >
            Student Services
          </motion.h2>
          
          <Row className="g-5">
            {/* Left Column */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="services-column"
              >
                {leftColumnServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="service-item"
                  >
                    <div className="service-content">
                      <div className="service-icon-container-blue">
                        <FontAwesomeIcon icon={faCheck} className="service-tick-blue" />
                      </div>
                      <div className="service-text">
                        <h5 className="service-title">{service.title}</h5>
                        <p className="service-description">{service.description}</p>
                      </div>
                    </div>
                    {index < leftColumnServices.length - 1 && <hr className="service-divider" />}
                  </motion.div>
                ))}
              </motion.div>
            </Col>

            {/* Right Column */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="services-column"
              >
                {rightColumnServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    whileHover={{ x: 10 }}
                    className="service-item"
                  >
                    <div className="service-content">
                      <div className="service-icon-container-blue">
                        <FontAwesomeIcon icon={faCheck} className="service-tick-blue" />
                      </div>
                      <div className="service-text">
                        <h5 className="service-title">{service.title}</h5>
                        <p className="service-description">{service.description}</p>
                      </div>
                    </div>
                    {index < rightColumnServices.length - 1 && <hr className="service-divider" />}
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-title mb-5 text-white"
          >
            Our Values
          </motion.h2>
          
          <Row className="g-4">
            {values.map((value, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-secondary bg-opacity-25 p-4 rounded h-100">
                    <i className={`bi ${value.icon} display-6 text-accent mb-3`}></i>
                    <h5 className="fw-bold mb-3">{value.title}</h5>
                    <p className="text-light mb-0">{value.description}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h3 className="section-title mb-4">Examination & Learning Support</h3>
                <p className="lead text-muted mb-4">
                  ITRC provides the technological platform for conducting online and computer-based practical examinations 
                  utilizing Learning Management Systems (LMS) and our advanced Exam Management System.
                </p>
                
                <div className="row g-4 mt-4">
                  <div className="col-md-6">
                    <div className="bg-light-custom p-4 rounded">
                      <i className="bi bi-cast display-6 text-accent mb-3"></i>
                      <h5 className="fw-bold">Audio-Visual Facility</h5>
                      <p className="text-muted mb-0">Share lectures across all labs simultaneously</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light-custom p-4 rounded">
                      <i className="bi bi-laptop display-6 text-accent mb-3"></i>
                      <h5 className="fw-bold">Scheduled Labs</h5>
                      <p className="text-muted mb-0">Labs allocated for lectures and practical classes</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .gallery-image-container {
          transition: transform 0.3s ease;
        }
        
        .gallery-image:hover {
          transform: scale(1.02);
        }
        
        .gallery-image {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default About;