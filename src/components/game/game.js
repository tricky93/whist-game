import React, {useState} from 'react';
import {Button, View, Text, TextInput, StyleSheet} from 'react-native';
import Player from './player';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    paddingTop: 22,
  },
});

function GameScreen({navigation}) {
  const [player, setPlayer] = useState('');
  const [players, setPlayers] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [startRound, setStartRound] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {startGame ? (
        <View>
          <Text>GAME ON!!!</Text>
          <Button title="Start Round" onPress={() => setStartRound(true)} />
        </View>
      ) : (
        <>
          <TextInput
            style={{
              height: 40,
              width: 340,
              borderColor: 'gray',
              borderWidth: 1,
              margin: 24,
            }}
            value={player}
            onChangeText={newPlayer => setPlayer(newPlayer)}
          />
          <View style={styles.container}>
            <Button
              onPress={() => {
                setPlayers(players => [
                  ...players,
                  {
                    id: players.length,
                    name: player,
                    score: 0,
                    isDealer: false,
                    predictedHands: 0,
                    ActualHands: 0,
                  },
                ]);
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
        </>
      )}
      {players.map((p, i) => {
        return <Player key={i} player={p} hasGameStarted={startGame} />;
      })}
    </View>
  );
}

export default GameScreen;
