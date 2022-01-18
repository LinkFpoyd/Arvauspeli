import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [numero, setNumero] = React.useState(0);
  const [arvaus, setArvaus] = React.useState(0);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    setText('Arvaa numero 1-100 väliltä');
    setNumero(Math.floor(Math.random() * 100) + 1);
  }, []);


  const checkNumero = () => {

    if (arvaus == numero) {
      setText('Oikein!');
    } else if (arvaus <= numero) {
      setText('Liian pieni arvaus.')
    } else if (arvaus >= numero) {
      setText('Liian suuri arvaus.')
    }

  }
  

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={input => setArvaus(input)}/>
      <Button title="Tarkista" onPress={checkNumero}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 100,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white'
  }
});
