import React from 'react';

function Header(props) {
  return <h2>welcome to {props.firstName} <SubHeader lastName={props.lastName} />'s website</h2>
}

export default Header;
