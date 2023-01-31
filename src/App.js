import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import TestimonialSlider from './TestimonialSlider';
import Classes from './Classes';
import BMICalculator from './BMICalculator';
import BodyFatPercentageCalculator from './BodyFatPercentageCalculator';
import Contact from './Contact';
import Pricing from './Pricing';
import About from './About';

function GymPage() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/gym" exact>Home</NavLink>
          <NavLink to="/classes">Classes</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/calculators">Health Calculators</NavLink>
        </nav>

        <header>
          <h1>Fit Fortress</h1>
        </header>

        <Routes>
          <Route path="/gym" element={<HomePage />} />
          <Route path="classes" element={<Classes />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="calculators" element={<Calculators />} />
        </Routes>

      </div>
    </Router>
  );
}

function HomePage() {
    return (
      <>
      <div className="container home-section">
        <h2>Welcome to our gym</h2>
        <p>We are a community of fitness enthusiasts dedicated to helping you reach your goals. Our state-of-the-art facilities, experienced trainers, and wide range of classes and programs make us the perfect choice for anyone looking to improve their health and fitness.</p>
        <div className="home-section__image-container">
          {/* <img src={require('path/to/image.jpg')} alt="Fitness equipment" /> */}
        </div>
        <div className="home-section__cta-container">
          <button>Sign up now</button>
          <button>Learn more</button>
        </div>
      </div>
      <TestimonialSlider />
      </>
    )
  }
  

function Calculators() {
  return (
   <section>
   <BMICalculator/>
   <BodyFatPercentageCalculator/>
   </section>
  );
}

export default GymPage;
