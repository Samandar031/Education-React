import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Education from './Components/Education/Education';
import Feature from './Components/Feature/Feature';
import Courses from './Components/Courses/Courses';

const Collect = () => {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <HomePage/>
      <Education/>
      <Feature/>
      <Courses/>
    </div>
  );
};

export default Collect;