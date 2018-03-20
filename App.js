import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import NewGame from "./components/NewGame";
import GameInProgress from "./components/GameInProgress";
export default class App extends React.Component {
  state = {
    players: [],
    view: "newGame"
  };
  updatePlayers = (players, view) => {
    this.setState({ players, view });
  };
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
        {this.state.view === "newGame" && (
          <NewGame updatePlayers={this.updatePlayers} />
        )}
        {this.state.view === "gameInProgress" && (
          <GameInProgress players={this.state.players} />
        )}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
