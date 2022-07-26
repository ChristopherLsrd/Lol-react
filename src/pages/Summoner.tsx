import { useContext, useEffect, useState } from "react";
import LOLUserNameContext from "../context/LOLUserNameContext";
import lolLogo from "../assets/img/lol-logo.png";
import Card from "../components/Card";
import fetchChampsFromUser from "../api/lol-api-champs";
import IChamps from "../interface/IChamps";

const Summoner = () => {
  const [LOLuser] = useContext(LOLUserNameContext);
  const [champs, setChamps] = useState<IChamps[]>([]);
  useEffect(() => {
    //loadChampsFromUser(LOLuser)
    fetchChampsFromUser(LOLuser).then((apichamps: any) => setChamps(apichamps));
    console.log(LOLuser);
    console.log(champs);
  }, [LOLuser]);
  console.log(LOLuser);

  return (
    <div className="hero is-fullheight">
      <div className="hero-head">
        <div className="header-summoner">
          <div className="header-logo">
            <figure>
              <img src={lolLogo} />
            </figure>
            <p>MASTERIES STATISTIQUES</p>
          </div>
          <p>{LOLuser}</p>
        </div>
      </div>

      {LOLuser != undefined ? (
        <div className="columns is-multiline is-centered is-vcentered has-text-centered">
          {champs.map((champ: IChamps) => (
            <Card champ={champ} />
          ))}
        </div>
      ) : (
        <p className="title error">Aucun invocateur recherché</p>
      )}
      <div className="hero-foot columns">
        <div className="column is-4 is-11-mobile is-offset-9-desktop is-offset-1-mobile">
          <p>Gaspar MISSIAEN - Christopher LESSIRARD</p>
        </div>
      </div>
    </div>
  );
};

export default Summoner;
