import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1.5rem 0;
  font-size: 0.9rem;
  border-top: 3px solid #3498db;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const EssentialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: #3498db;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer role="contentinfo">
      <div className="container">
        <FooterContent>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>
              Information Technology Resource Centre
            </p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#bdc3c7' }}>
              University of Sri Jayewardenepura
            </p>
          </div>
          
          <EssentialLinks>
            <a href="/contact" aria-label="Contact us">Contact</a>
            <a href="/privacy" aria-label="Privacy policy">Privacy</a>
            <a href="/terms" aria-label="Terms of service">Terms</a>
          </EssentialLinks>

          <div>
            <p style={{ margin: 0, fontSize: '0.8rem' }}>
              &copy; {currentYear} ITRC. All Rights Reserved
            </p>
          </div>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;