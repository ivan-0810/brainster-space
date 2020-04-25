import React, { useState } from 'react';
import edukacija1 from "../../sliki/za_nas/edukacija1.jpg";
import edukacija2 from "../../sliki/za_nas/edukacija2.jpg";
import "./HomePage.scss";
import TextDiv from '../Prostor_za_nastani/TextDiv';

const Edukacija = () => {
    const [isAkademii, setIsAkademii] = useState(true)
    const [isZakompanii, setIsZakompanii] = useState(false);

    const changeAkademii = () => {
        setIsAkademii(true)
        setIsZakompanii(false)
    }
    const changeZakompanii = () => {
        setIsAkademii(false);
        setIsZakompanii(true);
    }
    return (
        <div className="edukacija">
            <div className="txt-div">
                {isAkademii &&
                    <TextDiv
                        h1="Едукација"
                        text={["Дали си подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science."]}
                    />
                }
                {isZakompanii &&
                    <TextDiv
                        h1="Едукација"
                        text={["Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансто на својата компанија.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, sit repellat explicabo sint architecto autem.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro, sit repellat explicabo sint architecto autem."]}
                    />
                }

                <div className="btn-div">
                    <button className={isAkademii?"btn-1" : "btn-1 btn1-active"} onClick={changeAkademii}>академии</button>
                    <button className={isZakompanii? "btn2-active" : "btn-2"} onClick={changeZakompanii}>за компании</button>
                </div>
            </div>
            <div className="img-div">
                {isAkademii && <img src={edukacija1} alt="" />}
                {isZakompanii && <img src={edukacija2} alt="" />}
            </div>

        </div>
    );
}

export default Edukacija;
