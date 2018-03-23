import React, { Component } from "react";
import { StyleSheet, Input, View } from "react-native";
import {
  Header,
  FormInput,
  InputGroup,
  FormValidationMessage
} from "react-native-elements";
import { Button, Icon, Text } from "native-base";
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
      [players[i], players[i + 1]] = [players[i + 1], players[i]];
    }
    this.setState({ players });
  };

  deletePlayer = player => {
    let { players } = this.state;
    let i = players.indexOf(player);
    players.splice(i, 1);
    this.setState({
      players
    });
  };
  startGame = () => {
    this.props.updatePlayers(this.state.players, "gameInProgress");
  };

  render() {
    // const { addPlayerName } = this.state;

    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <FormInput
            containerStyle={{ width: "60%" }}
            placeholder="BASIC INPUT"
            value={this.state.playerName}
            onChangeText={text => this.setState({ playerName: text })}
          />
          <Button
            disabled={this.state.playerName.length === 0}
            // buttonStyle={{ width: 60 }}
            onPress={this.addPlayer}
          >
            <Icon name="add" />
          </Button>
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
