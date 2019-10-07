import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import CardItem from "./CardItem";

const CardList = () => {
  const [players, setPlayers] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        setPlayers(Array.from(res.data));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container className="card-list">
      {console.log([...players])}
      {[...players].map(player => {
        return <CardItem key={player.id} player={player} />;
      })}
    </Container>
  );
};

export default CardList;
