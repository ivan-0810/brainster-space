import React, { useContext } from 'react';
import edukacija from "../../sliki/za_nas/edukacija.jpg";
import edukacija1 from "../../sliki/za_nas/edukacija1.jpg";
import edukacija2 from "../../sliki/za_nas/edukacija2.jpg";
import nastani from "../../sliki/za_nas/nastani.jpg";
import coworking from "../../sliki/za_nas/coworking.jpg";
import prostor_za_nastani from "../../sliki/za_nas/prostor za nastani.jpg";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import TextDiv from '../Prostor_za_nastani/TextDiv';
import { Context } from '../../Context/Context';


const HomepageZaNas = () => {
  const {setInovaciiForma,setPartnerstvaForma, setScrollToNastani}= useContext(Context)
  const scrollToCoworking = () => {
    return window.scrollTo(0, 3200)
  }
  return (
    <div className="box-1">
        <h1>За Нас</h1>
        <a href="https://brainster.co/" className="homepage-zanas-card">
          <div className="img-div">
            <img src={edukacija} alt="edukacija"/>
          </div>
          <div className="txt-div">
            <TextDiv
              h3="Едукација"
              text={["Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skil set кој ќе одговори на реалните потреби на на пазарот на труд. Организираме курсеви, академии и персонализирани обуки кои одговараат на реалните потреби на денешницата."]}
            />
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </a>


        <Link to="/nastani" className="homepage-zanas-card" onClick={()=>setScrollToNastani(true)}>
          <div className="img-div">
            <img src={nastani} alt="nastani"/>
          </div>
          <div className="txt-div">
            <TextDiv 
              h3="Настани"
              text={["Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инсталира и креира преку овие настани."]}
            />
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </Link>


        <div className="homepage-zanas-card" onClick={scrollToCoworking}>
          <div className="img-div">
            <img src={coworking} alt="coworking"/>
          </div>
          <div className="txt-div">
            <TextDiv 
            h3="Coworking"
            text ={["Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared Office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии."]}
            />
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </div>

        <Link to="/nastani" className="homepage-zanas-card" onClick={()=>setScrollToNastani(true)}>
          <div className="img-div">
            <img src={prostor_za_nastani} alt="prostor_za_nastani"/>
          </div>
         
          <div className="txt-div">
          <TextDiv 
          h3="Простор за Настани"
          text={["Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и крира сите настани."]}
          />
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </Link>

        <div className="homepage-zanas-card" onClick={() => setPartnerstvaForma(true)}>
          <div className="img-div">
            <img src={edukacija1} alt="edukacija"/>
          </div>
          <div className="txt-div">
            <TextDiv 
            h3= "Парнерства со Tech компании"
            text ={["Целта и идејата е креирање на tech заедница која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректно поврзивање на  tech талентите со компаниите."]}
            />
        
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </div>

        <div className="homepage-zanas-card" onClick={()=>setInovaciiForma(true)}>
          <div className="img-div">
            <img src={edukacija2} alt="edukacija"/>
          </div>
          <div className="txt-div">
            <TextDiv 
            h3="Иновации за копмании"
            text= {["Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација."]}
            />
          </div>
          <div className="arrow"><span><i className="fas fa-arrow-right"></i></span></div>
        </div>
        
    </div>
  );
}

export default HomepageZaNas;