import React, { FC } from "react";
import { useTranslation } from "react-i18next";
export const TypeLink: FC<any> = (props) => {
	const { t } = useTranslation();
	return <>{t("componentViews.button.link")}</>;
};
