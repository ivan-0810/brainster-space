import React, { useState } from 'react';
import Logo from "../../sliki/brainster_space_logo.svg";
import "./Footer.scss";

const Footer = () => {
    const [showContact, setShowContact] = useState(false);
    const scrollTop = () => {
        window.scrollTo(0,0)
    }
    return (
        <div className="footer">
            <div className="korisni-linkovi">
                <h4>корисни линкови</h4>
                <button onClick={() => setShowContact(true)}>контакт</button>
                {showContact && <div className="popupKontakt">
                <span><i className="fas fa-times" onClick={() => setShowContact(false)}></i></span>
                    <p>Емаил: anja@brainster.co</p>
                    <p>телефон: 070 233 414</p>

                </div>}
                <a href="https://www.wearelaika.com/">отворени позиции</a>
                <a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152">галерија</a>
            </div>
            <div className="socijalni-mrezi">
                <h4>социјални мрежи</h4>
                <div> <span><i className="fab fa-facebook facebook"></i></span>
                    <span><i className="fab fa-linkedin-in linkedin"></i></span>
                    <span><i className="fab fa-instagram instagram"></i></span>
                </div>
            </div>
            <div className="logo" onClick={scrollTop}>
                <img src={Logo} alt="" />
            </div>

        </div>
    );
}

export default Footer;