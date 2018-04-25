import React from 'react'
import Modal from './modal'

export default class NavBar extends React.Component{
    constructor(){
        super()
        this.state={
            name:"hello",
            body:"this is some new good contact information"
        }
        this.contact = this.contact.bind(this)
        this.appointment = this.appointment.bind(this)
        this.emergency = this.emergency.bind(this)
        this.about = this.about.bind(this)
    }

    contact(){
       this.setState({name:"contact"})
    }
      appointment(){
       this.setState({name:"appointment"})
    }
      emergency(){
       this.setState({name:"emergency"})
    }
      about(){
       this.setState({name:"about"})
    }
  
   
    render(){

     
        return(
            <div>
                <nav class="navbar navbar-light bg-warning">
                   <div className="col-lg-3"> <h3>The <br/><u>Animal Hospital </u></h3>
                   </div>
                       <div className="col-lg-7 group">
                           <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal" onClick={this.contact}>Contact</button>
                           <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal" onClick={this.appointment}>Appointment</button>
                           <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal" onClick={this.emergency}>Emergency</button>
                           <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal" onClick={this.about}>About Us</button>

           
            </div>
            <div className=" col-lg-2 logoLogin">
                <h4>login/</h4>
                <h4>search</h4>
                </div>
</nav>
<Modal title={this.state.name} body={this.state.body}/>
           


            </div>

        )
    }
}