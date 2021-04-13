import React from 'react';

import '../IndividualCourse/IndividualCourse.css'

const IndividualCourse = (props) => {
 const{name,Owner,img,price}=props.course;
 return (
  <div className="all-details">
   <div className="owner-image">
       <img  style={{height:'200px',width:'200px',marginTop:'10px'}}src={img}/>
   </div>
   <div className="course-details">
   <h4>Course name: {name}</h4>
   
   <p style={{}}>Content Owner: {Owner}</p>
   
   <h5>Amount of purchase:$ {price}</h5>
   <button  className="enroll" 
   onClick={()=>props.handleAddCourse(props.course)}
   style={{color:'black',backgroundColor:'orange',borderRadius:'5px',mouse:'pointer'}}>Enroll course</button>
   </div>
  </div>


 );
};

export default IndividualCourse;