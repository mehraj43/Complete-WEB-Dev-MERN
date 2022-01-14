import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
			break;
		case 'decrement':
			return state - 1;
			break;
		case 'reset':
			return initialState;
			break;
		default:
			return state;
			break;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div className='App'>
				Count : {count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</div>
		</CountContext.Provider>
	);
}

export default App;
