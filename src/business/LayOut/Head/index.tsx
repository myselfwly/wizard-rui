import React, { useEffect, useState } from "react";
import Logo from "./Logo/index";
import NavNormal from "./NavNormal";
import UserInfo from "./UserInfo";
import "./index.less";
import { ButtonRui } from "src/components/ButtonRui";
import { useTranslation } from "react-i18next";
/**
 * 头部结构
 */
const Head: React.FC<{}> = (props) => {
	const { i18n } = useTranslation();
	const [lang, setLang] = useState<
		{ value: "en"; name: "中文" } | { value: "zh"; name: "English" }
	>({
		value: "en",
		name: "中文"
	});
	const changeLang = () => {
		if (lang.value === "en") {
			setLang({ value: "zh", name: "English" });
		} else {
			setLang({ value: "en", name: "中文" });
		}
	};
	useEffect(() => {
		i18n.changeLanguage(lang.value);
	}, [lang]);
	return (
		<>
			<div className="layout-head">
				<div className="head-normal">
					<Logo />
					<div className="white-space" style={{ width: 20, flex: "0 0 auto" }}></div>
					<NavNormal />
					<div className="white-space"></div>
					<ButtonRui type="text" onClick={changeLang}>
						{lang.name}
					</ButtonRui>
					<UserInfo></UserInfo>
				</div>
			</div>
		</>
	);
};

export default Head;
