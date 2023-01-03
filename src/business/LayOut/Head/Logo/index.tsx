import React from "react";
import logo from "../../../../assets/image/logo.png";
import "./index.less";
/**
 * logo区域
 */
const Logo: React.FC<{}> = (props) => {
	return (
		<>
			<div className="head-logo">
				<img src={logo} />
				<span className="logo-text">RUI</span>
			</div>
		</>
	);
};

export default Logo;
