import React from "react";
import App from "src/App";
import { RouteType } from "src/types";
import { ButtonView } from "src/views/componentViews/ButtonView";
import { InputView } from "src/views/componentViews/InputView";
import { Home } from "src/views/Home";

const routeMap: RouteType.Map = [
	{ path: "", redirect: "Home" },
	{ path: "Home", element: <Home />, name: "Home" },
	{
		path: "Components",
		element: <App />,
		name: "Components",
		children: [
			{
				path: "",
				redirect: "Button"
			},
			{ path: "Button", element: <ButtonView />, name: "Button" },
			{ path: "Input", element: <InputView />, name: "Input" }
		]
	}
];

export { routeMap };
