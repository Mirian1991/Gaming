import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export const Changelangs = () => {
  const { changeLanguage, language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleChangeLanguage = (newLang) => {
    if (newLang !== language) {
      changeLanguage(newLang);
      const currentPath = window.location.pathname;
      const pathSplit = currentPath.split("/");
      console.log("pathSplit", pathSplit);
      if (pathSplit.length === 2 && pathSplit[0] === "" && (pathSplit[1] === "" || pathSplit[1] !== "")) {
        navigate(`/${newLang}`);
      } else {
        pathSplit[1] = newLang;
        const newPath = pathSplit.join("/");
        console.log("newPath", newPath);
        navigate(newPath);
      }
      console.log("currentPath", currentPath);
      // changeLanguage(newLang);
      // console.log("newPath", newPath);
      // navigate(newPath);
    }
  };

  return (
    <div className="changelangs-container">
      {language === "en" ? (
        <button
          className="language-button active"
          onClick={() => handleChangeLanguage("ka")}
        >
          KA
        </button>
      ) : (
        <button
          className="language-button"
          onClick={() => handleChangeLanguage("en")}
        >
          EN
        </button>
      )}
    </div>
  );
};
