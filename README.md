Cricket Score Simulator
This project is a Cricket Score Simulator built using React.js. The application allows users to simulate a cricket match by selecting teams, conducting a toss, and playing out the match innings.

Features
Team Selection: Users can input the names of two teams.
Toss Simulation: A random toss is simulated to determine which team bats first.
Match Play: Users can simulate a cricket match by adding runs, taking wickets, and setting targets.
Result Calculation: The match automatically calculates the winner or if the match is a draw.
Responsive Design: The app is designed to be responsive and works well on various screen sizes.
Project Structure
App.jsx: Main component rendering the LaderPage component.
LaderPage.jsx: Contains logic for team selection, toss, and rendering the Toss component.
Toss.jsx: Handles the toss result, selection of batting or bowling, and the transition to the Score5 component.
Score5.jsx: Manages the score simulation, including runs, wickets, overs, and determining the match result.
index.css: Contains the styling for the entire application.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/cricket-score-simulator.git
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
The application should now be running on http://localhost:3000.

Future Enhancements
Add more customization options like selecting the number of players, overs, and match types.
Enhance the UI for better user experience.
Implement advanced match statistics and analytics.
License
This project is licensed under the MIT License.
