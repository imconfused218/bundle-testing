import axios from "axios";

export const fetchGames = (league) =>
  axios(
    `https://api-stage.sprtactn.co/web/v1/scoreboard/${league}?bookIds=15&date=20180620`
  ).then((response) => response.data.games);
