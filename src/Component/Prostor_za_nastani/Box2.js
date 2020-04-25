import React, { Fragment } from 'react';
import TextDiv from "./TextDiv"

const Box2 = ({ nasloviSliki, sliki }) => {
    return (
        <Fragment>
            <div className="txt-div">
                <TextDiv
                    h1="Нашите простории"
                    text={["Комплетно адаптибилни. Една сала за 150 учесници или три помали сали за групи од по 50 учесника. Училници од 25 до 40 учесника. Избор од две локации.", "Пулт за прием. И најважното место за networking- Brainster Kitchen.", "Како го замислувате вашиот следен настан?"]} />
            </div>
            <div className="img-div" >
                {nasloviSliki.map((naslov, inx) => (
                    <div key={inx} >
                        <div className="image">
                            <img src={sliki[inx + 1]} alt={naslov} />
                        </div>
                        <p >{naslov}</p>
                    </div>


                ))}
            </div>
        </Fragment>
    );
}

export default Box2;