import React, { useState, createContext } from "react";


export const Context = createContext({});

export const Provider = (props) => {
    const [ partnerstvaForma, setPartnerstvaForma] = useState(false);
    const [ navbarBtnForma, setNavbarBtnForma]= useState(false);
    const [inovaciiForma, setInovaciiForma] =useState(false);
    const [isCoworking,setIsCoworking] = useState(false);
    const [scrollToNastani, setScrollToNastani] = useState(false);
const generalData = {
    partnerstvaForma,
    setPartnerstvaForma,
    navbarBtnForma,
    setNavbarBtnForma,
    inovaciiForma,
    setInovaciiForma,
    isCoworking,
    setIsCoworking,
    scrollToNastani,
    setScrollToNastani
}
    return (
        <Context.Provider value={generalData}>
            {props.children}
        </Context.Provider>
    )
}