import React from 'react';
import './Leaderboard.css';

const strategies = [
  {
    rank: 1,
    name: "Selling with re entr",
    calmarRatio: 3.96,
    overallProfit: 381845,
    avgDailyProfit: 319.54,
    winPercentage: 0.65,
    price: null
  },
  {
    rank: 2,
    name: "strategy_name",
    calmarRatio: 3.62,
    overallProfit: 268872.5,
    avgDailyProfit: 216.31,
    winPercentage: 0.64,
    price: 500
  },
  {
    rank: 3,
    name: "Based on premium and",
    calmarRatio: 3.42,
    overallProfit: 255425,
    avgDailyProfit: 208.51,
    winPercentage: 0.64,
    price: null
  },
  {
    rank: 4,
    name: "strategy_name",
    calmarRatio: 3.22,
    overallProfit: 370845,
    avgDailyProfit: 303.47,
    winPercentage: 0.65,
    price: null
  },
  {
    rank: 5,
    name: "strategy_name",
    calmarRatio: 3.22,
    overallProfit: 370845,
    avgDailyProfit: 303.47,
    winPercentage: 0.65,
    price: null
  },
  {
    rank: 6,
    name: "Based on premium wit",
    calmarRatio: 3.01,
    overallProfit: 135980,
    avgDailyProfit: 185.77,
    winPercentage: 0.49,
    price: null
  },
  {
    rank: 7,
    name: "strategy_name",
    calmarRatio: 2.76,
    overallProfit: 267867.5,
    avgDailyProfit: 218.49,
    winPercentage: 0.6,
    price: null
  },
  {
    rank: 8,
    name: "Wait and trade_Save",
    calmarRatio: 2.62,
    overallProfit: 178252.5,
    avgDailyProfit: 161.9,
    winPercentage: 0.63,
    price: null
  },
  {
    rank: 9,
    name: "iron condor",
    calmarRatio: 2.44,
    overallProfit: 176420,
    avgDailyProfit: 137.51,
    winPercentage: 0.65,
    price: null
  },
  {
    rank: 10,
    name: "strategy_name",
    calmarRatio: 2.04,
    overallProfit: 244555,
    avgDailyProfit: 198.66,
    winPercentage: 0.62,
    price: null
  }
];

const Leaderboard = () => {
  return (
    <>
  <div className="home-leaderboard">Home / Leaderboard</div>
      <h1 className="leaderboard-heading"> Leaderboard</h1>
   <div className='leaderCont'>
     <div className="leaderboard">
      <div className="row head">
        <div>Rank</div>
        <div>Name</div>
        <div>Calmar Ratio</div>
        <div>Overall Profit</div>
        <div>Avg. Daily Profit</div>
        <div>Win % (Day)</div>
        <div>Price (Rs)</div>
      </div>
      {strategies.map(strategy => (
        <div className="row" key={strategy.rank}>
          <div>{strategy.rank}</div>
          <div>{strategy.name}</div>
          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="green"
              style={{ width: "20px", marginRight: "5px" }}
              className="w-5 h-5 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                ></path>
            </svg>
            {strategy.calmarRatio}
          </div>
          <div>{strategy.overallProfit}</div>
          <div>{strategy.avgDailyProfit}</div>
          <div>{strategy.winPercentage}</div>
          <div>{strategy.price ? strategy.price : 'N/A'}</div>
        </div>
      ))}
    </div>
   </div>
  </>
  );
};

export default Leaderboard;
