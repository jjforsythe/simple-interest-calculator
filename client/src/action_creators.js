//Action creators - pure functions returning action objects
export function handleAmountChange(x) {
	return {
		type: 'AMOUNT_UPDATE',
		amount: x
	};
}

export function handleInterestChange(x) {
	return {
		type: 'INTEREST_UPDATE',
		interestRate: x
	};
}

export function handleCurrencyChange(x, y) {
	return {
		type: 'CURRENCY_UPDATE',
		currency: x,
		conversionRate: y
	};
}