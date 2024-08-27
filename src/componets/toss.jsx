import React, { useState } from "react";
import Score5 from "./score5";

export default function Toss({ teamAName, teamBName, handlerest, tossResult }) {
  const [Over, setOver] = useState(3);
  // const [tossResult, setSelectedTeam] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showScore, setShowScore] = useState(false);
  // const[Rt,setRt]=useState(null)
  return (
    <div>
      {!showScore && (
        <div className="min-h-screen  flex flex-col items-center justify-center bg-cover bg-center py-12">
          {/* <h1>Who wins the toss </h1> */}
          <div
            style={{ marginTop: "20px", fontSize: "30px", fontWeight: "bold" }}
          >
            {tossResult} wins the toss!
          </div>
          {/* <label>
            <input
              type="radio"
              className="ttA"
              id="TeamA"
              checked={tossResult === teamAName}
              onChange={() => setSelectedTeam(teamAName)}
            />{" "}
            {teamAName}
          </label>
          <label>
            <input
              type="radio"
              className="ttB"
              id="TeamB"
              checked={tossResult === teamBName}
              onChange={() => setSelectedTeam(teamBName)}
            />
            {teamBName}
          </label> */}

          {tossResult && (
            <div>
              <div className="flex flex-col items-center ">
                <p>{tossResult}, want to choose: </p>
                <label>
                  <input
                    type="radio"
                    className="ttA cursor-pointer"
                    checked={selectedTask === "Bat"}
                    onChange={() => setSelectedTask("Bat")}
                  />
                  Bat
                </label>
                <label>
                  <input
                    type="radio"
                    className="ttB cursor-pointer"
                    checked={selectedTask === "Ball"}
                    onChange={() => setSelectedTask("Ball")}
                  />
                  Ball
                </label>

                {selectedTask && (
                  <>
                    <label>
                      {" "}
                      Select Over in a inning
                      <select
                        value={Over}
                        name=""
                        className="cursor-pointer"
                        onChange={(e) => setOver(e.target.value)}
                      >
                        <option className="cursor-pointer" value="3">
                          3
                        </option>
                        <option className="cursor-pointer" value="5">
                          5
                        </option>
                        <option className="cursor-pointer" value="10">
                          10
                        </option>
                      </select>
                    </label>

                    <p>{Over}</p>
                  </>
                )}
                {typeof selectedTask === "string" && (
                  <>
                    <div className="mt-2 ">
                      <button
                        onClick={() => {
                          setShowScore(true);
                        }}
                        className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md"
                      >
                        Start
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      {showScore && (
        <Score5
          oppTeam={tossResult === teamAName ? teamBName : teamAName}
          team={tossResult === teamBName ? teamBName : teamAName}
          task={selectedTask}
          over={Over}
          rest={handlerest}
          //   showTossFill={showTossFill}
        />
      )}
    </div>
  );
}
