import * as React from 'react';
import {Button, View, Text, FlatList, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function RulesScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={[
          {key: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'},
          {key: 'Aliquam tincidunt mauris eu risus.'},
          {key: 'Vestibulum auctor dapibus neque.'},
          {key: 'Nunc dignissim risus id metus.'},
          {key: 'Cras ornare tristique elit.'},
          {key: 'Vivamus vestibulum ntulla nec ante.'},
          {key: 'Praesent placerat risus quis eros.'},
          {key: 'Fusce pellentesque suscipit nibh.'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default RulesScreen;
