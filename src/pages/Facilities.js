import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Button, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDesktop, 
  faMicrochip, 
  faVideo,
  faVolumeUp,
  faCalendarAlt,
  faClock,
  faLaptop,
  faCheckCircle,
  faTimesCircle,
  faLanguage,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const Facilities = () => {
  const [selectedLab, setSelectedLab] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const computerLabs = [
    {
      id: 1,
      name: 'ITRC Lab 1',
      type: 'Computer Lab',
      capacity: '64 Computers',
      location: 'Ground Floor',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        computers: '64 Computers (60 for Examinations)',
        processor: 'Intel Core i3',
        ram: '4 GB',
        hardDisk: '500 GB',
        os: 'Microsoft Windows 10',
        projector: true,
        soundSystem: true
      }
    },
    {
      id: 2,
      name: 'ITRC Lab 2',
      type: 'Internal Lab',
      capacity: '35 Computers',
      location: 'Ground Floor',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        computers: '35 Computers',
        processor: 'Intel Core 2 Duo',
        ram: '2 GB',
        hardDisk: '160 GB',
        os: 'Microsoft Windows 10',
        projector: false,
        soundSystem: false
      }
    },
    {
      id: 3,
      name: 'ITRC Lab 3',
      type: 'Computer Lab',
      capacity: '74 Computers',
      location: 'Ground Floor',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        computers: '74 Computers (70 for Examinations)',
        processor: 'Intel Core i5',
        ram: '4 GB',
        hardDisk: '500 GB',
        os: 'Microsoft Windows 10',
        projector: true,
        soundSystem: true
      }
    },
    {
      id: 4,
      name: 'ITRC Lab 4',
      type: 'English Language Lab',
      capacity: '50 Computers',
      location: 'First Floor',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        computers: '50 Computers',
        processor: 'Intel Core i5',
        ram: '4 GB',
        hardDisk: '500 GB',
        os: 'Microsoft Windows 7',
        projector: true,
        soundSystem: true
      }
    },
    {
      id: 5,
      name: 'ITRC Lab 5',
      type: 'Computer Lab',
      capacity: '50 Computers',
      location: 'First Floor',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        computers: '50 Computers (40 for Examinations)',
        processor: 'Intel Core i5',
        ram: '4 GB',
        hardDisk: '500 GB',
        os: 'Microsoft Windows 10',
        projector: true,
        soundSystem: true
      }
    },
    {
      id: 6,
      name: 'ITRC Lab 6',
      type: 'Computer Lab',
      capacity: '50 Computers',
      location: 'First Floor',
      image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        computers: '50 Computers (40 for Examinations)',
        processor: 'Intel Core i5',
        ram: '4 GB',
        hardDisk: '500 GB',
        os: 'Microsoft Windows 10',
        projector: true,
        soundSystem: true
      }
    },
    {
      id: 7,
      name: 'ITRC Lab 7',
      type: 'Computer Lab',
      capacity: '100 Computers',
      location: 'Second Floor',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        computers: '100 Computers (95 for Examinations)',
        processor: 'Intel Core i7',
        ram: '8 GB',
        hardDisk: '1 TB',
        os: 'Microsoft Windows 10',
        projector: true,
        soundSystem: true
      }
    },
    {
      id: 8,
      name: 'ITRC Lab 8',
      type: 'Computer Lab',
      capacity: '70 Computers',
      location: 'Second Floor',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        computers: '70 Computers (65 for Examinations)',
        processor: 'Intel Core i5',
        ram: '4 GB',
        hardDisk: '500 GB',
        os: 'Microsoft Windows 10',
        projector: true,
        soundSystem: true
      }
    }
  ];

  const openLabDetails = (lab) => {
    setSelectedLab(lab);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLab(null);
  };

  const totalComputers = computerLabs.reduce((total, lab) => {
    const computers = parseInt(lab.specs.computers);
    return total + (isNaN(computers) ? 0 : computers);
  }, 0);

  // External URLs
  const labScheduleUrl = "https://itrcprojects.sjp.ac.lk/e-clerk/weekschedulereportpub.php";
  const reserveLabUrl = "https://itrcprojects.sjp.ac.lk/e-clerk/login.php";

  // Get type badge color
  const getTypeBadgeColor = (type) => {
    switch (type) {
      case 'Computer Lab':
        return 'primary';
      case 'Internal Lab':
        return 'secondary';
      case 'English Language Lab':
        return 'info';
      default:
        return 'primary';
    }
  };

  // Get type icon
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Computer Lab':
        return faDesktop;
      case 'Internal Lab':
        return faUsers;
      case 'English Language Lab':
        return faLanguage;
      default:
        return faDesktop;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.8)), url(https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
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
                ITRC Computer Laboratories
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lead fs-4"
              >
                8 Specialized Labs with {totalComputers}+ Computers for FMSC Students
              </motion.p>
              
              {/* Lab Reservation Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4"
              >
                <Button 
                  variant="outline-light" 
                  size="lg"
                  className="me-3 mb-2"
                  href={labScheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                  Lab Allocation Schedule
                </Button>
                <Button 
                  variant="success" 
                  size="lg"
                  className="mb-2"
                  href={reserveLabUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{backgroundColor:'#d4af37', borderColor:'#d4af37'}}
                >
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  Reserve Lab (Staff)
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Stats Section */}
      <section className="py-4 bg-primary-custom text-white">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-3 mb-md-0">
              <h3 className="fw-bold display-6">{computerLabs.length}</h3>
              <p className="mb-0">Specialized Labs</p>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <h3 className="fw-bold display-6">{totalComputers}+</h3>
              <p className="mb-0">Total Computers</p>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <h3 className="fw-bold display-6">7</h3>
              <p className="mb-0">Days Service</p>
            </Col>
            <Col md={3}>
              <h3 className="fw-bold display-6">20+</h3>
              <p className="mb-0">Support Staff</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Computer Labs Grid */}
      <section className="section-padding">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-title mb-5"
          >
            Our Specialized Laboratories
          </motion.h2>

          <Row className="g-4">
            {computerLabs.map((lab, index) => (
              <Col key={lab.id} md={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card 
                    className="lab-card h-100 border-0 shadow-sm"
                    onClick={() => openLabDetails(lab)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Lab Image */}
                    <div className="lab-image-container">
                      <Card.Img 
                        variant="top" 
                        src={lab.image} 
                        className="lab-image"
                        alt={lab.name}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="lab-overlay">
                        <Badge bg={getTypeBadgeColor(lab.type)} className="lab-type-badge">
                          <FontAwesomeIcon icon={getTypeIcon(lab.type)} className="me-1" />
                          {lab.type}
                        </Badge>
                      </div>
                    </div>

                    <Card.Body className="p-4 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5 className="card-title fw-bold text-primary-custom mb-0">
                          {lab.name}
                        </h5>
                        <Badge bg="light" text="dark" className="location-badge">
                          {lab.location}
                        </Badge>
                      </div>
                      
                      <div className="lab-specs flex-grow-1">
                        <div className="spec-item d-flex align-items-center mb-2">
                          <FontAwesomeIcon icon={faDesktop} className="text-accent me-2" size="sm" />
                          <span className="small">{lab.capacity}</span>
                        </div>
                        
                        <div className="spec-item d-flex align-items-center mb-2">
                          <FontAwesomeIcon icon={faMicrochip} className="text-accent me-2" size="sm" />
                          <span className="small">{lab.specs.processor}</span>
                        </div>
                        
                        <div className="spec-item d-flex align-items-center mb-3">
                          <FontAwesomeIcon icon={faLaptop} className="text-accent me-2" size="sm" />
                          <span className="small">{lab.specs.os}</span>
                        </div>
                      </div>

                      <div className="lab-features">
                        {lab.specs.projector && (
                          <Badge bg="outline-primary" className="me-1 mb-1 feature-badge">
                            <FontAwesomeIcon icon={faVideo} className="me-1" />
                            Projector
                          </Badge>
                        )}
                        {lab.specs.soundSystem && (
                          <Badge bg="outline-primary" className="me-1 mb-1 feature-badge">
                            <FontAwesomeIcon icon={faVolumeUp} className="me-1" />
                            Sound System
                          </Badge>
                        )}
                      </div>

                      <div className="text-center mt-3 pt-2 border-top">
                        <span className="text-primary small fw-semibold">
                          Click for technical details →
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Lab Details Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>
            <FontAwesomeIcon icon={getTypeIcon(selectedLab?.type)} className="me-2" />
            {selectedLab?.name} - {selectedLab?.type}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {selectedLab && (
            <div className="lab-details">
              <Row className="mb-4">
                <Col md={6}>
                  <div className="lab-modal-image mb-3">
                    <img 
                      src={selectedLab.image} 
                      alt={selectedLab.name}
                      className="img-fluid rounded"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="lab-type-info">
                    <Badge bg={getTypeBadgeColor(selectedLab.type)} className="mb-2">
                      <FontAwesomeIcon icon={getTypeIcon(selectedLab.type)} className="me-1" />
                      {selectedLab.type}
                    </Badge>
                    <p className="mb-1"><strong>Location:</strong> {selectedLab.location}</p>
                    <p className="mb-0"><strong>Capacity:</strong> {selectedLab.capacity}</p>
                  </div>
                </Col>
                <Col md={6}>
                  <h6 className="fw-bold text-primary-custom mb-3">Facilities</h6>
                  <div className="facilities-list">
                    <div className="d-flex align-items-center mb-2">
                      {selectedLab.specs.projector ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />
                      )}
                      <span>Multimedia Projector</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      {selectedLab.specs.soundSystem ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />
                      )}
                      <span>Sound System</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faDesktop} className="text-primary me-2" />
                      <span>{selectedLab.capacity}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faMicrochip} className="text-primary me-2" />
                      <span>{selectedLab.specs.processor}</span>
                    </div>
                  </div>
                </Col>
              </Row>

              <hr />

              <h6 className="fw-bold text-primary-custom mb-3">Technical Specifications</h6>
              <Table responsive bordered className="mb-0">
                <tbody>
                  <tr>
                    <td className="fw-semibold bg-light" width="40%">Number of Computers</td>
                    <td>{selectedLab.specs.computers}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold bg-light">Processor</td>
                    <td>{selectedLab.specs.processor}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold bg-light">RAM</td>
                    <td>{selectedLab.specs.ram}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold bg-light">Hard Disk</td>
                    <td>{selectedLab.specs.hardDisk}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold bg-light">Operating System</td>
                    <td>{selectedLab.specs.os}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button 
            variant="primary"
            href={labScheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
            Check Schedule
          </Button>
          <Button 
            variant="success"
            href={reserveLabUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faClock} className="me-2" />
            Reserve Lab
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Facilities;