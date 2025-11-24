import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    rgba(26, 54, 93, 0.85) 0%, 
    rgba(41, 72, 120, 0.8) 100%),
    url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: var(--text-light);
  padding: 200px 0 100px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background: var(--accent-gold);
  color: var(--primary-blue);
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: #e6c34c;
    color: var(--primary-blue);
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 50%;
`;

const Hero = () => {
  return (
    <HeroSection>
      {/* Floating Background Shapes */}
      <FloatingShape
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '100px',
          height: '100px',
          top: '20%',
          left: '10%'
        }}
      />
      
      <FloatingShape
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '150px',
          height: '150px',
          bottom: '20%',
          right: '10%'
        }}
      />

      {/* Additional floating shapes for better visual effect */}
      <FloatingShape
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '80px',
          height: '80px',
          top: '60%',
          left: '5%'
        }}
      />

      <FloatingShape
        animate={{
          y: [0, -30, 0],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '120px',
          height: '120px',
          bottom: '30%',
          right: '15%'
        }}
      />

      <div className="container">
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Information Technology Resource Centre
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Innovation and Excellence in Technology Education at Faculty of Management Studies & Commerce
          </Subtitle>
          
          <StyledLink to="/facilities">
            <CTAButton
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Facilities
            </CTAButton>
          </StyledLink>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero;