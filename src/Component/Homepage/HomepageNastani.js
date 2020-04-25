import React, { useContext } from 'react';
import Nastani from "../../sliki/nastani/Hristijan-Nosecka-1024x536.jpg";
import Nastani1 from "../../sliki/nastani/IMG_7481.jpg";
import Nastani2 from "../../sliki/nastani/instruktori.jpg";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import TextDiv from '../Prostor_za_nastani/TextDiv';
import { Context } from '../../Context/Context';


const HomepageNastani = () => {
  const {setScrollToNastani} = useContext(Context);
    return (
      <div className="box-1">
      <h1>Настани</h1>
        <a href="https://brainster.co/" className="homepage-zanas-card first-child">
          <div className="img-div" style={{
            backgroundImage:`url(${Nastani})`,
            backgroundPosition:"center left",
            backgroundSize:"cover"
          }}>
          </div>
          <div className="txt-div">
            <TextDiv
            h3="Codeworks"
            text ={[`Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата. Настан кој ги побрзува mid програмерите со IT  компаниите.  ${<br />}Deep Dive Intensive Seminar ${<br />} Ексклузивни семинари кои комбинираат три различни техники на учење.`]}
            />
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </a>
        <a href="https://brainster.co/" className="homepage-zanas-card">
          <div className="img-div" style={{
            backgroundImage:`url(${Nastani1})`,
            backgroundPosition:"center",
            backgroundSize:"cover"
          }}>
           
          </div>
          <div className="txt-div">
            <TextDiv 
            h3="Deep Dive into Marketing"
            text ={["Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа во маркетингот."]}
            />
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </a>
        <a href="https://brainster.co/" className="homepage-zanas-card">
          <div className="img-div" style={{
            backgroundImage:`url(${Nastani2})`,
            backgroundPosition:"center",
            backgroundSize:"cover"
          }}> 
          </div>
          <div className="txt-div">
          <TextDiv 
            h3="Deep Dive into Science"
            text ={["Deep Div into Science се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа во Data Science"]}
            />
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </a>
        <div className="div-kalendarKopce">
        <Link to="/nastani" className ="kalendarKopce" onClick={()=>setScrollToNastani(true)}><i className="far fa-calendar-alt"></i> календари на настани</Link>
        </div>
      </div>
    );
  }
  
  export default HomepageNastani;