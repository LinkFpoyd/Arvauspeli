import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [numero, setNumero] = React.useState(0);
  const [arvaus, setArvaus] = React.useState(0);
  const [laskuri, setLaskuri] = React.useState(1);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    setText('Arvaa numero 1-100 väliltä');
    setNumero(Math.floor(Math.random() * 100) + 1);
  }, []);


  const checkNumero = () => {

    if (arvaus == numero) {
      setLaskuri(laskuri + 1);
      Alert.alert('Vastauksesi ' + arvaus + ' oli oikein! Arvasit yhteensä ' + laskuri + ' kertaa.')
      setLaskuri(1);
      setText('Arvaa numero 1-100 väliltä');
      setNumero(Math.floor(Math.random() * 100) + 1);
      setArvaus(0);
    } else if (arvaus <= numero) {
      setText('Liian pieni arvaus.')
      setLaskuri(laskuri + 1);
    } else if (arvaus >= numero) {
      setText('Liian suuri arvaus.')
      setLaskuri(laskuri + 1);
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
