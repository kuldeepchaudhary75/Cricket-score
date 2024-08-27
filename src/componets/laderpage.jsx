import React, { useState } from "react";
import Socre5 from "./score5";
import Toss from "./toss";

export default function laderPage() {
  let [showTossFill, setShowTossFill] = useState(false);

  const [teamAName, setTeamAName] = useState("CSK");
  const [teamBName, setTeamBName] = useState("DC");
  const [tossResult, setTossResult] = useState(null);

  const handleToss = () => {
    const teams = [teamAName, teamBName];
    const winner = Math.floor(Math.random() * teams.length);
    setTossResult(teams[winner]);
    setShowTossFill(true);
  };
  // const handleTossClick = () => {};

  const handlerest = () => {
    setShowTossFill(false);
  };
  return (
    <>
      {document.addEventListener("mousemove", (dets) => {
        document.querySelector(".box").style.left = dets.x - 58 + "px";
        document.querySelector(".box").style.top = dets.y - 62 + "px";
      })}

      <div className="box "> </div>
      <div className="bg-box "></div>
      {!showTossFill && (
        <div className="container flex justify-center mx-auto pt-10 bg-img ">
          <div className="flex justify-center z-10">
            <div style={{ width: "300px" }}>
              <div className="flex flex-col gap-4 text-xl text-center">
                <p>Enter Team A Name: </p>
                <input
                  className="hover:bg-zinc-500 transition duration-200"
                  type="text"
                  name="Team-A"
                  value={teamAName}
                  onChange={(e) => setTeamAName(e.target.value)}
                />
              </div>
              <span className="vs">V/s</span>
              <div className="flex flex-col gap-4 text-xl text-center ">
                <p>Enter Team B Name: </p>
                <input
                  type="text"
                  name="Team-B"
                  className="hover:bg-zinc-500 transition duration-200"
                  value={teamBName}
                  onChange={(e) => setTeamBName(e.target.value)}
                />
              </div>
              <div className="flex justify-center mt-5">
                <div
                  className="bg-red-600 rounded-full w-24 h-24 flex justify-center items-center hover:bg-red-800 transition duration-200 cursor-pointer"
                  onClick={handleToss}
                >
                  <p>Toss</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showTossFill && teamAName && teamBName && (
        <Toss
          teamAName={teamAName}
          teamBName={teamBName}
          // showTossFill={showTossFill}
          tossResult={tossResult}
          handlerest={handlerest}
        />
      )}

      {/* {showScore && (
        
      )} */}
    </>
  );
}
