import React, {useContext} from "react";
import { LanguageContext } from "../../global/contexts/LanguageContext";
import gamedata from "../../global/gamedata.json";
import { Link } from "react-router-dom";

export const Homepagecard = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="main-homepage">
      <div className="container">
        <div className="games">
          <div id="games" className="popular-games">
            Popular Games
          </div>
          {gamedata.map((game, index) => (
            <div key={index} className="card-box">
              <div className="card">
                <div className={`card-image${index + 1}`}></div>
                <div className="content">
                  <h4>{game.title}</h4>
                  <div className="progress-line">
                    <span></span>
                  </div>
                  <div className="info">
                    <p>
                      Pricing <br />
                      <span>{game.price}$</span>
                    </p>
                    <Link 
                      to={`/${language}/personal/${game.id}`}
                      className="playnowstyle"
                    >
                      Play Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="more-flex">
          <div className="show-more">Show More</div>
        </div>
      </div>
    </div>
  );
};
