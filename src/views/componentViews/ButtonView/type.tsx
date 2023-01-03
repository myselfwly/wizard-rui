import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { ButtonTypes } from "src/types/components/button";
import { TypeDashed } from "./componentTypes/Dashed";
import { TypeDefault } from "./componentTypes/Default";
import { TypeLink } from "./componentTypes/Link";
import { TypePrimary } from "./componentTypes/Primary";
import { TypeText } from "./componentTypes/Text";
export type ButtonTypesLists = `${ButtonTypes}`;
export type ButtonTypeMapType = {
	[key in ButtonTypesLists]: {
		name: React.ReactNode;
		type: key;
		components: React.ReactNode;
		option?: any;
	};
};
export const buttonTypeMap: ButtonTypeMapType = {
	default: {
		name: "componentViews.button.default",
		type: "default",
		components: <TypeDefault />
	},
	primary: {
		name: "componentViews.button.primary",
		type: "primary",
		components: <TypePrimary />
	},
	dashed: {
		name: "componentViews.button.dashed",
		type: "dashed",
		components: <TypeDashed />
	},
	text: {
		name: "componentViews.button.text",
		type: "text",
		components: <TypeText />
	},
	link: {
		name: "componentViews.button.link",
		type: "link",
		components: <TypeLink />
	}
};
export const useButtonTypeMapType = (typeMap: any) => {
	const { t } = useTranslation();

	const typeList = { ...typeMap };
	Object.keys(typeMap).forEach((item) => {
		typeList[item] = { ...typeMap[item], name: t(typeMap[item].name) };
	});

	return { typeList };
};
