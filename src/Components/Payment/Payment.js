import React from 'react';
import '../Payment/Payment.css'
const Payment = (props) => {
 const payment=props.payment;
 const totalPrice=payment.reduce((totalPrice,prd)=>totalPrice+prd.price,0);

// let bonus=0;
// if(totalPrice>500){
//  bonus=totalPrice-10;
//  let newTotalPrice=totalPrice-bonus;
 
 
// }
// // let newTotalPrice=totalPrice-bonus;
// // let newTotalPrice=totalPrice-bonus;
 return (
  <div className="payment-details">
   <h4>Courses enrolled:{payment.length}</h4>
   {/* <p>Bonus amount: {bonus}</p> */}
   <p>Total cost availed: $ {totalPrice}</p>
   
  </div>
 );
};

export default Payment;