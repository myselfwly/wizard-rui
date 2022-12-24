import React from 'react';
import { Outlet } from 'react-router-dom';
import Head from './Head';
import './index.less';
/**
 * 页面结构
 */
const LayOut: React.FC<{}> = (props) => {
	return (
		<div className={'layout'}>
			<Head />
			<Outlet />
		</div>
	);
};
export default LayOut;
