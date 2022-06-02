import React from "react";

import "./styles/index.scss";
import GameGrid from "./components/GameGrid";
import GameContainer from "./containers/GameContainer";

function App(): React.ReactElement {
  return (
    <div className="App">
      <div className="container">
        <h1>Mahjong-like game</h1>
        <GameContainer />
      </div>
    </div>
  );
}

export default App;
