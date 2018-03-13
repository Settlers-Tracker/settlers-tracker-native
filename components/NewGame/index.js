import React, { Component } from "react";
import { StyleSheet, Input, View, Text } from "react-native";
import {
  Icon,
  Header,
  FormInput,
  Button,
  InputGroup,
  FormValidationMessage
} from "react-native-elements";
import PlayerList from "./PlayerList";

export default class NewGame extends Component {
  state = {
    addPlayerName: "",
    addPlayerColor: "",
    players: [],
    victoryPoints: 10,
    playerName: "",
    error: null
  };

  handleInputChange = e => {
    const addPlayerName = e.target.value;
    this.setState({ addPlayerName });
  };
  buttonPress = e => {
    this.setState({ addPlayerName });
  };
  updatePlayerName = e => {
    this.setState({ playerName: e.target.value });
  };
  addPlayer = () => {
    let { players, playerName } = this.state;
    let error = null;
    playerName = playerName.trim().toUpperCase();
    if (!players.includes(playerName)) {
      players.push(playerName);
    } else {
      error = "Player name already exists";
    }
    this.setState({
      players,
      playerName: "",
      error
    });
  };
  movePlayerUp = player => {
    let { players } = this.state;
    let i = players.indexOf(player);
    console.log("index: ", i);
    if (i > 0) {
      console.log("made it in");
      [players[i], players[i - 1]] = [players[i - 1], players[i]];
    }
    this.setState({ players });
    console.log(players);
  };
  movePlayerDown = player => {
    let { players } = this.state;
    let i = players.indexOf(player);
    console.log("index: ", i);
    if (i < players.length - 1) {
      console.log("made it in");
      [players[i], players[i + 1]] = [players[i + 1], players[i]];
    }
    this.setState({ players });
    console.log(players);
  };
  deletePlayer = player => {
    let { players } = this.state;
    let i = players.indexOf(player);
    players.splice(i, 1);
    this.setState({
      players
    });
  };

  render() {
    // const { addPlayerName } = this.state;

    return (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "Settlers Tracker",
            style: { color: "#fff" }
          }}
        />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <FormInput
            containerStyle={{ width: "60%" }}
            placeholder="BASIC INPUT"
            value={this.state.playerName}
            onChangeText={text => this.setState({ playerName: text })}
          />
          {/* <Icon raised name="add" onPress={this.addPlayer} /> */}
          <Button
            disabled={this.state.playerName.length === 0}
            borderRadius="100%"
            buttonStyle={{ width: 60 }}
            containerViewStyle={{ borderRadius: "100%", width: 60 }}
            icon={{ name: "add" }}
            onPress={this.addPlayer}
            raised
            rounded
          />
        </View>
        {this.state.error && (
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        )}
        <PlayerList
          players={this.state.players}
          movePlayerUp={this.movePlayerUp}
          movePlayerDown={this.movePlayerDown}
          deletePlayer={this.deletePlayer}
        />
        <Button onPress={this.startGame} title="Start Game" />
      </View>
    );
  }
}
