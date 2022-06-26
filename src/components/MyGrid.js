import React, {useState} from "react";

export default function myGrid(props) {
    
  return (

    <>
      <div className="container my-4" style={{border: "1px solid black",padding:"3rem"}}>
      <img src={props.src} className="img-thumbnail" alt="..."  width="200" height="100" />
      <button type="button" class="btn btn-outline-primary">{props.old}</button>
        <div className="row">
          <div className="col-sm-8"><h3>{props.name}</h3></div>
          <div className="col-sm-4">{props.price}{props.type}<sub>{props.plus}</sub>
          <div className="container">
            <b>{props.name2}</b>
          </div>
                <span className="fa fa-star checked" style={{color: "orange"}}></span>
                <span className="fa fa-star checked" style={{color: "orange"}}></span>
                <span className="fa fa-star checked" style={{color: "orange"}}></span>
                <span className="fa fa-star" style={{color: "orange"}}></span>
                <span className="fa fa-star" style={{color: "orange"}}></span>
                <span>({props.star})</span>
                
                <button type="button" className="btn btn-outline-dark">Add To Cart</button><br />
        <button type="button" className="btn btn-outline-dark">Make Offer</button> 
          </div>
        </div>
        <div/>
      </div>
    </>
  );
}
