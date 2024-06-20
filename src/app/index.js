import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../../src/components/ExerciseListItem';


export default function App() {

  return (
    <View style={styles.container}>

    <FlatList
      data={exercises}
      contentContainerStyle= {{gap: 10}}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item })=> <ExerciseListItem item={item}/> }
    />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite', // I don't like this. Too white. Will change later
    justifyContent: 'center',
    padding: 10,
  },
});
