import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronUp,
  faChevronDown,
  faDesktop,
  faCode,
  faCalendarCheck,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

const StaffServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      icon: faDesktop,
      title: 'Microsoft Office 365',
      content: `
        <p>ITRC facilitates Microsoft Office 365 software suite to undergraduates and staff members of the FMSC, which includes well-known applications such as Microsoft Word, Excel, OneNote, Publisher, PowerPoint, and Outlook. The software can be installed in up to five devices using your account.</p>
        <p>User accounts for all staff members are already created. If you are a new staff member, please make the request to the coordinator through your HOD, then ITRC will create an account for you.</p>
        <p><strong>Login URL:</strong> <a href="https://portal.office.com" target="_blank" rel="noopener noreferrer">https://portal.office.com</a></p>
        <p><strong>Username:</strong> [your_id]@mgt.sjp.ac.lk</p>
        <p><strong>Password:</strong> [your_password]</p>
        <p>If your username or password is forgotten, please send a request to <a href="mailto:office365support@mgt.sjp.ac.lk">office365support@mgt.sjp.ac.lk</a> from your sjp email about your issue.</p>
      `
    },
    {
      icon: faCode,
      title: 'Microsoft Azure for FMSC',
      content: `
        <p>The undergraduates and staff of the Faculty of Management Studies and Commerce can register with this service at ITRC and can get the full advantage of original Microsoft server operating systems, applications, and other development tools.</p>
        <p><strong>Login URL:</strong> <a href="https://azureforeducation.microsoft.com/devtools" target="_blank" rel="noopener noreferrer">https://azureforeducation.microsoft.com/devtools</a></p>
        <p>Your office 365 login credentials can be used for authentication.</p>
      `
    },
    {
      icon: faCalendarCheck,
      title: 'Lab Reservation',
      content: `
        <p>Lab Reservation is facilitated with 'e-clerk' Online Portal. The administrative staff member at the departments can request for ITRC lab reservations through the portal for lectures and examinations.</p>
        <p><strong>Login URL:</strong> <a href="https://itrcprojects.sjp.ac.lk/e-clerk" target="_blank" rel="noopener noreferrer">https://itrcprojects.sjp.ac.lk/e-clerk</a></p>
      `
    },
    {
      icon: faUserPlus,
      title: 'New Staff Account Setup',
      content: `
        <p>For new staff members who need ITRC accounts and access to various systems, please follow the procedure below:</p>
        <ol>
          <li>Contact your Head of Department (HOD) to initiate the account creation request</li>
          <li>The HOD will coordinate with the ITRC coordinator</li>
          <li>ITRC will create your accounts for Office 365, lab systems, and other required services</li>
          <li>You will receive login credentials and setup instructions via email</li>
        </ol>
        <p>For any issues with account setup, please contact the ITRC helpdesk.</p>
      `
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.8)), url(https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '40vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 0 60px'
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
                Staff Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lead fs-5"
              >
                Comprehensive IT Services for FMSC Staff Members
              </motion.p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Accordion Section */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="services-accordion"
              >
                <h2 className="text-center section-title mb-5">
                  Available Staff Services
                </h2>
                
                <div className="accordion-container">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="accordion-item"
                    >
                      <div
                        className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <div className="accordion-icon">
                          <FontAwesomeIcon icon={service.icon} />
                        </div>
                        <h3 className="accordion-title">
                          {service.title}
                        </h3>
                        <div className="accordion-arrow">
                          <FontAwesomeIcon 
                            icon={activeIndex === index ? faChevronUp : faChevronDown} 
                          />
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="accordion-content"
                          >
                            <div 
                              className="accordion-body"
                              dangerouslySetInnerHTML={{ __html: service.content }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default StaffServices;