import axios from "axios";
import ILOLUserName from "../interface/ILOLUserName";

const APIKey: string = "RGAPI-d7e0e373-dfde-43c5-8c27-59d98750f39b"
const PARAMS = {
  headers: {
    "X-Riot-Token": APIKey,
  }
};


const fetchUsername = async (region: any, userName: any, setLOLuser: Function) => {
  //const URI: string = "https://" + region + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + userName;
  const URI: string = "https://" + region + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + userName + "?api_key=RGAPI-6b3ec90d-0253-4161-9888-4af23f9e1514"

  try {
    axios.get(URI).then((response) => {
      const { data } = response
      console.log(data);
      setLOLuser(data);
    });
  } catch (err) {
    console.warn("Problème lors du fetch à l'api de user: ", err);
    return [];
  }
};

export default fetchUsername;
