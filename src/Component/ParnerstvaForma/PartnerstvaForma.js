import React, { useContext } from 'react';
import "./PartnerstvaForma.scss"
import { Context } from '../../Context/Context';

const PartnerstvaForma = () => {
     
    const {setPartnerstvaForma} = useContext(Context)

    return (
        <div className="partnerstvaForma">
            <div className="overlay">
                
                <form action="@">
                    <div className="forma-naslov">
                        <h2>Приклучи се</h2><span><i className="fas fa-times" onClick={() => setPartnerstvaForma(false)}></i></span>
                    </div>
                    <div className="label-input">
                        <label htmlFor="">Име и Презиме(задолжително)</label>
                        <input type="text" placeholder="Внесете Име и Презиме" />
                    </div>
                    <div className="label-input">
                        <label htmlFor="">Име и Компанија(незадолжително)</label>
                        <input type="text" placeholder="Внесете име на Вашата Компанија" />
                    </div>
                    <div className="label-input">
                        <label htmlFor="">Телефонски Број(задолжително)</label>
                        <input type="number" placeholder="Внесете Телефонски Број" />
                    </div>
                    <div>
                        <label htmlFor="">Предлог за Соработка(незадолжително)<span>300</span></label>
                        
                        <textarea name="" id="" cols="30" rows="5" placeholder="Во 300 карактери,  опишете зошто сакате да соработуваме"></textarea>
                    </div>
            
                        <div className="btn-forma-div">
                        <button className="isprati" onClick={() => setPartnerstvaForma(false)}>исклучи</button>
                        <button type="submit" className="priklucise"><i className="fas fa-arrow-right"></i>испрати форма</button>
                        </div>
                  
                </form>
            </div>
        </div>
    );
}

export default PartnerstvaForma;