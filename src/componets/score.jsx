import React, { useState } from "react";
import laderPage from "./laderpage";
import { useEffect } from "react";
export default function score({ oppTeam, team, task, over }) {
  const [teamToBat, setTeamToBat] = useState(task === "Bat" ? team : oppTeam);
  const [Score1, setScore1] = useState(0.0);
  const [wickets, setWickets] = useState(0);
  const [matchOver, setMatchOver] = useState(0);
  const [a, seta] = useState(0);
  const [Score2, setScore2] = useState(0);
  const [Tg, setTg] = useState(null);
  const [inningNum, setinningNum] = useState(0);
  const [msg, setmsg] = useState(fals);

  const handleRun = (value) => {
    if (inningNum == 0) {
      if (value !== "wd") {
        setScore1(Score1 + value);
        seta(a + 1);
      } else {
        setScore1(Score1 + 1);
      }
    } else if (inningNum == 1) {
      if (value !== "wd") {
        setScore2(Score2 + value);
        seta(a + 1);
      } else {
        setScore2(Score2 + 1);
      }
    }
  };

  function handleWickets() {
    setWickets(wickets + 1);
    seta(a + 1);
  }
  useEffect(() => {
    if (a === 6) {
      setMatchOver(matchOver + 1);
      seta(0);
    }
  }, [a]);

  // useEffect(() => {
  //   if (task === "Bat") {
  //     setTeamToBat(team);
  //   } else {
  //     setTeamToBat(oppTeam);
  //   }
  // }, []);

  useEffect(() => {
    if (
      (matchOver === over && teamToBat === team) ||
      (wickets === 10 && teamToBat === team)
    ) {
      setTg(oppTeam);
      setTeamToBat(oppTeam);
      setMatchOver(0);
      setWickets(0);
      setinningNum(inningNum + 1);

      seta(0);
    } else if (
      (matchOver === over && teamToBat === oppTeam) ||
      (wickets === 10 && teamToBat === oppTeam)
    ) {
      setinningNum(inningNum + 1);
      setTg(oppTeam);
      setWickets(0);
      setTeamToBat(team);
      setMatchOver(0);
      seta(0);
    }
  }, [matchOver, wickets]);

  return (
    <>
      <h2 className="text-center font-medium text-4xl	text-red-900	">
        {teamToBat} opens to bat
        {inningNum === 1 && (
          <h2 className="text-center font-medium text-2xl	text-red-900 mt-1">
            Target for {Tg}-{Score1}
          </h2>
        )}
      </h2>
      <div className="container1">
        <div className="container mx-auto pt-10  flex justify-center ">
          <div className=" absolute top-0 left-0 w-full h-1/2  ">
            <div className="scoreboard">
              <h1 className="font-medium text-4xl">{teamToBat}</h1>
              <h2 className="pt-2 font-medium text-xl">
                {inningNum == 1 ? Score2 : Score1}/{wickets}
              </h2>
              <h3 className="pt-2 font-medium text-xl">
                {matchOver}.{a}/{over}
              </h3>

              <div className="flex gap-2 text-center justify-center  p-2">
                {[1, 2, 3, 4, 5, 6, "wd"].map((num, i) => {
                  return (
                    <button
                      className="w-8 h-8 flex justify-center items-center rounded-md  bg-green-500 text-white"
                      key={`btn-${i}`}
                      onClick={() => handleRun(num)}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
              <button onClick={handleWickets} className="sc" id="out">
                Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="msg-container"></div>
    </>
  );
}
