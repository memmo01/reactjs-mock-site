import React from "react";


export default class Modal extends React.Component{
    constructor(){
        super()
        this.state={
            body:"something"
        }
this.run = this.run.bind(this)
    }

    run(){
if(this.props.title  === "contact"){
    this.setState({
        body:"this is where the contact information will go"
    })
}
    }
    render(){



        return(
     <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
            
            {this.props.title}
            
            </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...{this.props.body}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        )
    }
}
