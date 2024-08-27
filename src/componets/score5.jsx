import React, { useState, useEffect } from "react";
import Toss from "./toss";
import laderPage from "./laderpage";

export default function Score({ oppTeam, team, task, over, rest }) {
  const [teamToBat, setTeamToBat] = useState(task === "Bat" ? team : oppTeam);
  const [score, setScore] = useState([0, 0]);
  const [wickets, setWickets] = useState(0);
  const [matchOver, setMatchOver] = useState(0);
  const [ballCount, setBallCount] = useState(0);
  const [target, setTarget] = useState(1);
  const [inning, setInning] = useState(0);
  const [winner, setWinner] = useState(null);
  const [Game, setGame] = useState(false);

  const handleRun = (value) => {
    if (inning < 2) {
      setScore((prev) => {
        const newScore = [...prev];
        newScore[inning] += value === "wd" ? 1 : value;
        return newScore;
      });
      if (value !== "wd") {
        setBallCount(ballCount + 1);
      }
    }
  };

  const handleWicket = () => {
    if (inning < 2) {
      setWickets(wickets + 1);
      setBallCount(ballCount + 1);
    }
  };

  useEffect(() => {
    if (ballCount === 6) {
      setMatchOver(matchOver + 1);
      setBallCount(0);
    }
  }, [ballCount]);

  useEffect(() => {
    if ((matchOver === over || wickets === 10) && inning === 0) {
      setTeamToBat(task === "Bat" ? oppTeam : team);
      setTarget(score[0] + 1);
      setInning(1);
      setMatchOver(0);
      setWickets(0);
      setBallCount(0);
    } else if ((matchOver === over || wickets === 10) && inning === 1) {
      setInning(2);
      if (score[1] > target) {
        setWinner(task === "Bat" ? oppTeam : team);
      } else if (score[1] < target) {
        setWinner(task === "Bat" ? team : oppTeam);
      } else {
        setWinner("Draw");
      }
    }
  }, [matchOver, wickets]);

  useEffect(() => {
    if (inning === 1 && score[1] > target) {
      setWinner(task === "Bat" ? oppTeam : team);
      setInning(2); // End the game
    }
  }, [score]);
  useEffect(() => {
    if (inning === 2) {
      setGame(true);
    }
  }, [inning]);

  return (
    <>
      <div
        className="min-h-screen  flex flex-col items-center justify-center bg-cover bg-center py-12"
        style={{ backgroundImage: "" }}
      >
        <div className="text-center bg-white bg-opacity-20  p-8 rounded-lg shadow-lg">
          <h2 className=" Extra font-bold text-4xl  mb-4">
            {inning < 2 ? (
              `${teamToBat} opens to bat`
            ) : (
              <h2 className="Extra4">Match Over</h2>
            )}
          </h2>
          {inning === 1 && (
            <h3 className=" Extra2 font-semibold text-2xl text-lime-300 mb-2">
              Target for {task === "Bat" ? oppTeam : team} - {target}
            </h3>
          )}
          {winner && (
            <h3 className=" Extra7 font-bold text-3xl text-yellow-300 mb-2">
              {winner === "Draw"  
                ? "The match is a Draw"
                : `${winner} wins the match`}
            </h3>
          )}
        </div>

        <div className="w-full max-w-md bg-white bg-opacity-30  shadow-lg rounded-lg overflow-hidden mt-6">
          <div className="p-4 text-center">
            <h1 className=" Extra6 font-bold text-3xl text-zinc-900">
              {teamToBat}
            </h1>
            <div className=" Extra5 mt-2 text-lg text-zinc-900">
              <p>
                {score[inning]}/{wickets}
              </p>
              <p>
                {matchOver}.{ballCount}/{over}
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 6, "wd"].map((num, i) => (
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition duration-200"
                  key={`btn-${i}`}
                  onClick={() => handleRun(num)}
                  disabled={inning >= 2}
                >
                  {num}
                </button>
              ))}
            </div>
            <button
              onClick={handleWicket}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-800 transition duration-200"
              disabled={inning >= 2}
            >
              Out
            </button>
            {Game && (
              <div className=" mt-4 px-4 py-2 bg-zinc-600 text-white rounded-full hover:bg-zinc-900 transition duration-200">
                <button onClick={rest}>New Game</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
