import React, { FC, useEffect, useState } from "react";
// import { buttonTypeMap } from './type';
import { useTranslation, Trans } from "react-i18next";
import { ButtonTypes } from "src/types/components/button";
import { useButtonTypeMapType, buttonTypeMap, ButtonTypeMapType, ButtonTypesLists } from "./type";
export const ButtonView: FC<any> = (props) => {
	const [activeNav, setActiveNav] = useState<ButtonTypes>(ButtonTypes.DEFAULT);
	const { typeList } = useButtonTypeMapType(buttonTypeMap);
	const { t } = useTranslation();
	const title = t("componentViews.button.button");
	return (
		<>
			<div className="component_button">{title}</div>
			{Object.keys(typeList).map((item) => {
				const itemC = item as ButtonTypesLists;
				return <div key={typeList[itemC].type}>{typeList[itemC].name}</div>;
			})}
		</>
	);
};
