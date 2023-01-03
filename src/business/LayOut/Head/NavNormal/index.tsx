import React, { FC } from "react";
import { routeMap } from "src/router/routerMap";
import NavItem from "./NavItem";
import "./index.less";
/**
 * 导航栏
 */
const NavNormal: FC<{}> = (props) => {
	return (
		<>
			<div className={"head-nav-nomal"}>
				{routeMap.map((item, index) => {
					if (item?.name) {
						return <NavItem route={item} key={item.path + index} />;
					}
				})}
			</div>
		</>
	);
};
export default NavNormal;
