import React, { FC } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd';
import { RuiCommon } from 'src/types/utils';
import { ruiCommonKeys } from '../exports';

type ButtonRuiExtend = {} & RuiCommon;

export declare type ButtonRuiProps = ButtonProps & ButtonRuiExtend;
export const ButtonRui: FC<ButtonRuiProps> = (props) => {
	const ruiProps = {};
	const originProps = {};
	for (const key in props) {
		if (ruiCommonKeys.find((item) => item === key)) {
		}
	}
	return <Button {...originProps}>{props.children}</Button>;
};
