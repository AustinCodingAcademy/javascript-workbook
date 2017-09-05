import React from 'react';

const Square = (props)=> {


  return (
    props.square['squareState'] === 'active'? (
      <div className = 'blue'>
        <h6>{props.square['question']}</h6>
      </div>
    ) : props.square['squareState'] === 'steal'? (
      <div className = 'blue'>
        <h6>Steal</h6>
      </div>
    ) : props.square['squareState'] === 'answer'? (
      <div className = 'blue'>
        <h6>{props.square['answer']}</h6>
      </div>
    ) : (  // default
      <div className = 'blue'>
        <h4>{props.square['r1Money']}</h4>
      </div>
    )

  );  // return

}  // functional component Square

export default Square;

// <p>{props.square['answer']}</p>
// <h4>{props.category} {props.square['id']}</h4>

// <h4>{props.category} {props.square['id']}</h4>
