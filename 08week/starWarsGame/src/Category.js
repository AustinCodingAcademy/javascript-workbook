import React from 'react';
import Square from './Square';
import {Collection, CollectionItem} from 'react-materialize'

const Category = (props) => {

  return (
    /***** CODE HERE ****/
    // Just dummy data below.
    <div id='category'>
      <Collection s={1} header={props.id}>
        <CollectionItem  className='blue accent-4' id='collectionItem'><Square id="1" money="$200" /></CollectionItem>
        <CollectionItem  className='blue accent-4' id='collectionItem'><Square id="2" money="$400" /></CollectionItem>
        <CollectionItem  className='blue accent-4' id='collectionItem'><Square id="3" money="$600" /></CollectionItem>
        <CollectionItem  className='blue accent-4' id='collectionItem'><Square id="4" money="$800" /></CollectionItem>
        <CollectionItem  className='blue accent-4' id='collectionItem'><Square id="5" money="$1000" /></CollectionItem>
      </Collection>
    </div>
  ); // return

}  // functional component Category

export default Category;

// <h2>{props.id}</h2>
// <Square id="1" money="$100" />
// <Square id="2" money="$200" />
// <Square id="3" money="$300" />
// <Square id="4" money="$400" />
// <Square id="5" money="$500" />
