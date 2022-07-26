import axios from "axios";
import IUser from "../interface/ILOLUserName";

const APIKey: string = "RGAPI-d7e0e373-dfde-43c5-8c27-59d98750f39b"
const PARAMS = {
  headers: {
    "X-Riot-Token": APIKey,
  }
};

const fetchChampsFromUser = async (LOLUser: IUser) => {
  const URI: string = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + LOLUser.id;//"https://"+region+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+userName+"?api_key=RGAPI-6b3ec90d-0253-4161-9888-4af23f9e1514"
  let data: IUser;

  try {
    const request = await axios.get(URI);
    data = request.data
    return data;
  } catch (err) {
    console.warn("Problème lors du fetch à l'api de champs: ", err);
    return [];
  }
}

export default fetchChampsFromUser;
