import React, { Fragment } from 'react';

const TextDiv = ({text,h1,h3}) => {
  
    return (
        <Fragment >
            <h3>{h3}</h3>  
            <h1>{h1}</h1>
            {text.map((txt,inx) => (
                <p key={inx}>{txt}</p>
            ))}
           
        </Fragment>
    );
}

export default TextDiv;