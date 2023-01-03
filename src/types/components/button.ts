import { ButtonProps } from "antd";
import { RuiCommon } from "../utils";

type ButtonRuiExtend = {} & RuiCommon;
export declare type ButtonRuiProps = ButtonProps & ButtonRuiExtend;
export enum ButtonTypes {
	DEFAULT = "default",
	PRIMARY = "primary",
	DASHED = "dashed",
	TEXT = "text",
	LINK = "link"
}
