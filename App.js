import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import style from './style.js';

export default function App() {

  const [game, setGame] = useState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
  ]);

  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState("");


  const initializeGame = () => {
    setGame([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
    setWinner(null)
  };

  const tieGame = () => {
    let arr = game;

    for (let i = 0; i < 3; i++) {
      if (arr[0][i] === 0) { return 0; } 
      else if (arr[1][i] === 0) { return 0; } 
      else if (arr[2][i] === 0) { return 0; }
    }
    return 1;
  }

  const getWinner = () => {
    let sum;
    let arr = game;

    // chequeando columnas
    for (let i = 0; i < 3; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum === 3) { return 1; } 
      else if (sum === -3) { return -1; }
    }

    // chequeando filas
    for (let i = 0; i < 3; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === 3) { return 1; } 
      else if (sum === -3) { return -1; }
    }

    // chequeando diagonales
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum === 3) { return 1; } 
    else if (sum === -3) { return -1; }

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum === 3) { return 1; } 
    else if (sum === -3) { return -1; }

    // empate
    return null;
  }

  const onTilePress = (row, col) => {
    // no permite que los cuadros cambien
    let value = game[row][col];
    if (value !== 0){ return; }

    // elige el cuadro presionado
    let square = [...game];
    square[row][col] = player;
    setGame(square);
    
    // cambiando el jugador
    let nextPlayer = (player == 1) ? -1 : 1;
    setPlayer(nextPlayer);

    // chequeando el ganador
    let winner = getWinner();
    let tie = tieGame();

    // definiendo al ganador
    if (winner === 1) {
      Alert.alert("Holly Ganó!");
      initializeGame();
    } else if (winner === -1) {
      Alert.alert("Ben Ganó!");
      initializeGame();
    } else if (tie === 1) {
      Alert.alert("Es un empate!");
      initializeGame();
    }
  };

  const onNewGamePress = () => {
    initializeGame();
  };

  const touchIcon = (row, col) => {
    let character = game[row][col]

    switch(character){
      case 1: return <Image source={require('./assets/holly.png')} style={styles.tileX} />
      case -1: return <Image source={require('./assets/ben.png')} style={styles.tileO} />
      default: return <View />
    }
  };


  return (
    <View style={styles.container}>

      <View style={ {flexDirection: "row", alignItems: "center", justifyContent: "center"} }>
        <TouchableOpacity 
          style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]} 
          onPress={() => onTilePress(0, 0)}
        > 
          {touchIcon(0, 0)}
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tile, { borderTopWidth: 0 }]} 
          onPress={() => onTilePress(0, 1)}
        > 
          {touchIcon(0, 1)}
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]} 
          onPress={() => onTilePress(0, 2)}
        >
          {touchIcon(0, 2)}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.tile, { borderLeftWidth: 0 }]} 
          onPress={() => onTilePress(1, 0)}
        >
          {touchIcon(1, 0)}
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tile, {  }]} 
          onPress={() => onTilePress(1, 1)}
        >
          {touchIcon(1, 1)}
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tile, { borderRightWidth: 0 }]} 
          onPress={() => onTilePress(1, 2)}
        >
          {touchIcon(1, 2)}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]} 
          onPress={() => onTilePress(2, 0)}
        >
          {touchIcon(2, 0)}
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tile, { borderBottomWidth: 0 }]} 
          onPress={() => onTilePress(2, 1)}
        >
          {touchIcon(2, 1)}
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]} 
          onPress={() => onTilePress(2, 2)}
        >
          {touchIcon(2, 2)}
        </TouchableOpacity>
      </View>

      <TouchableHighlight  style={style.newGameBtn} >
        <Text style={style.textBtn}  onPress={ onNewGamePress } >New Game</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B3B98',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile: {
    borderWidth: 5,
    borderColor: '#fffa65',
    width: 100,
    height: 100,
  },

  tileX: {
    width: 80,
    height: 80,
  },

  tileO: {
    width: 80,
    height: 80,
  },


});
