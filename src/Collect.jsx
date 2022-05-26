import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Education from './Components/Education/Education';
import Feature from './Components/Feature/Feature';
import Courses from './Components/Courses/Courses';
import OurTeachers from './Components/OurTeachers/OurTeachers';
import Programs from './Components/Programs/Programs';
import Comentary from './Components/Comentary/Comentary';
import Blog from './Components/Blog/Blog';
import Sign from './Components/Sign/Sign';
import Contact from './Components/Contact/Contact';
import Caruser from './Components/Caruser/Caruser';


const Collect = () => {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <HomePage/>
      <Education/>
      <Feature/>
      <Courses/>
      <OurTeachers/>
      <Programs/>
      <Comentary/>
      <Blog/>
      <Sign/>
      <Contact/>
      <Navbar/>
      <Caruser/>
    </div>
  );
};

export default Collect;