import { useState } from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<div>{count}</div>
			<button className={cls.button} onClick={handleClick}>
				Increment
			</button>
		</>
	);
};
