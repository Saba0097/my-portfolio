import React from 'react'

import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import CVContent from '../components/CVContent';
import Footer from '../components/Footer';


const CV = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="MY CV." text="Welcome to my CV page! Here you can find information about my education, work experience, skills, and more. Take a look and get to know me better." />
      <CVContent />
      <Footer />
    </div>
  )
}

export default CV
