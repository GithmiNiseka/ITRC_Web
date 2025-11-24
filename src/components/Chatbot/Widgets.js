import React from 'react';

const Options = ({ actionProvider }) => (
  <div className="options-container">
    <p>Please choose from the following options:</p>
    <div className="options-buttons">
      <button onClick={() => actionProvider.handleFacilities()} className="option-btn">
        Facilities Information
      </button>
      <button onClick={() => actionProvider.handleServices()} className="option-btn">
        Services & Equipment
      </button>
      <button onClick={() => actionProvider.handleContact()} className="option-btn">
         Contact Information
      </button>
      <button onClick={() => actionProvider.handleHours()} className="option-btn">
     Operating Hours
      </button>
      <button onClick={() => actionProvider.handleSupport()} className="option-btn">
        Technical Support
      </button>
    </div>
  </div>
);

const FacilitiesInfo = () => (
  <div className="widget-content">
    <h4> Facilities Information</h4>
    <p>Our facilities include:</p>
    <ul>
      <li>Modern conference rooms</li>
      <li>Training laboratories</li>
      <li>Computer workstations</li>
      <li>Audio-visual equipment</li>
      <li>Collaborative workspaces</li>
    </ul>
  </div>
);

const ServicesInfo = () => (
  <div className="widget-content">
    <h4> Services & Equipment</h4>
    <p>Available services and equipment:</p>
    <ul>
      <li>Technical training sessions</li>
      <li>Equipment maintenance</li>
      <li>Software installation support</li>
      <li>Network troubleshooting</li>
      <li>Hardware repairs</li>
    </ul>
  </div>
);

const ContactInfo = () => (
  <div className="widget-content">
    <h4>📞 Contact Information</h4>
    <p><strong>ITRC FMSC</strong></p>
    <p>📍 Address: [Your Address Here]</p>
    <p>📞 Phone: [Your Phone Number]</p>
    <p>📧 Email: [Your Email Address]</p>
  </div>
);

const OperatingHours = () => (
  <div className="widget-content">
    <h4>Operating Hours</h4>
    <p><strong>Regular Hours:</strong></p>
    <ul>
      <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
      <li>Saturday - Sunday: 8:00 AM - 5:00 PM</li>
    
    </ul>
    <p><em>Holiday hours may vary.</em></p>
  </div>
);

const TechnicalSupport = () => (
  <div className="widget-content">
    <h4>Technical Support</h4>
    <p>For technical support:</p>
    <ul>
      <li>Submit a ticket through our help desk</li>
      <li>Call our support hotline: [Support Number]</li>
      <li>Visit us during operating hours</li>
      <li>Emergency support available for critical issues</li>
    </ul>
  </div>
);

export {
  Options,
  FacilitiesInfo,
  ServicesInfo,
  ContactInfo,
  OperatingHours,
  TechnicalSupport
};