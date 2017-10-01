import {Map} from 'immutable';

function changeCurrency(state, newCurrency, newConversionRate) {
	let nextState = state.set('currency', newCurrency);
	return nextState.set('conversionRate', newConversionRate);
}

// Create our reducer function
export default function reducer(state = new Map(), action) {

	// Update the state depending on the action sent
	switch (action.type) {
		// Action called when the amount changes
		case 'AMOUNT_UPDATE':
			return state.set('amount', action.amount);
		// Action called when the interest rate changes
		case 'INTEREST_UPDATE':
			return state.set('interestRate', action.interestRate);
		// Intereste rate called when the currency changes
		case 'CURRENCY_UPDATE':
			return changeCurrency(state, action.currency, action.conversionRate);
		default:
		;
	}
	return state;

}