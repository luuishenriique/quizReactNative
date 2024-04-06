import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'red', width: '100%'}}>
        <Text style={styles.text}>Header</Text>
      </View>
      <ScrollView style={{flex: 8, backgroundColor: 'green', width: '100%'}}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, assumenda harum tempora debitis quia amet libero nihil repudiandae modi provident vel aperiam! Ab dolore nemo similique suscipit in, optio aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum nam vel necessitatibus minus sapiente magni veniam eligendi vero. Aspernatur maxime aliquam veritatis sed, facilis molestias culpa dolor sequi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit ipsum assumenda, repellat dignissimos quaerat modi dolorem obcaecati, repellendus ducimus pariatur unde. Labore repellat nulla in optio adipisci excepturi dolores?</Text>
      </ScrollView>
      <View style={{flex: 1, backgroundColor: 'blue', width: '100%'}}>
        <Text style={styles.text}>Footer</Text>
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
  text: {
    fontSize: 42,
    textAlign: 'center',
  }
});
