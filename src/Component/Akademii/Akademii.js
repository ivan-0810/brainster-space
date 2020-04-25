import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import TextDiv from '../Prostor_za_nastani/TextDiv';
import "./Akademii.scss";
import Footer from '../footer/Footer';


const Akademii = () => {
  const H1 = ["Академија за графички дизајн", "Академија за дигитален маркетинг", "Академија за Front-end програмирање", "Академија за Full-stack програмирање", "Академија за Data Science", "Академија за software tes"];
  const overlay = {
    0: "rgba(167,47,168,0.5)",
    1: "rgba(212,47,47,0.5)",
    2: "rgba(68,126,40,0.5)",
    3: "rgba(68,126,40,0.5)",
    4: "rgba(82,48,103,0.5)",
    5: "rgba(69,87,61,0.5)",
  }
  return (
    <Fragment >
      <Navbar />
      <div className="akademii">
        <div className="txt-div">
          <TextDiv
            h1="Академии"
            text={["Нашите академии ќе ти помогнат да ти совладаш најбараните вештини на денешницата преку интерактивна настава и практична работа на реални проекти.", "Инструктори кои се докажани експерти во својата област. Преку нив имаш можност да ги научиш и предвидиш предизвиците на иднината на работење и да се поврзжеш со сегашните и идните врвни професионалци и компании.", "Академиите ќе ти го отворат патот кон кариера каква што посакуваш."]}
          />
        </div>
        <div className="img-div" style={{
          backgroundImage: "url(" + require(`../../sliki/za_nas/edukacija.jpg`) + ")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="akademii-cards">
          {H1.map((card, inx) => (
            <div key={inx} className="card" style={{
              backgroundImage: "url(" + require(`../../sliki/space_blog/${inx + 1}.jpg`) + ")",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}>
              <div className="overlay" style={{
                backgroundColor: `${overlay[inx]}`
              }}>
                <h1>{card}</h1>
                <div className="p-text">
                  <div><i className="fas fa-user-friends"></i>  <p>слободни места: 4</p></div>
                  <div><i className="far fa-calendar-alt"></i><p>уписи до: 26.08.2019</p></div>
                  <div><i className="far fa-clock"></i><p>стани дизајнер за 7 месеци</p></div>
                  <div><i className="far fa-handshake"></i><p>партнери за вработување: 5</p></div>
                  
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Akademii;