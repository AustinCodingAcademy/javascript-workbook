import React from 'react';

const Square = (props)=> {


  return (
    props.square['squareState'] === 'activeA'? (
      <div className = 'blue' onClick={() => props.handleClick(props.category, props.square['id'])}>
        <h4>{props.square['question']}</h4>
      </div>
    ) :
    (
      <div className = 'blue' onClick={() => props.handleClick(props.category, props.square['id'])}>
        <h4>{props.square['r1Money']}</h4>
      </div>
    )

  );  // return

}  // functional component Square

export default Square;

// <p>{props.square['answer']}</p>
// <h4>{props.category} {props.square['id']}</h4>

// <h4>{props.category} {props.square['id']}</h4>
