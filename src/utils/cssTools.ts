import { RuiType } from "src/types/components";

interface CssToolsType {
	classNameParser: (type: RuiType, propsClassName?: string) => string;
}
/**
 *
 * 生成UI固定的className
 * @param type UI的类型 {@link RuiType}
 * @param propsClassName UI传入的className
 * @returns 处理后的className
 */
const classNameParser: CssToolsType["classNameParser"] = (type, propsClassName) => {
	const ruiCommon: string = "rui-" + type;
	if (!propsClassName) {
		return ruiCommon;
	}
	return ruiCommon + " " + propsClassName;
};
export const cssTools: CssToolsType = {
	classNameParser
};
