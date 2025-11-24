import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faUniversity,
  faExternalLinkAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      
      const mailtoLink = `mailto:itrc@sjp.ac.lk?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      setAlertMessage('Your email client is opening with your message. Please send the email to complete the process.');
      setAlertVariant('info');
      setShowAlert(true);
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      setAlertMessage('There was an error preparing your email. Please try again.');
      setAlertVariant('danger');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: faUniversity,
      title: "Official Address",
      content: "Information Technology Resource Centre, Faculty of Management Studies and Commerce, University of Sri Jayewardenepura, Gangodawila, Nugegoda. Sri Lanka 10250",
      link: null
    },
    {
      icon: faPhone,
      title: "Primary Contact – Office",
      content: "+94 (0) 11 2 758 772, +94 (0) 11 2 758 773",
      link: "tel:+94112758772"
    },
    {
      icon: faEnvelope,
      title: "Email",
      content: "itrc@sjp.ac.lk",
      link: "mailto:itrc@sjp.ac.lk"
    },
   
  ];

  const googleMapsUrl = "https://www.google.com/maps/d/u/0/viewer?mid=1ECP_-w7vmNt2AUfps1yzdK4_WMQ&femb=1&ll=6.853575848335223%2C79.90366300140386&z=16";

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.8)), url(https://images.unsplash.com/photo-1560415755-bd38ebf47199?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
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
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lead fs-5"
              >
                Get in touch with the ITRC team for support and inquiries
              </motion.p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-between"> {/* Changed to justify-content-between */}
            {/* Left Column - Contact Information */}
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginRight: '4rem' }}
              >
                <h2 className="section-title mb-4">
                  Contact Information
                </h2>
                <p className="text-muted mb-5">
                  Reach out to us through any of the following channels. We're here to help you with all your IT needs.
                </p>

                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="contact-item mb-4"
                    >
                      <div className="d-flex align-items-start">
                        <div className="contact-icon me-4 mt-1">
                          <FontAwesomeIcon 
                            icon={info.icon} 
                            className="text-primary-custom"
                            size="lg"
                          />
                        </div>
                        <div className="contact-content flex-grow-1">
                          <h5 className="fw-bold text-dark mb-2">
                            {info.title}
                          </h5>
                          <p className="text-muted mb-2">
                            {info.content}
                          </p>
                          {info.link && (
                            <Button
                              variant="outline-primary"
                              size="sm"
                              href={info.link}
                              className="mt-1"
                            >
                              {info.icon === faPhone ? 'Click To Call' : 
                               info.icon === faEnvelope ? 'Click To Mail' : 
                               'Click Here'}
                              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
                            </Button>
                          )}
                        </div>
                      </div>
                      {index < contactInfo.length - 1 && (
                        <hr className="my-4" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* Right Column - Contact Form */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginLeft: '2rem' }} 
              >
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h3 className="section-title mb-4">
                      Send us a Message
                    </h3>
                    <p className="text-muted mb-4">
                      Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
                    </p>

                    {showAlert && (
                      <Alert 
                        variant={alertVariant} 
                        className="mb-4"
                        dismissible
                        onClose={() => setShowAlert(false)}
                      >
                        {alertMessage}
                      </Alert>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                      <Row className="g-3">
                        <Col md={6}>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Enter your full name"
                              disabled={isSubmitting}
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="Enter your email"
                              disabled={isSubmitting}
                            />
                          </div>
                        </Col>
                      </Row>
                      
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label fw-semibold">
                          Subject *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Enter the subject"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-semibold">
                          Message *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Enter your message"
                          disabled={isSubmitting}
                        ></textarea>
                      </div>
                      
                      <div className="text-start">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="px-5"
                          disabled={isSubmitting} style={{width: '100%'}}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light-custom">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-center section-title mb-4">
                  Our Location
                </h3>
                <p className="text-center text-muted mb-4">
                  Visit us at the University of Sri Jayewardenepura
                </p>
                
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-0">
                    <div 
                      style={{ 
                        height: '400px', 
                        borderRadius: '10px',
                        overflow: 'hidden'
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2075!2d79.9010743!3d6.853576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnMTIuOSJOIDc5wrA1NCcxMy4wIkU!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="University of Sri Jayewardenepura Location"
                      ></iframe>
                    </div>
                  </Card.Body>
                </Card>
                
                <div className="text-center mt-3">
                  <Button
                    variant="outline-primary"
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    Open in Google Maps
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;