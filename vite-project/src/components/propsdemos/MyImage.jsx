import React from 'react'

function MyImage(props) {
  return (
    <div>
        <img src={props.url} 
        height='300' width='300'/>


    </div>
  );
}

export default MyImage