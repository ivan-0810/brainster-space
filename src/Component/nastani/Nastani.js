import React, { useState, useContext, useEffect } from 'react';
import moment from "moment";
import Navbar from '../Navbar/Navbar';
import "./Nastani.scss";
import Footer from '../footer/Footer';
import { Context } from '../../Context/Context';
import TextDiv from "../Prostor_za_nastani/TextDiv";



const Nastani = (props) => {

  const { scrollToNastani, setScrollToNastani } = useContext(Context);
  useEffect(() => {
    if (scrollToNastani) {
      window.scrollTo(0, 0);

    }

    return () => setScrollToNastani(false)
  });

  const [WeekDays] = useState(["Нед", "Пон", "Вто", "Сре", "Чет", "Пет", "Саб"])
  const [Months] = useState(['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']);
  const [dateContext, setDateContext] = useState(moment());
  const [currentMonth, setCurrentMonth] = useState(moment().month())
  const [currentYear, setCurrentYear] = useState(2020);

  const daysInMonth = () => {
    return dateContext.daysInMonth();
  }

  const firstDayOfMonts = () => {
    let DateContext = dateContext;
    let firstDay = moment(DateContext).startOf("month").format("d");
    return firstDay
  }
  //prazni polinja
  let blanks = [];
  for (let i = 0; i < firstDayOfMonts(); i++) {
    blanks.push(
      <td key={i + 10} className="emty-fields">
        {""}
      </td>);
  }
  //polinja so denovidenovi
  let days = []
  for (let i = 1; i <= daysInMonth(); i++) {
    days.push(
      <td key={i * 20} 
      className={(i ===4 || i === 5) && currentMonth === 3 ? "day blue" : "day" && (i === 25 || i === 26) && currentMonth === 3 ? "day red" : "day"}>
        {i === 4 && currentMonth === 3 &&
          <div className="txt-div">
            <TextDiv
              text={["Deep Dive into Data Science", "10:00 - 18:00ч", "Ден 1"]}
              h1=""
              h3=""
            />
          </div>
        }
         {i === 5 && currentMonth === 3 &&
          <div className="txt-div">
            <TextDiv
              text={["Deep Dive into Data Science", "10:00 - 18:00ч", "Ден 2"]}
              h1=""
              h3=""
            />
          </div>
        }
         {i ===25 && currentMonth === 3 &&
          <div className="txt-div">
            <TextDiv
              text={["Deep Dive into Marketing", "10:00 - 18:00ч", "Ден 1"]}
              h1=""
              h3=""
            />
          </div>
        }
         {i === 26 && currentMonth === 3 &&
          <div className="txt-div">
            <TextDiv
              text={["Deep Dive into Marketing", "10:00 - 18:00ч", "Ден 2"]}
              h1=""
              h3=""
            />
          </div>
        }
        <p className="i-el">{i}</p>
      </td>
    )


  }

  let totalSlots = [...blanks, ...days];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if ((i % 7) !== 0) {
      cells.push(row)
    }
    else {
      let insertRow = cells.slice()
      rows.push(insertRow);
      cells = [];
      cells.push(row)
    }
    if (i === totalSlots.length - 1) {
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  })

  let trElems = rows.map((d, i) => {
    if(i===rows.length-1 && d.length!== 7){
      let r= rows[i];
      for(let i=r.length; i<=6; i++){
        r.push(
          <td key={i} className="emty-fields"></td>
        )
      }
    }
    return <tr key={i * 100} className="days">
      {d}
    </tr>
  })
  //increasing one month 
  const nextMonth = () => {
    let mom = Object.assign({}, dateContext);
    mom = moment(dateContext).add(1, "month");
    setDateContext(mom)
  }

  const prevMonth = () => {
    let mom = Object.assign({}, dateContext);
    mom = moment(dateContext).subtract(1, "month");
    setDateContext(mom);
  }
  //increasing Month, year and get month days
  const increaseMonth = e => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
      nextMonth();
    } else {
      setCurrentMonth(currentMonth + 1);
      nextMonth();
    }
  }
  //decreasing Month, year and get month days
  const decreaseMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
      prevMonth()
    } else {
      setCurrentMonth(currentMonth - 1)
      prevMonth()
    }
  }

  return (
    <div className="nastani">
      <Navbar />
      <table className="calendar">
        <thead>
          <tr className="calendar-header">
            <td><h1>Календар</h1></td>
            <td className="arrows-wd-y">
              <span className="arrow" onClick={decreaseMonth}><i className="fas fa-arrow-left" ></i></span>
              <span className="wd-y">{Months[currentMonth]}</span>
              <span className="wd-y">{currentYear}</span>
              <span className="arrow" onClick={(e) => increaseMonth(e)}><i className="fas fa-arrow-right"></i></span></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {WeekDays.map(day => (
              <td key={day} className="week-day"><p>{day}</p></td>
            ))}
          </tr>
          {trElems}

        </tbody>
      </table>
      <div className="sledni-nastani">
        <h3>Следни настани</h3>
        <div className="sledni-nastani-blue">
          <TextDiv 
           text={["04/05.03.2020","Deep Dive into Data Science","10.00-18.00ч"]}
          />
        </div>
        <div className="sledni-nastani-red">
        <TextDiv 
           text={["25/26.03.2020","Deep Dive into Marketing","10.00-18.00ч"]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nastani;