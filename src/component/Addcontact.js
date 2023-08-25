import React, { useState } from 'react'

const Addcontact = (props) => {

  const [username, setusername] = useState('')
    const[email,setemail]=useState('')
    const SubmitHandler= event=>{
      event.preventDefault();
      // const contact={username,
      //   email,};
      if(username===''||email==='')
   return;
    
  //    console.log(contact);
// props.Addcontacthandler(contact);
    setusername('');
      setemail('');
     
 } 
  return (<>
    <h4 className='ha3'>Add Contact</h4>
    <form className="container"onSubmit={SubmitHandler}>
    <label htmlFor='username'>User name :</label>
    <input type='text' id='username' value={username} placeholder='Please add the name of the contact to be added' onChange={event=>setusername(event.target.value)} ></input>
    <label htmlFor='email'>Email Address :</label>
    <input type='text' id='email' value= {email}placeholder='Please add the Email Address of the contact' onChange={event=>setemail(event.target.value)} ></input>
    <button type='submit'>ADD</button>
    </form>
    </>)
}

export default Addcontact