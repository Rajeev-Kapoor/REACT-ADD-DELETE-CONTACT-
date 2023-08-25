import React from 'react'
import Contactlist from './Contactlist';
function Createcard(props) {
const idhandler = id =>props.removecontact(id)
 
return (
<>
<h3 className='ha3'>Contact List</h3>
 {props.createcontact.map(item=><Contactlist key= {item.id} id={item.id} email={item.email} Uname={item.username} 
 clickhandler= {idhandler}
 />)}   
    </>)
}



export default Createcard
