import React, { Fragment } from 'react';
import TextDiv from "../Prostor_za_nastani/TextDiv";


const Box1 = ({scrolni}) => {
    return (
      <Fragment>
        <div className="txt-div">
                        <TextDiv
                            h1="Простор за настани"
                            text={["Нашиот простор се прилагодува според потребите на вашиот настан. Седум различни простории и Space Kitchen.", "Наменски создадени да се прилагодуваат и менуваат во согласност со типот на настан кој го организирате.", "Организиеаме конференции до 150 учесници и обуки и предавања за групи од 20 учесници. Контактирај не за да ви хостираме одличен настан."]} />
                        <button onClick={scrolni}><i className="fas fa-plus"></i> букирај не</button>
                    </div>
                    <div className="img-div" >
                        <img src={require(`../../sliki/za_nas/prostor za nastani.jpg`)} alt="" />
                    </div>

      </Fragment>
    );
  }
  
  export default Box1;