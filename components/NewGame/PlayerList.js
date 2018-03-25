import React, { Component } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";

export default ({ players, movePlayerUp, movePlayerDown, deletePlayer }) =>
  players.map(player => (
    <PlayerEntry
      player={player}
      movePlayerDown={movePlayerDown}
      movePlayerUp={movePlayerUp}
      deletePlayer={deletePlayer}
    />
  ));

const PlayerEntry = ({
  player,
  movePlayerUp,
  movePlayerDown,
  deletePlayer
}) => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <Button
      onPress={movePlayerUp.bind(this, player)}
      icon={{ name: "arrow-upward" }}
    />
    <Button
      onPress={movePlayerDown.bind(this, player)}
      icon={{ name: "arrow-downward" }}
    />
    <Text h4> {player} </Text>
    <Button
      onPress={deletePlayer.bind(this, player)}
      icon={{ name: "delete" }}
    />
  </View>
);
