export const moneylineLeagues = {
  nhl: true,
  mlb: true,
  epl: true,
  bundesliga: true,
  ligue1: true,
  mls: true,
  laliga: true,
  seriea: true,
  champions: true,
  worldcup: true,
  ufc: true
};

export function getDefaultOddsType(league) {
  return isMoneylineLeague(league) || league === "soccer" ? "ml" : "spread";
}

export function isMoneylineLeague(league) {
  if (!league) {
    return false;
  }

  return moneylineLeagues[league];
}
