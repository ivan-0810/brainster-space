import React, { useContext } from 'react';
import "./NavbarBtnForma.scss";
import { Context } from '../../Context/Context';

const NavbarBtnForma = () => {
    const {setNavbarBtnForma} = useContext(Context)
    return (
        <div className="navbar-btn-forma">

            <button className="nazad btn-style" onClick={() => setNavbarBtnForma(false)}><i className="fas fa-arrow-left"></i>назад</button>
                <form>
                    <div>
                        <label>Име</label>
                        <input type="text" placeholder="Вашето Име" />
                    </div>
                    <div>
                        <label>Презиме</label>
                        <input placeholder="Вашето Име" />
                    </div>
                    <div>
                        <label>Е-Маил</label>
                        <input type="email" placeholder="Вашiot е-маил" />
                    </div>
                    
                    <button type="submit" className="btn-style">испрати форма</button>
                </form>
        
        </div>
    );
}

export default NavbarBtnForma;