import React, { Component } from "react";
import { StyleSheet, Input, View } from "react-native";
import {
  Icon,
  Header,
  FormInput,
  InputGroup,
  FormValidationMessage,
  Tile
} from "react-native-elements";
import { Button, Container, Content, List, ListItem, Text } from "native-base";

export default class GameInProgress extends Component {
  state = {
    players: [],
    victoryPointsToWin: 10,
    currentPlayerIndex: 0,
    currentTurn: 1,
    error: null
  };
  componentDidMount = () => {
    let { players } = this.props;
    players = players.map(player => {
      return {
        victoryPoints: 2,
        knights: 0,
        roadLength: 1,
        settlements: 2,
        cities: 0,
        name: player
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
              <ListItem title="testing" key={player.name}>
                <Text> {player.name} </Text>
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
