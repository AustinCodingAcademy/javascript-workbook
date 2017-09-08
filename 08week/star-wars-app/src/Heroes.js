import React from 'react';
import './Heroes.css'


const Heroes = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.type === 'light' ? 'white' : 'white',
      }}
    >
      {props.heroes.length > 0 && props.heroes
        .map((character, index) => {
          return (
            <li
              className={'App-li'}
              key={index}
            >
            {character.name}
            </li>
          )
        })
      }
    </div>
  );
}
 export default Heroes;
