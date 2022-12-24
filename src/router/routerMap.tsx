import React from 'react';
import App from 'src/App';
import { RouteType } from 'src/types';
import { Home } from 'src/views/Home';

const routeMap: RouteType.Map = [
	{ path: '', redirect: 'Home' },
	{ path: 'Home', element: <Home />, name: 'Home' },
	{
		path: 'Components',
		element: <App />,
		name: 'Components',
		children: [
			{
				path: '',
				redirect: 'Home'
			},
			{ path: 'Home', element: <Home />, name: 'Home' }
		]
	}
];

export { routeMap };
