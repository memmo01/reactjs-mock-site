
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
            <a href="#">contact</a>
            <a href="#">contact</a>
            <a href="#">contact</a>
           
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
        return(

            <div className ="middleArea">
 
                </div>
        )
    }
}

export class SiteInfo extends Component{
    render(){
        return(
            <div className="jumbotron">
<div className='middleCards'>
            <div className="card" >
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

<div className="card" >
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

<div className="card" >
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

<div className="card" >
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
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
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4" />
  <p>It uses utility classNames for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>



        )
    }
} 