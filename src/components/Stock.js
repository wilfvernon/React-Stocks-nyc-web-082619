import React from 'react'

const Stock = (props) => {
  
  function handleClick() {
      props.transferStock(props.id)
  }
  return(
  <div onClick={handleClick} id={props.id}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name} {props.number > 1 ? `(${props.number})` : null} </h5>
        <p className="card-text">{props.ticker} {props.price}</p>
      </div>
    </div>
  </div>
  )
};

export default Stock
