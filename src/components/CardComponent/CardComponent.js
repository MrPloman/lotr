import React, {useState} from "react";
import "./CardComponent.scss";
import humans from "../../assets/imgs/humans.jpg";
import elfs from "../../assets/imgs/elfs.jpg";
import {useTranslation} from "react-i18next";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";

export const CardComponent = ({element}) => {
  const {t} = useTranslation();
  const [card, setcard] = useState(element);
  switch (card.race) {
    case "Human":
      card.img = humans;
      break;
    case "Elf":
      card.img = elfs;
      break;
    default:
      break;
  }
  const backStyle = {
    width: "20vw",
    height: "40vh",
    backgroundImage: "url(" + card.img + ")",
    filter: "blur(5px)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "20px",
    cursor: "pointer",
  };
  return (
    <>
      <div
        className="card"
        onClick={() => {
          window.open(card.wikiUrl, "_blank");
        }}
      >
        <div style={backStyle} />
        <div className="card-content">
          <h2>{card.name}</h2>
          <div className="card-content-row">
            <div className="card-content-row-50">
              <h4>
                {t("RACE")}: {t(card.race.toUpperCase())}
              </h4>
            </div>
            <div className="card-content-row-50">
              <h4>
                {t("GENDER")}: {t(card.gender.toUpperCase())}
              </h4>
            </div>
          </div>
          <div className="card-content-row">
            <h4>
              {t("BIRTH")}: {card.birth}
            </h4>
          </div>
          <div className="card-content-row">
            <h4>
              {t("DEATH")}: {card.death}
            </h4>
          </div>
          <div className="card-content-row">
            <h4>
              {t("REALM")}: {card.realm}
            </h4>
          </div>
          <div className="card-content-row">
            <h4>
              {t("SPOUSE")}: {card.spouse}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
