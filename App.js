import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

export default function App() {

  const [game, setGame] = useState([])
  const [playerOne, setPlayerOne] = useState(1)
  const [winner, setWinner] = useState("")


  const initializeGame = () => {
    setGame([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  }

  return (
    <View style={styles.container}>

      <View style={ {flexDirection: "row"} }>
        <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]} > 
          <Icon name="close" style={styles.tileX}></Icon>
        </View>

        <View style={[styles.tile, { borderTopWidth: 0 }]} > 
          <Icon name="circle-outline" style={styles.tileO} ></Icon>
        </View>

        <View style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]} />
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={[styles.tile, { borderLeftWidth: 0 }]} />
        <View style={[styles.tile, {  }]} />
        <View style={[styles.tile, { borderRightWidth: 0 }]} />
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]} />
        <View style={[styles.tile, { borderBottomWidth: 0 }]} />
        <View style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]} />
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
    alignItems: "center",
    justifyContent: "center"
  },

  tileO: {
    color: "green",
    fontSize: 60,
    alignItems: "center",
    justifyContent: "center"

  }

});
