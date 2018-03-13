import React, { Component } from "react";
import { StyleSheet, Input, View, Text } from "react-native";
import { Header, FormInput, Button, InputGroup } from "react-native-elements";

export default class NewGame extends Component {
  state = {
    addPlayerName: "",
    addPlayerColor: "",
    players: ["Ross", "Pete"],
    victoryPoints: 10,
    playerName: ""
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
        <FormInput
          placeholder="BASIC INPUT"
          value={this.state.playerName}
          onChangeText={text => this.setState({ playerName: text })}
        />
        <Button onClick={this.addPlayer} title="Add Player" />
        {this.state.players.map(player => <Text> {player} </Text>)}
      </View>
    );
  }
}
