
import React, { Component } from 'react';
import "./style.css";


export class NavBar extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-light bg-warning">
                   <div className="col-lg-2"> <h3>The <br/>Animal Hospital</h3></div>
                       <div className="col-lg-8 group">
            <a href="#">contact</a>
            <a href="#">appointment</a>
            <a href="#">emergency</a>
            <a href="#">about us</a>
           
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


export class Body extends Component{
    render(){
        const tip =(this.props.quote);

        return(

            <div className="col-lg-12 middleArea">
                <div className="col-lg-1">
                    
                    </div>
        <div className="col-lg-3 title">
           <span id="titleQuote"><b> Your pet's health is Our Priority</b></span>
            <p>
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
<div className="col-lg-4">
    </div>
            <div className="col-lg-3 petFact">
                <span id="title-p-fact">
                <i class="fas fa-arrow-alt-circle-right"></i>    Daily Pet Tips:
                    </span>
      {tip}              
                </div>
           
            
                </div>
        )
    }
}

export class SiteInfo extends Component{
    render(){
        return(
            <div className="jumbotron">
                
<div className='col-lg-12 middleCards'>
    <div className="col">
        </div>
            <div className="col-lg-3 card" >
  <div className="card-body">
    <h5 className="card-title">Common Questions</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

<div className=" col-lg-3 card" >
  <div className="card-body">
    <h5 className="card-title">Schedule Exam</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

<div className="col-lg-3 card" >
  <div className="card-body">
    <h5 className="card-title">Wellness Plans</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    <div className="col">
        </div>

</div>
</div>
        )
    }
}

export class Location extends Component{
    render(){
        return(
            <div className="jumbotron">
  <h1 className="display-4">Locations</h1>
  <p className="lead">We have several locations throughout the North East. Find one that is most convenient for you.</p>
  <hr className="my-4" />
  <p>google map api with locations will be placed here</p>

</div>



        )
    }
} 