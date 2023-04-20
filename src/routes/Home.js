import React from 'react';
import Navbar from '../components/Navbar';
import Heroimmg from '../components/Heroimmg'
import Work from "../components/Work"
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2';

function Home() {
  return (
    <div>
      <Navbar />
      <Heroimmg />
      <Heroimg2 />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;