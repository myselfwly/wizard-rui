import React from 'react';
import { Outlet } from 'react-router-dom';

export default () => {
	const data = [1, 23, 45, 6, 6];
	return (
		<div className='div-container'>
			<Outlet />
		</div>
	);
};
