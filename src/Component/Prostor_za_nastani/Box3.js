import React, { Fragment } from 'react';
import TextDiv from "./TextDiv";

const Box3 = () => {
    return (
      <Fragment>
          <div className="img-div">
                        <div className="img-1">
                            <div className="first-img-div" style={{
                                backgroundImage: "url(" + require(`../../sliki/space_kitchen_galerija/IMG_7777.jpg`) + ")",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}>

                            </div>
                            <div className="second-img-div">
                                <div style={{
                                    backgroundImage: "url(" + require(`../../sliki/space_kitchen_galerija/IMG_7385.jpg`) + ")",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}>

                                </div>
                                <div
                                    style={{
                                        backgroundImage: "url(" + require(`../../sliki/space_kitchen_galerija/IMG_7361.jpg`) + ")",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"
                                    }}>

                                </div>
                            </div>
                        </div>
                        <div className="img-2" style={{
                            backgroundImage: "url(" + require(`../../sliki/space_kitchen_galerija/IMG_7362.jpg`) + ")",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}>

                        </div>
                    </div>
                    <div className="txt-div">
                        <TextDiv
                            h1="Space Kitchen"
                            text={["Место каде сите настани запичнуваат и завршуваат. Место каде нашиот тим готви и екпериментира. Нашата кујна има само едно правило.", "Храната мора да биде вегетаријанска. Пијалок, кафе или мезе. Вие одберете вид на кетеринг ние ќе го обезбедиме."]}
                        />
                    </div>
      </Fragment>
    );
  }
  
  export default Box3;