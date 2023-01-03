import React, { FC } from "react";
import { Button } from "antd";
import { ButtonProps } from "antd";
import { RuiType } from "src/types/components";
import { cssTools } from "src/utils/cssTools";
import { ButtonRuiProps } from "src/types/components/button";
//button封装

export const ButtonRui: FC<ButtonRuiProps> = (props) => {
	const ruiProps = { ...props };
	const originProps: ButtonProps = { ...ruiProps };
	const { classNameParser } = cssTools;
	originProps.className = classNameParser(RuiType.Button, originProps.className);
	return <Button {...originProps}>{props.children}</Button>;
};
