import React from 'react'

export default class NavBar extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-light bg-warning">
                   <div className="col-lg-3"> <h3>The <br/><u>Animal Hospital </u></h3>
                   </div>
                       <div className="col-lg-7 group">
                           <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal">Contact</button>
                           <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal">Appointment</button>
                           <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal">Emergency</button>
                           <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal">About Us</button>

           
            </div>
            <div className=" col-lg-2 logoLogin">
                <h4>login/</h4>
                <h4>search</h4>
                </div>
</nav>
           


            </div>

        )
    }
}