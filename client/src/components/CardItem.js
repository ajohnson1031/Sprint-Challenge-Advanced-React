import React from "react";
import { Card, Image, Header } from "semantic-ui-react";
import { FlagData } from "../data/FlagData";

const CardItem = ({ player }) => {
  console.log(player);
  return (
    <Card className="card-item">
      <Header as="h3">{player.name}</Header>
      <p>{player.country}</p>
      <Image
        src={`https://www.countryflags.io/${
          FlagData[player.country]
        }/flat/64.png`}
        alt={`${player.country} flag`}
        height="64"
        width="64"
      />
    </Card>
  );
};

export default CardItem;
