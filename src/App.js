import logo from './logo.svg';
import Header from './component/Header';
import './App.css';
//import Addcontact from './component/Addcontact';

import Caddcontacts from './component/Caddcontacts';
//import Data from './component/Data';
import Createcard from './component/Createcard';
import { useEffect, useState } from 'react';

function App() {
  const varLocalstorage="contacts";
  const [contacts, setcontacts] = useState([]);
  const Addcontact = contact => {
          setcontacts([{...contact,id:contacts.length},...contacts]);
          // we created unique id also to avoid error and duplicacy
          //we have recieved an object which we have initialized as an contact here and adding it to an 
  //  array named contacts
//now we need to store data in local storage of page
// synrax for it
  }
 const deletecontact = id =>{

  console.log(id);
  const newcontacts = contacts.filter(contact => id!==contact.id);
  setcontacts(newcontacts);
}

useEffect(() => {
  localStorage.setItem(varLocalstorage, JSON.stringify(contacts))
//this is the syntax for updating a local storage on web page 
}, [contacts])
// th above command is updating when contacts is updated like coponent did update

useEffect(() => {
  const retrievedata = JSON.parse(localStorage.getItem(varLocalstorage))
  if(retrievedata) setcontacts(retrievedata)
  }, [])
// the above command is working like component did mount


  return (
    <div className="App">
      <Header />
      <Caddcontacts addcontacthandler= {Addcontact} /> 
      <Createcard createcontact= {contacts} removecontact={deletecontact}/>  
       {/*we are   */}
    </div> 
  )
}

export default App
