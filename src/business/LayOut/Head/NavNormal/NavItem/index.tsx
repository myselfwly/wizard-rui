import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteType } from 'src/types';
import './index.less';
/**
 * 导航按钮
 */
interface NavItemPropsType {
	route: RouteType.Item;
}
const NavItem: React.FC<NavItemPropsType> = (props) => {
	/**
	 * 悬停状态
	 */
	const [isHover, setIsHover] = useState(false);
	/**
	 * 更改悬停状态
	 * @param hover 是否悬停
	 */
	const handleHover = (hover: boolean) => {
		setIsHover(hover);
	};
	/**
	 * 生成二级导航按钮
	 * @param route 路由信息
	 * @returns 导航按钮
	 */
	const createChildrenDom = (route: RouteType.Item) => {
		if (route?.children && route.children.length !== 0) {
			return route.children.map((item, index) => {
				//todo
				if (item?.name) {
					return (
						<NavLink
							to={`${route.path}/${item.path}`}
							className={({ isActive }) => (isActive ? 'nav-item-nav active' : 'nav-item-nav')}
							key={'level2' + item.path}>
							{item.name}
						</NavLink>
					);
				}
			});
		} else {
			return [];
		}
	};
	return (
		<div
			className='nav-item nav-level1'
			onMouseOver={() => {
				handleHover(true);
			}}
			onMouseLeave={() => {
				handleHover(false);
			}}>
			<NavLink
				to={props.route.path}
				className={({ isActive }) => (isActive ? 'nav-item-nav active' : 'nav-item-nav')}>
				{props.route.name}
			</NavLink>

			{isHover && (
				<div className='nav-item nav-level2'>
					{props.route?.children && createChildrenDom(props.route)}
				</div>
			)}
		</div>
	);
};
export default NavItem;
