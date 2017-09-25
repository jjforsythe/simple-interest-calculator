import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: '1000',
      interestRate: '10',
      currency: 'BTC'
    };
  
  this.handleAmountInput = this.handleAmountInput.bind(this);
  this.handleInterestInput = this.handleInterestInput.bind(this);
  this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleAmountInput(amount) {
    this.setState({
      amount: amount
    });
  }

  handleInterestInput(interestRate) {
    this.setState({
      interestRate: interestRate
    });
  }

  handleCurrencyChange(currency) {
    this.setState({
      currency: currency
    });
  }

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
            <td><Amount
              amount = {this.state.amount}
              onAmountInput = {this.handleAmountInput}
             /></td>
            <td style={{width:20 + "px"}}></td>
            <td><InterestRate
              interestRate = {this.state.interestRate}
              onInterestInput = {this.handleInterestInput}
            /></td>
          </tr>
          <tr>
            <td><CurrencySelector 
              currency = {this.state.currency}
              onCurrencyChange = {this.handleCurrencyChange}
            /></td>
            <td style={{width:20 + "px"}}></td>
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
            <td><MonthlyInterest 
              amount = {this.state.amount}
              interestRate = {this.state.interestRate}
              currency = {this.state.currency}
            /></td>
            <td style={{width:20 + "px"}}></td>
            <td><AnnualInterest 
              amount = {this.state.amount}
              interestRate = {this.state.interestRate}
              currency = {this.state.currency}
            /></td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

class Amount extends Component {

  constructor(props) {
    super(props);
    this.handleAmountInput = this.handleAmountInput.bind(this);
  }

  handleAmountInput(e) {
    this.props.onAmountInput(e.target.value);
  }

  render () {
    return (
      <div>
          <h3>Amount</h3>
          <input 
          type="number" 
          placeholder="0000.00" 
          value={this.props.amount} 
          onChange={this.handleAmountInput} 
          style={{width:88 + "px"}} />
          <span> GBP</span>
      </div>
      );
  }
}

class InterestRate extends Component {

  constructor(props) {
    super(props);
    this.handleInterestInput = this.handleInterestInput.bind(this);
  }

  handleInterestInput(e) {
    this.props.onInterestInput(e.target.value);
  }

  render () {
    return (
      <div>
          <h3>Interest Rate</h3>
          <input
          type="number" 
          placeholder="0" 
          value={this.props.interestRate}
          onChange={this.handleInterestInput} 
          style={{width:34 + "px"}} 
          />
         .
         <input 
         type="number" 
         placeholder="00" 
         style={{width:34 + "px"}}
         />
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
          <p style={{width:100 + "px"}}>{(this.props.amount*this.props.interestRate/(100*12)).toFixed(2)} GBP</p>
          <p style={{width:100 + "px"}}>{(this.props.amount*this.props.interestRate/(100*12)).toFixed(2)} {this.props.currency}</p>
      </div>
      );
  }
}

class AnnualInterest extends Component {
  render () {
    return (
      <div>
          <h4>/Year</h4>
          <p value="5" style={{width:100 + "px"}}>{(this.props.amount*this.props.interestRate/100).toFixed(2)} GBP</p>
          <p style={{width:100 + "px"}}>{(this.props.amount*this.props.interestRate/100).toFixed(2)} {this.props.currency}</p>
      </div>
      );
  }
}

class CurrencySelector extends Component {

  constructor(props) {
    super(props);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleCurrencyChange(e) {
    this.props.onCurrencyChange(e.target.value);
  }

  render () {
    return (
      <div>
          <h3>Currency</h3>
          <select 
          value={this.props.currency}
          onChange={this.handleCurrencyChange}
          >
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
