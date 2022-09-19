import React, {useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    margin: 12,
    maxHeight: 64,
  },
  isDealer: {
    backgroundColor: 'tomato',
  },
  isNotDealer: {
    backgroundColor: 'blue',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function Player({player}, hasGameStarted) {
  const [dealer, setDealer] = useState(false);

  return (
    <View
      style={[dealer ? styles.isDealer : styles.isNotDealer, styles.container]}>
      <View>
        <Text>{player.name}</Text>
        <Button
          title="Make Dealer"
          onPress={() => setDealer(!dealer)}
          disabled={!hasGameStarted}
        />
      </View>
      <View>
        <Button title="Prediction" disabled={!hasGameStarted} />
        <Button title="Actual" disabled={!hasGameStarted} />
      </View>
      <Text>Score: {player.score}</Text>
    </View>
  );
}

export default Player;
