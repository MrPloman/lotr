import React from "react";
import {useTranslation} from "react-i18next";
import "./ButtonComponent.scss";

export const ButtonComponent = ({label, action}) => {
  const {t} = useTranslation();
  return (
    <>
      <div
        className="button-content"
        onClick={() => {
          window.open(action, "_blank");
        }}
      >
        {t(label)}
      </div>
    </>
  );
};
