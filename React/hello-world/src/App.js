import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './ParentComponent';
import UserGreeting from './UserGreeting';
import ListRendering from './ListRendering';
import Stylesheet from './Stylesheet';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRenderProps from './components/CounterRenderProps';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
	return (
		<div className='App'>
			<UserProvider value='Malik Context'>
				<ComponentC />
			</UserProvider>
			{/* <CounterRenderProps>
				{(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			</CounterRenderProps>
			<CounterRenderProps>
				{(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			</CounterRenderProps> */}
			{/* <CounterRenderProps
				render={(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			<CounterRenderProps
				render={(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/> */}
			{/* <HoverCounterTwo />
			<ClickCounterTwo />
			<User name={(isLoggedIn) => (isLoggedIn ? 'Malik' : 'Guest')} />
			<User render={(isLoggedIn) => (isLoggedIn ? 'Malik' : 'Guest')} /> */}
			{/* <HoverCounter name='Malik' /> */}
			{/* <ClickCounter /> */}
			{/* <ErrorBoundary>
				<Hero heroName='Batman' />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName='Superman' />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName='Joker' />
			</ErrorBoundary> */}
			{/* <PortalDemo /> */}
			{/* <FRParentInput /> */}
			{/* <FocusInput /> */}
			{/* <RefsDemo /> */}
			{/* <ParentComp /> */}
			{/* <PureComp /> */}
			{/* <FragmentDemo /> */}
			{/* <Table /> */}
			{/* <LifecycleA /> */}
			{/* <Form /> */}
			{/* <Stylesheet primary={true} /> */}
			{/* <Inline /> */}
			{/* <h1 className='error'>Error</h1> */}
			{/* <h1 className={styles.success}>Success</h1> */}
			{/* <ListRendering /> */}
			{/* <UserGreeting /> */}
			{/* <ParentComponent /> */}
			{/* <FunctionClick /> */}
			{/* <ClassClick /> */}
			{/* <EventBind /> */}
			{/* <Counter /> */}
			{/* <Message /> */}

			{/* <Greet name='Bruce' heroName='Batman'>
				<p>This is children props</p>
			</Greet>
			<Greet name='Clark' heroName='Superman'>
				<button>Action</button>
			</Greet> */}
			{/* <Greet name='Diana' heroName='Wonder Woman' /> */}

			{/* <Welcome name='Bruce' heroName='Batman' /> */}
			{/* <Welcome name='Clark' heroName='Superman' />
			<Welcome name='Diana' heroName='Wonder Woman' /> */}
		</div>
	);
}

export default App;
