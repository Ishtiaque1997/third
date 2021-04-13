import React from 'react';

import '../Header.css'
const Header = () => {
 return (
  <div className="Header">
   <nav>
    <a href="Home">Home</a>
    <a href="Content Owners">Owners</a>
    <a href="Upcoming courses">Upcoming courses</a>
   </nav>
   {/* <h3 className="tag">Welcome to E-tech learners</h3> */}
   </div>  
 );
};

export default Header;