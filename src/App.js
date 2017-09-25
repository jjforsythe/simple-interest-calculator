import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Interest Rate Calculator</h2>
        </div>
        <table className="myTable">
        <tbody>
          <tr>
            <td><Amount /></td>
            <td style={{width:50 + "px"}}></td>
            <td><InterestRate /></td>
          </tr>
          <tr>
            <td><CurrencySelector /></td>
            <td style={{width:50 + "px"}}></td>
            <td></td>
          </tr>
          <tr style={{height:2 + "px"}}>
            <td>
            <div className="shorty">
            <h3>Interest</h3>
            </div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><MonthlyInterest /></td>
            <td style={{width:50 + "px"}}></td>
            <td><AnnualInterest /></td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

class Amount extends Component {
  render () {
    return (
      <div>
          <h3>Amount</h3>
          £ <input type="number" placeholder="0000.00" style={{width:100 + "px"}} />
      </div>
      );
  }
}

class InterestRate extends Component {
  render () {
    return (
      <div>
          <h3>Interest Rate</h3>
          <input type="number" placeholder="0" style={{width:34 + "px"}} />
         .
         <input type="number" placeholder="00" style={{width:34 + "px"}} />
         %
      </div>
      );
  }
}

class MonthlyInterest extends Component {
  render () {
    return (
      <div>
          <h4>/Month</h4>
          <p style={{width:100 + "px"}}>0000.00 GBP</p>
          <p style={{width:100 + "px"}}>0000.00 OTH</p>
      </div>
      );
  }
}

class AnnualInterest extends Component {
  render () {
    return (
      <div>
          <h4>/Year</h4>
          <p style={{width:100 + "px"}}>0000.00 GBP</p>
          <p style={{width:100 + "px"}}>0000.00 OTH</p>
      </div>
      );
  }
}

class CurrencySelector extends Component {
  render () {
    return (
      <div>
          <h3>Select Currency</h3>
          <select>
            <option value="AUD">AUD</option>
            <option value="BTC">BTC</option>
            <option value="CAD">CAD</option>
            <option value="CNY">CNY</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
  
      </div>
      );
  }
}

export default App;
