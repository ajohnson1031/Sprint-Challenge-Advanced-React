import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CardList from "./components/CardList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);
  const [darkState, setDarkState] = useState("ON");

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    setDarkState(darkState === "ON" ? "OFF" : "ON");
  };
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Container className="main-wrapper">
        <Header as="h1">Players of the Women's World Cup 2019</Header>
        <p className="toggle-label">{`DARK MODE: ${darkState}`}</p>
        <div className="dark-mode__toggle" onClick={toggleMode}>
          <div className={darkMode ? "toggle toggled" : "toggle"} />
        </div>
        <CardList />
      </Container>
    </div>
  );
}

export default App;
