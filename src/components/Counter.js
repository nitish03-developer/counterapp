import React from 'react';
import { Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../reducers/UiReducer';

const Counter = () => {
	const { counter } = useSelector((state) => state.ui);
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<header className='App-header'>
				<h3>Counter App</h3>
				<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button variant='contained' onClick={() => dispatch(decrement(1))}>
						-
					</Button>
					<Button
						variant='contained'
						style={{ marginLeft: 10, marginRight: 10 }}>
						{counter}
					</Button>
					<Button variant='contained' onClick={() => dispatch(increment(1))}>
						+
					</Button>
				</Box>
			</header>
		</div>
	);
};

export default Counter;
