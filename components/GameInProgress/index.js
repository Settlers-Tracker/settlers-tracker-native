import React, { Component } from "react";
import { StyleSheet, Input, View } from "react-native";
import {
  Icon,
  Header,
  FormInput,
  Button,
  InputGroup,
  FormValidationMessage,
  Tile
} from "react-native-elements";
import { Container, Content, List, ListItem, Text } from "native-base";

export default class GameInProgress extends Component {
  state = {
    players: [],
    victoryPointsToWin: 10,
    currentPlayerIndex: 0,
    currentTurn: 1,
    error: null
  };
  componentDidMount = () => {
    let players = this.props.players;
    players = players.map(player => {
      return {
        victoryPoints: 2,
        knights: 0,
        roadLength: 1,
        settlements: 2,
        cities: 0,
        playerName: player
      };
    });
    this.setState({ players });
  };

  render() {
    return (
      <View>
        <List>
          {this.state.players.map(player => {
            return (
              <ListItem title="testing">
                <Text> {player.playerName} </Text>
              </ListItem>
            );
          })}
          <ListItem title="testing">
            <Text> Testing </Text>
          </ListItem>
        </List>
      </View>
    );
  }
}
