import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
	return (
		<div className='App'>
			<CounterThree />
			{/* <CounterTwo /> */}
			{/* <CounterOne /> */}
			{/* <UserContext.Provider value={'Malik'}>
				<ChannelContext.Provider value={'codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
			{/* <DataFetching /> */}
			{/* <IntervalHookCounter /> */}
			{/* <IntervalClassCounter /> */}
			{/* <MouseContainer /> */}
			{/* <HookMouse /> */}
			{/* <ClassMouse /> */}
			{/* <HookCounterOne /> */}
			{/* <ClassCounterOne /> */}
			{/* <HookCounterFour /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounter2 /> */}
			{/* <HookCounter /> */}
			{/* <ClassCounter /> */}
		</div>
	);
}

export default App;
