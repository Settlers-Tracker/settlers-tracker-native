import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Input } from "react-native-elements";

export default class NewGame extends Component {
  state = {
    addPlayerName: "",
    addPlayerColor: "",
    players: [],
    victoryPoints: 10
  };

  handleInputChange = e => {
    const addPlayerName = e.target.value;
    this.setState({ addPlayerName });
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
        <Input
          placeholder="Pete"
          value={this.state.addPlayerName}
          onChangeText={this.handleInputChange}
        />
      </View>
    );
  }
}
