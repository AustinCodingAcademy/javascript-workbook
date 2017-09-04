import React from 'react';
import Square from './Square';
import {Collection, CollectionItem} from 'react-materialize'

const Category = (props) => {

  return (
    <div id='category'>
      <Collection
        s={1}
        header={props.id.split(' ')
                         .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
                         .join(' ')}
      >
        {
          props.squares.map((obj, idx) =>
            <CollectionItem
              key={idx}
              className='blue accent-4'
              id='collectionItem'
              onClick={() => props.handleClick(props.id, idx)}
            >
              <Square
                category={props.id}
                square={obj}
                key={idx}
                handleClick={props.handleClick}
              />
            </CollectionItem>
          )
        }
      </Collection>
    </div>
  ); // return

}  // functional component Category

export default Category;
