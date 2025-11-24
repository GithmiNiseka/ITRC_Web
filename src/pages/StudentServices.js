import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronUp,
  faChevronDown,
  faLaptop,
  faFileExport,
  faKey,
  faHeadset,
  faEnvelope,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'; 

const StudentServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      icon: faLaptop,
      title: 'ITRC Lab-Computer System',
      content: `
        <p>This system provides a personal user account for each undergraduate of the FMSC. The username is the student's MC number and all the students are informed about their initial password on their first day at ITRC Labs.</p>
        <p>At the very first login attempt, the students should change their initial password and after that, if the students have forgotten their passwords, they have to use the ITRC Password Reset System.</p>
        <p>Each student is given a separate network location for storing his private documents which is named as "XXXXX-Home" (Z) drive. (Accessible only at ITRC Computer Labs).</p>
        <p>In order to take your files out, you can transfer a copy of the relevant document in "Outbox" (Y) drive and use the ITRC File Copy System to take a copy to your flash drive.</p>
      `
    },
    {
      icon: faFileExport,
      title: 'File Copy System',
      content: `
        <p>This system will facilitate all FMSC undergraduates to take your documents which have been transferred to "Outbox" (Y) network location using a removable storage device.</p>
        <p><strong>Location:</strong> The system is located at the Students' service area at ITRC.</p>
      `
    },
    {
      icon: faKey,
      title: 'ITRC Password Reset System',
      content: `
        <p>This system facilitates to reset your forgotten password which is used as computer logins at ITRC computer labs.</p>
        <p><strong>Location:</strong> The system is located at the Students' service area at ITRC.</p>
      `
    },
    {
      icon: faHeadset,
      title: 'ITRC Helpdesk',
      content: `
        <p>ITRC Helpdesk team is here to help with any information or advice that you might need during your study. ITRC makes every effort to respond to your support requests within 24 hours on weekdays and 48 hours on weekends.</p>
        <p><strong>Login URL:</strong> <a href="https://itrc.sjp.ac.lk/helpdesk/" target="_blank" rel="noopener noreferrer">https://itrc.sjp.ac.lk/helpdesk/</a></p>
      `
    },
    {
      icon: faMicrosoft,
      title: 'Microsoft Office 365',
      content: `
        <p>ITRC facilitates Microsoft Office 365 software suite to undergraduates and staff members of the FMSC, which includes well-known applications such as Microsoft Word, Excel, OneNote, Publisher, PowerPoint, and Outlook. The software can be installed in up to five devices using your account.</p>
        <p><strong>Login URL:</strong> <a href="https://portal.office.com" target="_blank" rel="noopener noreferrer">https://portal.office.com</a></p>
        <p><strong>Username:</strong> [mc_number_without_mc]@mgt.sjp.ac.lk (Ex. 77000@mgt.sjp.ac.lk)</p>
        <p><strong>Password:</strong> [password_for_itrc_lab_computers]</p>
        <p><em>ITRC Password Reset System which is located at student's service area at ITRC, should be used to reset the ITRC lab password as well as the Office 365 Password.</em></p>
      `
    },
    {
      icon: faEnvelope,
      title: 'Students Official Emails',
      content: `
        <p>Each FMSC undergraduate will receive an official student email and user account at their registration. You do not need to make a request to create an account. All official email messages which were sent by the faculty will be sent to your student email account. If you want to use a different email account, you should set up a redirection from your student email account.</p>
        <p>To access student email account, go to Microsoft Office 365 outlook and log in with your O365 username and password.</p>
        <p><strong>Login URL:</strong> <a href="https://outlook.office.com" target="_blank" rel="noopener noreferrer">https://outlook.office.com</a></p>
        <p><strong>Username:</strong> [mc_number_without_mc]@mgt.sjp.ac.lk (Ex. 77000@mgt.sjp.ac.lk)</p>
        <p><strong>Password:</strong> [password_for_itrc_lab_computers]</p>
        <p><em>ITRC Password Reset System which is located at student's service area at ITRC, should be used to reset the ITRC lab password as well as the Office 365 Password.</em></p>
      `
    },
    {
      icon: faCode,
      title: 'Development Software – Microsoft Azure for FMSC',
      content: `
        <p>The undergraduates and the staff of the Faculty of Management Studies and Commerce can enjoy the full advantage of original Microsoft server operating systems, applications, and other development tools using your office 365 account.</p>
        <p><strong>Login URL:</strong> <a href="https://azureforeducation.microsoft.com/devtools" target="_blank" rel="noopener noreferrer">https://azureforeducation.microsoft.com/devtools</a></p>
      `
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.8)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
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
                Student Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lead fs-5"
              >
                Comprehensive IT Services for FMSC Students
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
                  Available Services
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

export default StudentServices;