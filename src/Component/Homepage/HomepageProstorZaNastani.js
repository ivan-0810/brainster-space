import React, { Fragment, useContext } from 'react';
import ProstorZaNastani from "../../sliki/za_nas/prostor za nastani.jpg";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import TextDiv from '../Prostor_za_nastani/TextDiv';
import { Context } from '../../Context/Context';

const HomepageProstorZaNastani = () => {
  const {setScrollToNastani}= useContext(Context);
    return (
      <Fragment>
           <div className="edukacija ">
      <div className="txt-div">
          <TextDiv 
          h1="Простор за настани"
          text={["Можност за презентација, обуки, конференции, networking, настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира во нашиот Brainster Space."]}
          />
              <div className="btn-div">
                  <Link to="/prostor_za_nastani" className="btn-1 prostor-zanastani"
                  onClick={() => setScrollToNastani(true)}
                  ><i className="fas fa-arrow-right"></i>види го просторот</Link>
    
              </div>
      </div>
      <div className="img-div">
        <img src={ProstorZaNastani} alt="" />
       
      </div>

  </div>
      <div className="partneri">
        <TextDiv 
        h1="Партнери"
        text ={["Имаш идеја? Отворени сме за соработка"]}
        />
          <Link to="/prostor_za_nastani" onClick={() => setScrollToNastani(true)} className="btn-2 prostor-zanastani"><i className="fas fa-arrow-right"></i>види го просторот</Link>
      </div>
      </Fragment>
    );
  }
  
  export default HomepageProstorZaNastani;