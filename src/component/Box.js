import React from 'react';

const Box = (props) => {

  const boxClass = `box ${props.result ? props.result.toLowerCase() : ''}`;
  return (

      <div className={boxClass}>
          <h2>{props.title}</h2><br/>
          <img className="item-img" src={props.item && props.item.img} alt={props.item && props.item.img}/><br/>
          <h2>{props.result}</h2><br/>
      </div>
  );
}

export default Box;
