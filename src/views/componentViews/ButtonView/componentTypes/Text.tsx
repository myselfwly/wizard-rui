import React, { FC } from "react";
import { useTranslation } from "react-i18next";
export const TypeText: FC<any> = (props) => {
	const { t } = useTranslation();
	return <>{t("componentViews.button.text")}</>;
};
