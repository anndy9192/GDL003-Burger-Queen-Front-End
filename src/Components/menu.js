import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgDinnerMenu from '../imgs/dinner-choose.png';
import buttonDinner from '../imgs/button-dinner.png';
import imgBreakfastMenu from '../imgs/breackfast-choose.png';
import buttonBreakfast from '../imgs/button-breakfast.png';
import '../Styles/menu.css';

class Menu extends Component {
  render() {
    return (
      <div>
      <p className="txtMenu">Choose a menu</p>
      <div className="cointenerMenu">
        <div className="goBreakfastMenu">           
        <img src={imgBreakfastMenu} alt="" className="menuBreackfastImg"></img>
          <br />
          <Link to="/">
            <img src={buttonBreakfast} alt="" className="buttonsMenu"></img>
          </Link>
        </div>
        <div className="goDinnerMenu">
          <img src={imgDinnerMenu} alt="" className="menuDinnerImg"></img>
          <br />
          <Link to="/allDayMenu">
            <img src={buttonDinner} alt="" className="buttonsMenu"></img>
          </Link>
        </div>
      </div>  
      </div>
    );
  }
}

export default Menu;
