import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

export default function App() {

  const [game, setGame] = useState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
  ])

  const [playerOne, setPlayerOne] = useState(1)
  const [winner, setWinner] = useState("")


  const initializeGame = () => {
    setGame([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    setWinner(null)
  }

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

      <View style={ {flexDirection: "row"} }>
        <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]} > 
          {touchIcon(0, 0)}
        </View>

        <View style={[styles.tile, { borderTopWidth: 0 }]} > 
          {touchIcon(0, 1)}
        </View>

        <View style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]} >
          {touchIcon(0, 2)}
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={[styles.tile, { borderLeftWidth: 0 }]} >
          {touchIcon(1, 0)}
        </View>
        <View style={[styles.tile, {  }]} >
          {touchIcon(1, 1)}
        </View>
        <View style={[styles.tile, { borderRightWidth: 0 }]} >
          {touchIcon(1, 2)}
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]} >
          {touchIcon(2, 0)}
        </View>
        <View style={[styles.tile, { borderBottomWidth: 0 }]} >
          {touchIcon(2, 1)}
        </View>
        <View style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]} >
          {touchIcon(2, 2)}
        </View>
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
