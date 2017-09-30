import {Map} from 'immutable';

function changeCurrency(state, newCurrency, newConversionRate) {
	let nextState = state.set('currency', newCurrency);
	return nextState.set('conversionRate', newConversionRate);
}

// Create our reducer function
export default function reducer(state = new Map(), action) {

	// Update the state depending on the action sent
	switch (action.type) {
		case 'AMOUNT_UPDATE':
			return state.set('amount', action.amount);
		case 'INTEREST_UPDATE':
			return state.set('interestRate', action.interestRate);
		case 'CURRENCY_UPDATE':
			return changeCurrency(state, action.currency, action.conversionRate);
		default:
		;
	}
	return state;

}