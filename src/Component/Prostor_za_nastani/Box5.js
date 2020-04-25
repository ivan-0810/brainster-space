import React, { Fragment } from 'react';
import TextDiv from './TextDiv';

const Box5 = () => {
    return (
     <Fragment>
        <div className="txt-div">
        <TextDiv 
         h1="Even Host"
         text={["Ања Макеска", "anja@brainster.co","+389 (0)70 233 414"]}
         />
        </div>
         <div className="img-div" style={{
                                    backgroundImage: "url(" + require(`../../sliki/devojka.jpg`) + ")",
                                    backgroundPosition: "center top",
                                    backgroundSize: "cover"
                                }}>

         </div>
     </Fragment>
    );
  }
  
  export default Box5;