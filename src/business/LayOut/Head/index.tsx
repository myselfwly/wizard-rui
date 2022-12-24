import React from 'react';
import Logo from './Logo/index';
import NavNormal from './NavNormal';
import UserInfo from './UserInfo';
import './index.less';
/**
 * 头部结构
 */
const Head: React.FC<{}> = (props) => {
	return (
		<>
			<div className={'layout-head'}>
				<div className='head-normal'>
					<Logo />
					<div className='white-space' style={{ width: 20, flex: '0 0 auto' }}></div>
					<NavNormal />
					<div className='white-space'></div>
					<UserInfo></UserInfo>
				</div>
			</div>
		</>
	);
};

export default Head;
