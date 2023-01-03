import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { routeMap } from "./routerMap";
import LayOut from "../business/LayOut";
import { RouteType } from "src/types";
/**
 *
 * @param routes 元路由
 * @returns	返回路由表
 */
const renderRoutes = (routes: RouteType.Map) => {
	return routes.map((route: RouteType.Item, index: number) => {
		const { path, element, children, redirect } = route;
		return (
			<Route
				path={path}
				element={redirect ? <Navigate to={redirect} replace /> : element}
				key={path + index}
			>
				{children && children?.length !== 0 ? renderRoutes(children) : null}
			</Route>
		);
	});
};
const RouteDom = renderRoutes(routeMap);
/**
 * 跟路由
 * @returns 跟路由
 */
const RootRoute = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="" element={<Navigate to={"layout"} replace />}></Route>
				<Route path={"layout"} element={<LayOut />}>
					{RouteDom}
				</Route>
				{RouteDom}
			</Routes>
		</HashRouter>
	);
};
export default RootRoute;
