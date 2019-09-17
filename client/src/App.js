import React from "react";
import "./App.css";
import { Container, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <Container className="main-wrapper">
        <Header as="h1">Players of the Women's World Cup 2019</Header>
        <CardList />
      </Container>
    </div>
  );
}

export default App;
