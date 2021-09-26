
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity} from 'react-native';
//import { Button} from 'react-native-paper';
import { colors} from './colors';
import { sizes} from './sizes';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';


const Banco = () => { 

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [sexo, setSexo] = useState("Feminino")
  const [lim, setLim] = useState(0)
  const [aluno, setAluno] = useState(false)
  
  
  const gerarConta = ()  => {
       if (nome && idade && lim > 0) {
         let est = (aluno)?"Online" : "Offline"
         alert ("Acesso à Conta \n nome: " +nome+ 
                "\n idade" +idade+ 
                "\n sexo" +sexo+ 
                "\n limite" +lim+ 
                "\n aluno" +est)
        } else {
           alert("Coloque Novamente as Informações")
         }
       }
  
  const barraReset = () =>{
        setNome("");
        setIdade("");
        setSexo("");
        setLim("");
        setAluno("");
     }
  

return (

    <View style={styles.container}>
      <Text style= {styles.text}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Nome Completo"
        />
   
     <Text style= {styles.text}>Idade:</Text>
     <TextInput
        style={styles.input}
        onChangeText={setIdade}
        value={idade}
        placeholder="coloque sua Idade"
        keyboardType="numeric"
        />  

     <Text style= {styles.text}>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={setSexo}>
       <Picker.Item label="Feminino" value="Masculino"/>
       <Picker.Item label="Masculino" value="Feminino"/>   
     </Picker>  

     <Text style= {styles.text}>Ajuste de Limite: {lim}</Text>
      <View >
       <Slider
        value={lim}
        onValueChange={setLim}
        minimumValue={0}
        maximumValue={5000}
        minimumTrackTintColor= {colors.azul}
        maximumTrackTintColor= {colors.roxo}
/>  
</View>
    <Text style= {styles.text}>Aluno:</Text>
     <Switch style={styles.switch}
     value={aluno}
     onValueChange={setAluno}/>
  
   <TouchableOpacity
    texto="Acessar Conta"
    onPress={gerarConta}
    style={styles.button}
    ><Text style= {styles.text} > Acessar Conta</Text>
     </TouchableOpacity>
 
   <TouchableOpacity
    texto="Resertar"
    onPress={barraReset}
    style={styles.button}
    ><Text style= {styles.text} >Resertar</Text>
     </TouchableOpacity>
        </View>
)};


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#c78ff2",
    alignItems: 'center',
    justifyContent: 'center',
    }, 
    input: {
    height:sizes.big,
    margin: sizes.small,
    borderWidth: 1,
    padding: sizes.big,
    },
    slider:{
    flex:1,
    width: sizes.small,
    height: sizes.small
    }, 
    button:{
    alignItems:"left",
    backgroundColor: "#810691",
    padding: 15,
    width: 200,
    height: 40
    },
    text:{
    fontSize:20
    }
})
export default Banco;

