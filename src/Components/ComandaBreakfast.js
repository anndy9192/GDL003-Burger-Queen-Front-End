import React, { Component } from 'react';
import '../Styles/comandaList.css';
import buttonSendToKitchen from '../imgs/button-sendtokitchen.png';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class ComandaBreakfast extends Component {
  constructor(props){
    super(props);
    this.state = {
        products : this.props.list
    }
  }
  writeMongo(data, total, table){
    let dishes = []
    data.map((item) =>
      dishes.push(item.dish)
    )
    let toMongo = {
      table: table,
      dishes: dishes,
      total: total
      
    }
    console.log(toMongo)
    /*axios
      .post('https://gdl003-burger-queen-back-end.nienorloth.now.sh/orders', toMongo)
      .then(() => console.log('Uploaded'))
      .catch(err => {
        console.error(err);
      });*/
      fetch('https://pacific-sands-67249.herokuapp.com/orders', {
            method: 'POST',
            body: JSON.stringify(toMongo),
            headers: {
              Authorization: "pM170290aM291287mR270983dP160591",
              //mode: 'no-cors',
              //'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => (data));
  }
  
  render() {
    return (
      <div className="cointenerComanda">
        <p className="numberTable">Number of table</p>
        <input className="inputNumberTable" type="text" id="table"></input>
        <div>
          <ul>
            {this.props.list.map((item, index) =>
              <li className="listText" key={item._id}>{item.dish}  ${item.price}
                <button className="buttonDelete" onClick={() => this.props.removeValuesMethod(index)}> - </button>
              </li>
            )}
          </ul>
          <p className="total">Total: ${this.props.total}</p>
        </div>
        <Link to="/kitchen">
          <img src={buttonSendToKitchen} alt="" className="buttonSendToKitchen" onClick={() => this.writeMongo(this.props.list, this.props.total,
            document.getElementById("table").value)}></img>
        </Link>
      </div>
    );
  }
}

export default ComandaBreakfast;