import React, { Fragment } from 'react';

import "./Prostor_za_nastani.scss";


const Box4 = () => {
    return (
        <Fragment>
            <h1>Нудиме</h1>
            <div className="span-div">
                <div className="planet">
                    <i className="fas fa-mitten"></i>
                    <span> Простор</span>
                </div>
                <div className="planet">
                    <i className="fas fa-mitten"></i>
                    <span>Space Kitchen</span>
                </div>
                <div className="planet">
                    <i className="fas fa-globe"></i>
                    <span>Логистика</span>
                </div>
                <div className="planet">
                    <i className="fas fa-wrench"></i>
                    <span>Техничка Подршка</span>
                </div>
                <div className="planet">
                    <i className="fas fa-volume-up"></i>
                    <span>Звук</span>
                </div>
                <div className="planet">
                    <i className="fas fa-lightbulb"></i>
                    <span>Светло</span>
                </div>
                <div className="planet">
                    <i className="fas fa-sitemap"></i>
                    <span>Помош при организација</span>
                </div>
                <div className="planet">
                    <i className="fas fa-camera-retro"></i>
                    <span>Видео и Фотографија</span>
                </div>
                <div className="planet">
                    <i className="fab fa-facebook"></i>
                    <span>Помош при социјални мрежи</span>
                </div>
            </div>

        </Fragment>
    );
}

export default Box4;