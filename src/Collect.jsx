import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Education from './Components/Education/Education';
import Feature from './Components/Feature/Feature';

const Collect = () => {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <HomePage/>
      <Education/>
      <Feature/>
    </div>
  );
};

export default Collect;