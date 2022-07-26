import UserNameForm from "../components/UserNameForm";
import { useContext, useEffect } from "react";
import LOLUserNameContext from "../context/LOLUserNameContext";
import lolLogo from "../assets/img/lol-logo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [LOLuser, setLOLuser] = useContext(LOLUserNameContext);
  const navigate = useNavigate();

  useEffect(() => {
    //loadChampsFromUser(LOLuser)
    console.log("AAA" + LOLuser);
    if (LOLuser != undefined) {
      navigate("/summoner");
    }
  }, [LOLuser]);

  return (
    <div className="hero is-fullheight">
      <div className="hero-body home columns is-centered is-vcentered has-text-centered">
        <div className="column is-half if-full-mobile">
          <figure>
            <img src={lolLogo}></img>
          </figure>
          <p className="title is-3">MASTERIES STATISTIQUES</p>

          <div className="field has-addons has-addons-centered">
            <UserNameForm />
          </div>
        </div>
      </div>
      <div className="hero-foot columns">
        <div className="column is-4 is-11-mobile is-offset-9-desktop is-offset-1-mobile">
          <p>Gaspar MISSIAEN - Christopher LESSIRARD</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
