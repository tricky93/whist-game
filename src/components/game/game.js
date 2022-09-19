import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function GameScreen({navigation}) {
  const [player, setPlayer] = useState('');
  const [players, setPlayers] = useState([]);
  const [startGame, setStartGame] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        style={{
          height: 40,
          width: 340,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue={player}
        onChangeText={newPlayer => setPlayer(newPlayer)}
      />
      <View style={styles.container}>
        <Button
          onPress={() => {
            setPlayers(players => [...players, player]);
            setPlayer('');
          }}
          placeholder="Type player here!"
          title={'Add player'}
          disabled={!player || player.length < 3}
        />
        <Button
          style={styles.item}
          onPress={() => {
            setStartGame(true);
          }}
          title={'Start Game'}
          disabled={players.length < 2}
        />
      </View>
      <FlatList
        data={players}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
      {startGame ? <Text>GAME ON!!!</Text> : <Text />}
    </View>
  );
}

export default GameScreen;
