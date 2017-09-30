import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer';
import {handleAmountChange, handleInterestChange, handleCurrencyChange} from './action_creators';
import {Provider} from 'react-redux';
import './index.css';
import {AppContainer} from './App';
import registerServiceWorker from './registerServiceWorker';
import Client from "./Client";

//Create Redux store
const store = createStore(reducer);
//Initialize the state
store.dispatch(handleAmountChange('1000'));
store.dispatch(handleInterestChange('10'));
//Make API call to get intial exchange rate
Client.search("", rates => {
	store.dispatch(handleCurrencyChange('USD', rates.GBP_USD));
});

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	 document.getElementById('root'));
registerServiceWorker();
