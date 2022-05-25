import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Education from './Components/Education/Education';

const Collect = () => {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <HomePage/>
      <Education/>
    </div>
  );
};

export default Collect;