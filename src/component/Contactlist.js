import React from 'react'
import { BsFillTrash2Fill } from 'react-icons/bs';
import dummy from './images/dummy.png';

function Contactlist(props) {
const {Uname,email,id } = props
    
  return (
    <>
    <div className='box'>
    <img  src={dummy} alt=''/>
    <i><BsFillTrash2Fill onClick={()=>props.clickhandler(id)}/></i>
    {/* this function is selecting id which got clicked and transfered as props   */}
    <div className='container'>
        
     <p>Name -  {Uname} 
     </p>
      <p> Email Address - {email}</p> 
      
         </div>
              
          </div>

     </>)
}

export default Contactlist