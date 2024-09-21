import React, { useContext } from "react";
import { LanguageContext } from "../../global/contexts/LanguageContext";
import { Searchbar } from "../../pages/searchbar/Searchbar";
import { Changelangs } from "../../global/changelangs/Changelangs";
import { Link } from "react-router-dom";

export const Header = () => {
  const { dictionary, language } = useContext(LanguageContext);

  if (!dictionary) {
    return null; // Add this to avoid destructuring from null
  }

  return (
    <header>
      <div className="header-container">
        <div className="logoflex">
          <a href={`/${language}`} className="logo">
            Game Field
          </a>
        </div>

        <Searchbar />

        <nav className="header-nav">
          <ul>
            <li>
              <Link to={`/${language}`}>{dictionary.home}</Link>
            </li>
            <li>
              <Link to={`/${language}/mobilegames`}>
                {dictionary.mobileGames}
              </Link>
            </li>
            <li>
              <Link to={`/${language}/about`}>{dictionary.about}</Link>
            </li>
            <li>
              <Link to={`/${language}/contact`}>{dictionary.contact}</Link>
            </li>
          </ul>
        </nav>
        <div className="header-end-flex">
          <div className="header-loginflex">
            <Link to={`/${language}/create-account`}>
              <div className="create-account">{dictionary.createAccount}</div>
            </Link>
            <Link to={`/${language}/login`}>
              <div className="login">{dictionary.login}</div>
            </Link>
          </div>

          <Changelangs />
        </div>
      </div>
    </header>
  );
};
