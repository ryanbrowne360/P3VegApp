import React from "react"


// Post Title (is this required???)
// Crop Status
// Square Footage
// Quantity
// Harvest Weight
// Date Started 
// Date Planted
// Date Harvested
// Field Notes



function Cards(props){
    return(

<div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.plant}</h5>
    <p className="card-text">Planted on {props.datestarted} over {props.squarefootage}.</p>
    <p className="card-text">{props.fielnotes}</p>
    <a href="#" className="btn btn-primary">{props.viewdetails}</a>
  </div>
</div>

    );
}

export default Card;