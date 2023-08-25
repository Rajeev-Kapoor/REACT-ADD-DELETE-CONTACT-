import React, { Component } from 'react'

 class Caddcontacts extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       email:""
    }
  }
eventhandler = event => this.setState({[event.target.name]:event.target.value})

SubmitHandler = event => {
event.preventDefault();

if(this.state.username===''||this.state.email==='')
return;
//this is the syntax to take the vale stored in object to the parent component
this.props.addcontacthandler(this.state);
// this will clear the data from screen after entering data and doing submit
this.setState({username:"",email:""})

}  

render() {


        return (
        <>
    <h4 className='ha3'>Add Contact</h4>
    <form className="container" onSubmit = {this.SubmitHandler}>
    <label htmlFor='username'>User name :</label>
    <input type='text' id='username' name="username"value={this.state.username} placeholder='Please add the name of the contact to be added' onChange = {this.eventhandler} ></input>
    <label htmlFor='email'>Email Address :</label>
    <input type='text' id='email' name="email" value= {this.state.email}placeholder='Please add the Email Address of the contact' onChange = {this.eventhandler} ></input>
    <button type='submit'>ADD</button>
    </form>
    </>
      )
  }
}
export default Caddcontacts;