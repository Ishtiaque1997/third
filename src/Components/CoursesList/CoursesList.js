import React, { useState } from 'react';
import fakeData from '../../fakeData/CourseData'
import IndividualCourse from '../IndividualCourse/IndividualCourse';
import Payment from '../Payment/Payment';
import '../CoursesList/CoursesList.css'

const CoursesList = () => {
 // const{name,Owner,img,price}=props.course;
 const first10=fakeData.slice(0,12);
 const[courses,setCourses]=useState(first10);
 const [payment,setPayment]=useState([]);
 const handleAddCourse=(course)=>{
  console.log('Course added',course);
  const newPayment=[...payment,course];
  setPayment(newPayment);
 }
 console.log(first10);

 return (
  <div className="all-container">
   <div className="course-details">
    {
        courses.map(course=><IndividualCourse
          course={course}
          handleAddCourse={handleAddCourse}
          ></IndividualCourse>)
    }
   </div>
   <div className="payment-details">
   <Payment payment={payment}></Payment>
    
   </div>
   
  </div>
 );
};

export default CoursesList;