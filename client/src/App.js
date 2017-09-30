import React from 'react';
import {connect} from 'react-redux';
import logo from './logo_outline.png';
import './App.css';
import Client from "./Client";
import * as actionCreators from './action_creators';

//App component is the parent of other components
const App = (props) => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simple Interest Calculator</h2>
        </div>
        <table className="myTable">
        <tbody>
          <tr>
            <td><Amount
              amount = {props.amount}
              handleAmountChange = {props.handleAmountChange}
             /></td>
            <td style={{width:20 + "px"}}></td>
            <td><InterestRate
              interestRate = {props.interestRate}
              handleInterestChange = {props.handleInterestChange}
            /></td>
          </tr>
        </tbody>
      </table>
      <table className="myTable">
        <tbody>
          <tr>
            <td style={{width:290 + "px"}}><CurrencySelector 
              currency = {props.currency}
              handleCurrencyChange = {props.handleCurrencyChange}
            /></td>
          </tr>
        </tbody>
      </table>
       <table className="myTable">
        <tbody>
          <tr style={{height:2 + "px"}}>
            <td>
            <div className="shorty">
            <h3>Interest</h3>
            </div>
            </td>
            <td style={{width:20 + "px"}}></td>
            <td></td>
          </tr>
          <tr>
            <td><MonthlyInterest 
              amount = {props.amount}
              interestRate = {props.interestRate}
              currency = {props.currency}
              conversionRate = {props.conversionRate}
            /></td>
            <td style={{width:20 + "px"}}></td>
            <td><AnnualInterest 
              amount = {props.amount}
              interestRate = {props.interestRate}
              currency = {props.currency}
              conversionRate = {props.conversionRate}
            /></td>
          </tr>
        </tbody>
      </table>
      </div>
    );
}

//Functional component showing the amount input field
const Amount = (props) => {
    return(
      <div>
          <h3>Amount</h3>
          <input 
          type="number" 
          placeholder="0000.00" 
          value={props.amount}
          onChange={(e) => props.handleAmountChange(e.target.value)}
          style={{width:88 + "px"}} />
          <span> GBP</span>
      </div>
      );
}

//Functional component showing the interest rate input field
const InterestRate = (props) => {
    return (
      <div>
          <h3>Interest Rate</h3>
          <input
          type="number" 
          placeholder="0" 
          value={props.interestRate}
          onChange={(e) => props.handleInterestChange(e.target.value)} 
          style={{width:88 + "px"}} 
          />
          <span> %</span>
      </div>
      );
}

//Functional component displaying the monthly interest
const MonthlyInterest = (props) => {

    //calculate monthly interest
    const getMonthlyInterest = () => {
      return (props.amount*props.interestRate/(100*12)).toFixed(2);
    }

    const getConvertedMonthlyInterest = () => {
      return (props.amount*props.interestRate*props.conversionRate/(100*12)).toFixed(2);
    }

    return (
      <div>
          <h4>/Month</h4>
          <p style={{width:100 + "px"}}>{getMonthlyInterest()} GBP</p>
          <p style={{width:100 + "px"}}>{getConvertedMonthlyInterest()} {props.currency}</p>
      </div>
      );
}

//Functional component displaying the annual interest
const AnnualInterest = (props) => {

    //calculate monthly interest
    const getAnnualInterest = () => {
      return (props.amount*props.interestRate/(100)).toFixed(2);
    }

    const getConvertedAnnualInterest = () => {
      return (props.amount*props.interestRate*props.conversionRate/(100)).toFixed(2);
    }
    
    return (
      <div>
          <h4>/Year</h4>
          <p value="5" style={{width:100 + "px"}}>{getAnnualInterest()} GBP</p>
          <p style={{width:100 + "px"}}>{getConvertedAnnualInterest()} {props.currency}</p>
      </div>
      );
}

//Functional component showing a drop-down of selectable currencies
const CurrencySelector = (props) => {
    return (
      <div>
          <h3>Convert to Currency</h3>
          {'GBP -> '}
          <select 
          value={props.currency}
          onChange={(e) => 
            {
              var newCurrency = e.target.value;
              Client.search("", rates => {

                switch(newCurrency) {
                  case "AUD":
                      props.handleCurrencyChange(newCurrency, rates.GBP_AUD);
                      break;
                  case "BTC":
                      props.handleCurrencyChange(newCurrency, rates.GBP_BTC);
                      break;
                  case "CAD":
                      props.handleCurrencyChange(newCurrency, rates.GBP_CAD);
                      break;
                  case "CNY":
                      props.handleCurrencyChange(newCurrency, rates.GBP_CNY);
                      break;
                  case "EUR":
                      props.handleCurrencyChange(newCurrency, rates.GBP_EUR);
                      break;
                  case "USD":
                      props.handleCurrencyChange(newCurrency, rates.GBP_USD);
                      break;
                  default:
                      props.handleCurrencyChange(newCurrency, rates.GBP_USD);
              }

            });
            }
          }
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

//Puts variables from the redux store into App's props
function mapStateToProps(state) {
  return {
    amount: state.get('amount'),
    interestRate: state.get('interestRate'),
    currency: state.get('currency'),
    conversionRate: state.get('conversionRate')
  }
}

//Export the 'smart' component AppContainer
export const AppContainer = connect(
  mapStateToProps,
  actionCreators
  )(App);