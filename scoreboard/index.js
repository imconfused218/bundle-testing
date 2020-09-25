import React, { useEffect, useState, useMemo } from "react";
import GameCard from "./components/game-card";
import { getDefaultOddsType } from "./utils";
import { fetchGames } from "./api";
import Dropdown from "./components/dropdown";


const LEAGUES = ["nfl", "ncaaf", "mlb", "nba", "soccer"];
const ODDS = ["spread", "ml"];

function formatGame(game, oddsType) {
  return {
    id: game.id,
    teams: {
      home: game.teams.find((team) => team.id === game.home_team_id)
        .display_name,
      away: game.teams.find((team) => team.id === game.away_team_id)
        .display_name
    },
    scores: {
      home: game.boxscore ? game.boxscore.total_home_points : 0,
      away: game.boxscore ? game.boxscore.total_away_points : 0
    },
    odds: {
      home: game.odds ? game.odds[0][`${oddsType}_home`] : "n/a",
      away: game.odds ? game.odds[0][`${oddsType}_away`] : "n/a"
    }
  };
}

const App = ({title, games: initialGames = []}) => {
  // Fetch games here and pass the formatted data to game-card
  const [games, setGames] = useState(initialGames);
  const [selectedLeague, selectLeague] = useState("nfl");
  const [selectedOddsType, selectOddsType] = useState(
    getDefaultOddsType(selectedLeague)
  );

  const formattedGames = useMemo(
    () => games.map((game) => formatGame(game, selectedOddsType)),
    [selectedOddsType, games]
  );

  useEffect(() => {
    fetchGames(selectedLeague).then((games) => setGames(games));
  }, [selectedLeague]);

  useEffect(() => {
    selectOddsType(getDefaultOddsType(selectedLeague));
  }, [selectedLeague]);

  return (
    <div className="App">
      <h1>{title}</h1>
      <Dropdown
        buttonText="Select League: "
        items={LEAGUES}
        selectedItem={selectedLeague}
        handleSelect={selectLeague}
      />
      <Dropdown
        buttonText="Select Odds Type: "
        items={ODDS}
        handleSelect={selectOddsType}
        selectedItem={selectedOddsType}
      />
      <div>
        {formattedGames.length ? (
          formattedGames.map((game) => <GameCard {...game} key={game.id} />)
        ) : (
          <div>No Games Today</div>
        )}
      </div>
    </div>
  );
};

export default App
