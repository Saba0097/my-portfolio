import React from 'react'

import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Work from '../components/Work';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="BLOG." text="some of my most recent work" />
      <Work /> 
      <Footer />
    </div>
  )
}

export default Blog