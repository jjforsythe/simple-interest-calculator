import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

// Tests whether the main AppContainer component renders
it('renders without crashing', () => {
	const store = createStore(reducer);
  const div = document.createElement('div');
  ReactDOM.render(
  	<Provider store={store}>
		<AppContainer />
	</Provider>, div);
});
