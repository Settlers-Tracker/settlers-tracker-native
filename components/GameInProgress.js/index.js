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

export default class GameInProgress extends Component {
  state = {
    players: [],
    victoryPointsToWin: 10,
    currentPlayerIndex: 0,
    currentTurn: 1,
    error: null
  };
  componentDidMount = () => {
    let players = props.players;
    players.map((player) => {victoryPoints: 2, knights: 0, roadLength: 1, settlements: 2, cities: 0, playerName: player}
    })
    this.setState({players})
  }

  render() {

    return (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "Settlers Tracker",
            style: { color: "#fff" }
          }}
        />
      </View>
    );
  }
}
