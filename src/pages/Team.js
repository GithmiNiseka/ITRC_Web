import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie,
  faLaptopCode,
  faUsers,
  faTools,
  faAward,
  faGraduationCap,
  faEnvelope,
  faPhone,
  faBuilding,
  faCheckCircle,
  faBook,
  faFlask,
  faUserGraduate
} from '@fortawesome/free-solid-svg-icons';

const Team = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [showModal, setShowModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Current Staff Data with ONLY real data
  const currentStaff = {
    management: [
      {
        name: "Mr. Shantha Puhulwella",
        position: "Coordinator | Senior Lecturer – Department of Information Technology",
        category: "Management & Leadership",
        email: "shanthaph@sjp.ac.lk",
        qualifications: [
          "Master of Science in Management and Information Technology Degree University of Kelaniya, Sri Lanka (May 2011)",
          "Bachelor of Science in Estate Management and Valuation (Special) Degree (Second Class Upper Division), University of Sri Jayewardenepura, Sri Lanka (August 2001)",
          "Certificate in Teaching for Higher Education (CTHE), Staff Development Centre, University of Sri Jayewardenepura (2010)",
          "Training Course on e-Learning/WBT (Web Based Teaching) Content Development & Delivery using an Open Source Environment, The Advanced Digital Media Technology Centre, University of Colombo School of Computing, Sri Lanka (2005)"
        ],
        research: [
          "MVM Jayathilake and PHAB Shantha. 2015. Assessing Practical Constrains in Implementing Web 2.0 Tools for Teaching English as a Second Language at Higher Education Sector in Sri Lanka: A Case Study – Sri Lanka Institute of Advanced Technological Education – International Conference Linguistics in Sri Lanka (ICLSL) – 2015, Department of Linguistics, University of Kelaniya, Sri Lanka.",
          "MVM Jayathilake and PHAB Shantha. 2015. The Perception of English Lecturers in SLIATE for Implementing Web 2.0 Tools for Pedagogy of English as a Second Language – The International Conference on Humanities (ICH) – 2015, Faculty of Humanities, University of Kelaniya, Sri Lanka.",
          "MVM Jayathilake and PHAB Shantha. 2015. Comparative Study of CAD Software Used for Architectural Designs – 5th International Research Symposium on Engineering Advancements -2015, Faculty of Engineering, South Asian Institute of Technology and Medicine (SAITM), Malambe, Sri Lanka.",
          "MVM Jayathilake and PHAB Shantha. 2014. A Framework for Measuring the Readiness of SLIATE for E-Assessment – The 15th Annual Research Symposium, Faculty of Graduate Studies, University of Kelaniya, Sri Lanka.",
          "MVM Jayathilake and PHAB Shantha. 2013. Readiness for the use of e-assessment in continuous assessing for SLIATE evaluation System – 2nd International Conference on Social Sciences (ICSS), Faculty of Social Sciences, University of Kelaniya, Sri Lanka."
        ],
        experience: [
          "Senior Lecturer (Grade II) in Information Technology, Department of Information Technology, Faculty of Management Studies & Commerce, University of Sri Jayewardenepura, Sri Lanka (2011 – Up-to-date)",
          "Lecturer (Probationary) in Information Technology, Department of Information Technology, Faculty of Management Studies & Commerce, University of Sri Jayewardenepura, Sri Lanka (2004 – 2011)"
        ],
        academicActivities: [
          "Coordinator of Information Technology Resource Centre (ITRC), Faculty of Management Studies & Commerce (August 2011 to July 2020)",
          "Member of Advisory Board of the Centre for IT Services of the University of Sri Jayewardenepura (2015)"
        ]
      }
    ],
    technical: [
      {
        name: "Mr. Saman Abeywickrama",
        position: "Instructor (Computer Technology) – Grade I",
        category: "Technical Team",
        email: "saman.a@sjp.ac.lk",
        qualifications: [
          "Bachelor of Science in Business Administration (Special) Degree, University of Sri Jayewardenepura, Sri Lanka",
          "Master of Science in Management (Management Information Systems Special), University of Sri Jayewardenepura, Sri Lanka"
        ]
      },
      {
        name: "Mr. Thushara Vidanagamage",
        position: "Instructor (Computer Technology) – Grade I",
        category: "Technical Team",
        email: "thushara.v@sjp.ac.lk",
        qualifications: [
          "Bachelor of Science in Public Administration (Special) Degree, University of Sri Jayewardenepura, Sri Lanka",
          "Master of Science in Management (Management Information Systems Special), University of Sri Jayewardenepura, Sri Lanka"
        ]
      },
      {
        name: "Mr. Dakshina Jayadewa",
        position: "Instructor (Computer Technology) – Grade II",
        category: "Technical Team",
        email: "dakshina.j@sjp.ac.lk"
      },
      {
        name: "Mr. Madhawa Kalugampitiya",
        position: "Instructor (Computer Technology) – Grade II",
        category: "Technical Team",
        email: "madhawa.k@sjp.ac.lk",
        qualifications: [
          "Bachelor of Computer Science Degree, University of Colombo School of Computing, Sri Lanka (October 2012)"
        ]
      },
      {
        name: "Mr. Kasun Kuruppu",
        position: "Instructor (Computer Technology) – Grade II",
        category: "Technical Team",
        email: "kasun.k@sjp.ac.lk"
      }
    ],
    temporary: [
      {
        name: "Miss. Divya Dulmini",
        position: "Computer Instructor (Temporary)",
        category: "Temporary Staff",
        email: "divya.d@sjp.ac.lk",
        qualifications: [
          "B.Sc. (Honours) in Mathematics, University of Sri Jayewardenepura, Sri Lanka"
        ]
      },
      {
        name: "Miss. Dilakshi Githmini",
        position: "Computer Instructor (Temporary)",
        category: "Temporary Staff",
        email: "dilakshi.g@sjp.ac.lk",
        qualifications: [
          "B.Sc. (Honours) in Applied Mathematics, University of Sri Jayewardenepura, Sri Lanka"
        ]
      },
      {
        name: "Miss. Kalpana Amarasinha",
        position: "Computer Instructor (Temporary)",
        category: "Temporary Staff",
        email: "kalpana.a@sjp.ac.lk",
        qualifications: [
          "B.Sc. Special (Hons) in IT, Sri Lanka Institute of Information Technology (SLIIT), Sri Lanka"
        ]
      },
      {
        name: "Miss. Oshani Karunarathne",
        position: "Computer Instructor (Temporary)",
        category: "Temporary Staff",
        email: "oshani.k@sjp.ac.lk",
        qualifications: [
          "B.Sc. (Hons) in IT Specialized in Cyber security, Sri Lanka Institute of Information Technology (SLIIT), Sri Lanka"
        ]
      },
      {
        name: "Miss. Ishani Wijenayake",
        position: "Computer Instructor (Temporary)",
        category: "Temporary Staff",
        email: "ishani.w@sjp.ac.lk",
        qualifications: [
          "B.Sc in IT, Sri Lanka Institute of Information Technology (SLIIT), Sri Lanka"
        ]
      },
      {
        name: "Miss. Ruvini Wickramarathne",
        position: "Computer Instructor (Temporary)",
        category: "Temporary Staff",
        email: "ruvini.w@sjp.ac.lk",
        qualifications: [
          "B.Sc Special in Operation and Technology Management, University of Sri Jayewardenepura, Sri Lanka"
        ]
      }
    ],
    support: [
      {
        name: "Mr. Nandana Rabel",
        position: "Works Aid",
        category: "Support Staff",
        email: "nandana.r@sjp.ac.lk"
      }
    ]
  };

  // Former Staff Data
  const formerCoordinators = [
    { 
      name: "Dr. K. M. S. D. Kulathunga", 
      period: "Coordinator from 2001-2002",
      image: "https://via.placeholder.com/300x200/2c5aa0/ffffff?text=Dr.+Kulathunga"
    },
    { 
      name: "Dr. K. S. Lasith Gunawardena", 
      period: "Coordinator from 2003-2006",
      image: "https://via.placeholder.com/300x200/2c5aa0/ffffff?text=Dr.+Gunawardena"
    },
    { 
      name: "Dr. C. Ranil Peiris", 
      period: "Coordinator",
      image: "https://via.placeholder.com/300x200/2c5aa0/ffffff?text=Dr.+Peiris"
    },
    { 
      name: "Dr. P. D. K. Amitha Kumara", 
      period: "Coordinator / Snr. Lecturer",
      image: "https://via.placeholder.com/300x200/2c5aa0/ffffff?text=Dr.+Kumara"
    }
  ];

  const formerTutors = [
    { name: "Ms. Nishika Jayasingha", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=N.Jayasingha" },
    { name: "Dr. (Mrs.) Nilakshi W.K. Galahitiyawe", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=Dr.+Galahitiyawe" },
    { name: "Dr. D. Kuruppuarachchi", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=Dr.+Kuruppuarachchi" },
    { name: "Ms. C. W. Chathurani Silva", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=C.W.Silva" },
    { name: "Mr. Rohan T. Subasinghe", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=R.Subasinghe" },
    { name: "Ms. U.G.D.Lakshila. D.P Abeysekara", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=L.Abeysekara" }
  ];

  const formerInstructors = [
    { name: "Dr. (Mrs.) P. L. M. Prabhani", position: "Computer Instructor (Gr II)", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=Dr.+Prabhani" },
    { name: "Mrs. Sewwandi Lakshika", position: "Com. Instructor (Temp)", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=S.Lakshika" },
    { name: "Miss. Buddhima Perera", position: "Com. Instructor (Temp)", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=B.Perera" },
    { name: "Mr. Udara Alagalla", position: "Com. Instructor (Temp)", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=U.Alagalla" },
    { name: "Miss. Oshadhi Rathnayaka", position: "Com. Instructor (Temp)", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=O.Rathnayaka" },
    { name: "Mrs. Naduni Liyanarachchi", position: "Com. Instructor (Temp)", image: "https://via.placeholder.com/200x150/1a365d/ffffff?text=N.Liyanarachchi" }
  ];

  const handleStaffClick = (staff) => {
    setSelectedStaff(staff);
    setShowModal(true);
  };

  const StaffCard = ({ staff }) => (
    <Col lg={4} md={6} className="mb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <Card 
          className="h-100 border-0 shadow-sm staff-card"
          onClick={() => handleStaffClick(staff)}
          style={{ cursor: 'pointer' }}
        >
          <div className="position-relative overflow-hidden">
            <Card.Img 
              variant="top" 
              src={`https://via.placeholder.com/300x200/1a365d/ffffff?text=${encodeURIComponent(staff.name.split(' ')[1])}`}
              style={{ height: '200px', objectFit: 'cover' }}
              alt={staff.name}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-primary-custom"
                 style={{ opacity: 0, transition: 'opacity 0.3s ease' }}>
              <span className="text-white fw-bold">View Details</span>
            </div>
          </div>
          <Card.Body className="p-4">
            <h6 className="fw-bold text-dark mb-2">{staff.name}</h6>
            <p className="text-primary-custom small mb-2">{staff.position}</p>
            <Badge bg="outline-primary" className="mb-3">{staff.category}</Badge>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );

  const FormerStaffCard = ({ staff, showPosition = false }) => (
    <Col lg={3} md={4} sm={6} className="mb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="h-100 border-0 shadow-sm">
          <Card.Img 
            variant="top" 
            src={staff.image}
            style={{ height: '150px', objectFit: 'cover' }}
            alt={staff.name}
          />
          <Card.Body className="p-3 text-center">
            <h6 className="fw-bold text-dark mb-2 small">{staff.name}</h6>
            {showPosition && staff.position && (
              <p className="text-muted small mb-2">{staff.position}</p>
            )}
            {staff.period && (
              <p className="text-muted small mb-0">{staff.period}</p>
            )}
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-50">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading ITRC Team...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.8)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
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
                Meet Our Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lead fs-5"
              >
                Dedicated professionals supporting FMSC's technological excellence
              </motion.p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Improved Tab Navigation */}
      <section className="py-4">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="custom-tab-container">
                <div className="custom-tab-nav">
                  <div 
                    className={`custom-tab-item ${activeTab === 'current' ? 'active' : ''}`}
                    onClick={() => setActiveTab('current')}
                  >
                    <div className="tab-content-horizontal">
                      <FontAwesomeIcon icon={faUsers} className="tab-icon" />
                      <span className="tab-text">Current Team</span>
                      <span className="tab-count">| {Object.values(currentStaff).flat().length}</span>
                    </div>
                  </div>
                  
                  <div className="tab-divider-vertical">|</div>
                  
                  <div 
                    className={`custom-tab-item ${activeTab === 'former' ? 'active' : ''}`}
                    onClick={() => setActiveTab('former')}
                  >
                    <div className="tab-content-horizontal">
                      <FontAwesomeIcon icon={faAward} className="tab-icon" />
                      <span className="tab-text">Former Team</span>
                      <span className="tab-count">| {formerCoordinators.length + formerTutors.length + formerInstructors.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Current Staff Section */}
      {activeTab === 'current' && (
        <section className="section-padding">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-center section-title mb-5">
                Current ITRC Team
              </h2>

              {/* Management Staff */}
              {currentStaff.management.length > 0 && (
                <div className="mb-5">
                  <h4 className="category-title mb-4">
                    <FontAwesomeIcon icon={faUserTie} className="me-2 text-primary-custom" />
                    Management & Leadership
                  </h4>
                  <Row className="g-4">
                    {currentStaff.management.map((staff, index) => (
                      <StaffCard key={index} staff={staff} />
                    ))}
                  </Row>
                </div>
              )}

              {/* Technical Staff */}
              {currentStaff.technical.length > 0 && (
                <div className="mb-5">
                  <h4 className="category-title mb-4">
                    <FontAwesomeIcon icon={faLaptopCode} className="me-2 text-primary-custom" />
                    Technical Team
                  </h4>
                  <Row className="g-4">
                    {currentStaff.technical.map((staff, index) => (
                      <StaffCard key={index} staff={staff} />
                    ))}
                  </Row>
                </div>
              )}

              {/* Temporary Staff */}
              {currentStaff.temporary.length > 0 && (
                <div className="mb-5">
                  <h4 className="category-title mb-4">
                    <FontAwesomeIcon icon={faUsers} className="me-2 text-primary-custom" />
                    Temporary Instructors
                  </h4>
                  <Row className="g-4">
                    {currentStaff.temporary.map((staff, index) => (
                      <StaffCard key={index} staff={staff} />
                    ))}
                  </Row>
                </div>
              )}

              {/* Support Staff */}
              {currentStaff.support.length > 0 && (
                <div>
                  <h4 className="category-title mb-4">
                    <FontAwesomeIcon icon={faTools} className="me-2 text-primary-custom" />
                    Support Staff
                  </h4>
                  <Row className="g-4">
                    {currentStaff.support.map((staff, index) => (
                      <StaffCard key={index} staff={staff} />
                    ))}
                  </Row>
                </div>
              )}
            </motion.div>
          </Container>
        </section>
      )}

      {/* Former Staff Section */}
      {activeTab === 'former' && (
        <section className="section-padding">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-center section-title mb-5">
                Institutional Legacy
              </h2>
              <p className="text-center text-muted mb-5">
                Honoring the contributions of past members who helped build ITRC
              </p>

              {/* Former Coordinators */}
              <div className="mb-5">
                <h4 className="category-title mb-4">
                  <FontAwesomeIcon icon={faAward} className="me-2 text-primary-custom" />
                  Former Coordinators
                </h4>
                <Row className="g-4">
                  {formerCoordinators.map((coordinator, index) => (
                    <FormerStaffCard key={index} staff={coordinator} />
                  ))}
                </Row>
              </div>

              {/* Former Tutors */}
              <div className="mb-5">
                <h4 className="category-title mb-4">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-primary-custom" />
                  Former Temporary Tutors
                </h4>
                <Row className="g-4">
                  {formerTutors.map((tutor, index) => (
                    <FormerStaffCard key={index} staff={tutor} />
                  ))}
                </Row>
              </div>

              {/* Former Instructors */}
              <div className="mb-5">
                <h4 className="category-title mb-4">
                  <FontAwesomeIcon icon={faLaptopCode} className="me-2 text-primary-custom" />
                  Former Computer Instructors
                </h4>
                <Row className="g-4">
                  {formerInstructors.map((instructor, index) => (
                    <FormerStaffCard key={index} staff={instructor} showPosition={true} />
                  ))}
                </Row>
              </div>

              <div className="text-center mt-5 p-4 bg-light rounded">
                <p className="text-muted mb-0">
                  <FontAwesomeIcon icon={faAward} className="me-2 text-warning" />
                  We gratefully acknowledge all former staff members for their valuable contributions to ITRC's growth and success.
                </p>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Staff Detail Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton className="bg-primary-custom text-white">
          <Modal.Title>
            <FontAwesomeIcon icon={faUserTie} className="me-2" />
            {selectedStaff?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          {selectedStaff && (
            <Row>
              <Col md={5} className="mb-4 mb-md-0">
                <div className="text-center">
                  <img 
                    src={`https://via.placeholder.com/300x400/1a365d/ffffff?text=${encodeURIComponent(selectedStaff.name.split(' ')[1])}`}
                    alt={selectedStaff.name}
                    className="img-fluid rounded shadow"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                  />
                  <div className="mt-4">
                    <h6 className="fw-bold border-bottom pb-2">Contact Information</h6>
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary-custom me-2" />
                      <span className="small">{selectedStaff.email}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faBuilding} className="text-primary-custom me-2" />
                      <span className="small">ITRC, FMSC Building</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={7}>
                <h4 className="fw-bold text-dark mb-1">{selectedStaff.name}</h4>
                <p className="text-primary-custom fw-semibold mb-3">{selectedStaff.position}</p>
                <Badge bg="outline-primary" className="mb-3">{selectedStaff.category}</Badge>

                <div className="mt-4">
                  {/* Educational Qualifications */}
                  {selectedStaff.qualifications && (
                    <>
                      <h6 className="fw-bold border-bottom pb-2 mt-4">
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Educational Qualifications
                      </h6>
                      <ul className="list-unstyled">
                        {selectedStaff.qualifications.map((qual, idx) => (
                          <li key={idx} className="mb-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Research and Publications */}
                  {selectedStaff.research && (
                    <>
                      <h6 className="fw-bold border-bottom pb-2 mt-4">
                        <FontAwesomeIcon icon={faFlask} className="me-2" />
                        Research and Publications
                      </h6>
                      <ul className="list-unstyled">
                        {selectedStaff.research.map((research, idx) => (
                          <li key={idx} className="mb-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-info me-2" />
                            <small>{research}</small>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Professional Experience */}
                  {selectedStaff.experience && (
                    <>
                      <h6 className="fw-bold border-bottom pb-2 mt-4">
                        <FontAwesomeIcon icon={faUserTie} className="me-2" />
                        Professional Experience
                      </h6>
                      <ul className="list-unstyled">
                        {selectedStaff.experience.map((exp, idx) => (
                          <li key={idx} className="mb-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-warning me-2" />
                            <small>{exp}</small>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Other Academic Activities */}
                  {selectedStaff.academicActivities && (
                    <>
                      <h6 className="fw-bold border-bottom pb-2 mt-4">
                        <FontAwesomeIcon icon={faUserGraduate} className="me-2" />
                        Other Academic Activities
                      </h6>
                      <ul className="list-unstyled">
                        {selectedStaff.academicActivities.map((activity, idx) => (
                          <li key={idx} className="mb-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary me-2" />
                            <small>{activity}</small>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {selectedStaff && (
            <Button variant="primary" href={`mailto:${selectedStaff.email}`}>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Send Email
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .custom-tab-container {
          width: 100%;
        }

        .custom-tab-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid #e9ecef;
          position: relative;
          background: white;
          border-radius: 10px;
          padding: 0.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .custom-tab-item {
          flex: 1;
          text-align: center;
          padding: 1rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          border-radius: 8px;
        }

        .custom-tab-item.active {
          background: var(--primary-blue);
          color: white;
        }

        .custom-tab-item:hover:not(.active) {
          background-color: rgba(26, 54, 93, 0.05);
        }

        .tab-content-horizontal {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          white-space: nowrap;
        }

        .tab-icon {
          font-size: 1.2rem;
        }

        .tab-text {
          font-weight: 600;
          font-size: 1rem;
        }

        .tab-count {
          font-size: 0.9rem;
          opacity: 0.8;
          font-weight: 500;
        }

        .custom-tab-item.active .tab-count {
          opacity: 1;
          font-weight: 600;
        }

        .tab-divider-vertical {
          padding: 0 0.5rem;
          color: #dee2e6;
          font-weight: 300;
          font-size: 1.2rem;
          height: 30px;
          display: flex;
          align-items: center;
        }

        .staff-card:hover .position-absolute {
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          .custom-tab-item {
            padding: 0.75rem 1rem;
          }
          
          .tab-content-horizontal {
            gap: 0.5rem;
          }
          
          .tab-text {
            font-size: 0.9rem;
          }
          
          .tab-icon {
            font-size: 1rem;
          }
          
          .tab-count {
            font-size: 0.8rem;
          }
          
          .tab-divider-vertical {
            padding: 0 0.25rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .tab-content-horizontal {
            flex-direction: column;
            gap: 0.25rem;
          }
          
          .tab-count {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;