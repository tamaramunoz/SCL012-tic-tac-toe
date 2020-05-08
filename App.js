import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

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
    ]);

    setWinner(null)
  };

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

  };

  const touchIcon = (row, col) => {
    let value = game[row][col]

    switch(value){
      case 1: return <Icon name="close" style={styles.tileX} />
      case -1: return <Icon name="circle-outline" style={styles.tileO} />
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile: {
    borderWidth: 5,
    width: 100,
    height: 100,
  },

  tileX: {
    color: "red",
    fontSize: 60,
  },

  tileO: {
    color: "green",
    fontSize: 60,
  },


});
