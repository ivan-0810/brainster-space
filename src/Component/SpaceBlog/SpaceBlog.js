import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import SpaceBlogNavbar from "./SpaceBlogNavbar";
import SpaceblogHeader from './SpaceblogHeader';
import SpaceblogList from './SpaceblogList';
import Footer from "../footer/Footer";
const SpaceBlog = (props) => {
    const data = require('../../myArr.json');
    const [mainData ] = useState(data)
    const [cardsToRender, setCardsToRender] = useState(data);

    
    const [filters, setFilters] = useState({
        КАРИ: false,
        ТЕХН: false,
        DATA: false,
        МАРК: false,
        ДИЗА: false,
        IMPA: false
    });
    const [allFilters, setAllFilters] = useState(true);

    useEffect(() => {
        let allFiltersThatAreActive = [];
          
          //simple for to iterate through objects
          for (let i in filters) {
            // console.log(i);
            // console.log(category[i]);
            if (filters[i]) {
              allFiltersThatAreActive.push(i);
            }
          }
        
          const filterKeys = Object.keys(allFiltersThatAreActive);
          
    let filteredCards = mainData.filter(
        eachCard => {
            
        return filterKeys.every(key => {
          if (!allFiltersThatAreActive.length) {
            return true;
          }
          return allFiltersThatAreActive.includes(eachCard.category.substring(0,4))
    
        });
      });
      setCardsToRender(filteredCards);
    },[filters,mainData,]);

    useEffect(() => {
        if (cardsToRender.length === mainData.length) {
          setAllFilters(true);
        }
      }, [cardsToRender.length, mainData]);

       //toggle active class on the filters buttons
  const toggleFilters = e => {
    let dataFilter = e.target.dataset.filter;
    //set the filters toggle / button active class
    setFilters(prevState => ({
        ...prevState,
        [dataFilter]: !prevState[dataFilter]
    }));

    setAllFilters(false);
  };

  const toggleAll = () => {
    setAllFilters(true);

    setFilters({
        КАРИ: false,
        ТЕХН: false,
        DATA: false,
        МАРК: false,
        ДИЗА: false,
        IMPA: false
    });     
  };

    return (
        <div>
            <Navbar />
            <SpaceBlogNavbar 
                toggleFilters={toggleFilters}
                filters={filters}
                allFilters={allFilters}
                toggleAll={toggleAll} />
            <SpaceblogHeader data={data} />
            <SpaceblogList data={cardsToRender} />
            <Footer />
        </div>
    );
}

export default SpaceBlog;