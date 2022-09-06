import {useDispatch, useSelector} from 'react-redux'
import {counterActions} from '../store/index'
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch()
	const {counter, visible} = useSelector(state => state.counter)
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	}

	const incrementByHandler = () => {
		dispatch(counterActions.increase(5));
	}
	
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{visible && <div className={classes.value}>-- {counter} --</div>}
			<div className={classes['button-wrapper']}>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={incrementByHandler}>Increment By 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
