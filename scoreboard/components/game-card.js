import React from "react";
import PropTypes from "prop-types";

/**
 * Props: {
 *  teams: { home: string, away: string },
 *  scores: { home: number, away: number },
 *  odds: { home: number: away: number }
 * }
 *
 */
const GameCard = ({ teams, scores, odds }) => (
  <div className="c-gameCard">
    <div>
      <h4>Teams</h4>
      <div>{teams.home}</div>
      <div>{teams.away}</div>
    </div>
    <div>
      <h4>Scores</h4>
      <div>{scores.home}</div>
      <div>{scores.away}</div>
    </div>
    <div>
      <h4>Odds</h4>
      <div>{odds.home}</div>
      <div>{odds.away}</div>
    </div>
  </div>
);

GameCard.propTypes = {
  teams: PropTypes.shape({
    home: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    away: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ])
  }),
  scores: PropTypes.shape({
    home: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    away: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ])
  }),
  odds: PropTypes.shape({
    home: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    away: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ])
  })
};

export default GameCard;
