import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

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

function Scoreboard(players) {
  return (
    <View>
      <FlatList />
    </View>
  );
}

export default Scoreboard;
