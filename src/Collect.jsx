import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Education from './Components/Education/Education';
import Feature from './Components/Feature/Feature';
import Courses from './Components/Courses/Courses';
import OurTeachers from './Components/OurTeachers/OurTeachers';

const Collect = () => {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <HomePage/>
      <Education/>
      <Feature/>
      <Courses/>
      <OurTeachers/>
    </div>
  );
};

export default Collect;