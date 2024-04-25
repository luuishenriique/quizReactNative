import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustonBotao from '../Components/CustonBotao';
import { LinearGradient } from "expo-linear-gradient";

const ConhecimentoGeralScreen = () => {
  const navigation = useNavigation()
  const [perguntas, setPerguntas] = useState([
    {
      pergunta: "Qual é a capital do Brasil?",
      opcoes: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
      respostas: "Brasília"
    },
    {
      pergunta: "Quem escreveu 'Dom Quixote'?",
      opcoes: ["Miguel de Cervantes", "William Shakespeare", "Charles Dickens", "Fyodor Dostoevsky"],
      respostas: "Miguel de Cervantes"
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      opcoes: ["Júpiter", "Terra", "Marte", "Vênus"],
      respostas : "Júpiter"
    },
    {
      pergunta: "Quem pintou a 'Mona Lisa'?",
      opcoes: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      respostas: "Leonardo da Vinci"
    },
    {
      pergunta: "Qual é a moeda oficial do Japão?",
      opcoes: ["Dólar", "Libra", "Iene", "Euro"],
      respostas: "Iene"
    },
    {
      pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
      opcoes: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John F. Kennedy"],
      respostas: "George Washington"
    },
    {
      pergunta: "Qual é o maior oceano do mundo?",
      opcoes: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
      respostas: "Oceano Pacífico"
    },
    {
      pergunta: "Quem descobriu a penicilina?",
      opcoes: ["Louis Pasteur", "Marie Curie", "Alexander Fleming", "Albert Einstein"],
      respostas: "Alexander Fleming"
    },
    {
      pergunta: "Em que ano ocorreu a Revolução Francesa?",
      opcoes: ["1776", "1789", "1812", "1848"],
      respostas: "1789"
    },
    {
      pergunta: "Qual é o símbolo químico do ouro?",
      opcoes: ["O", "Au", "Ag", "Fe"],
      respostas: "Au"
    },{
      pergunta: "Qual é a capital da França?",
      opcoes: ["Londres", "Berlim", "Madrid", "Paris"],
      respostas: "Paris"
    },
    {
      pergunta: "Quem foi o primeiro homem a pisar na lua?",
      opcoes: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
      respostas: "Neil Armstrong"
    },
    {
      pergunta: "Qual é o segundo maior país do mundo em área territorial?",
      opcoes: ["Canadá", "Estados Unidos", "China", "Brasil"],
      respostas: "Canadá"
    },
    {
      pergunta: "Quem é conhecido como o 'pai da psicanálise'?",
      opcoes: ["Carl Jung", "Sigmund Freud", "Ivan Pavlov", "B.F. Skinner"],
      respostas: "Sigmund Freud"
    },
    {
      pergunta: "Qual é o maior deserto do mundo?",
      opcoes: ["Deserto do Saara", "Deserto de Gobi", "Deserto da Arábia", "Deserto do Atacama"],
      respostas: "Deserto do Saara"
    },
    {
      pergunta: "Quem pintou 'A Noite Estrelada'?",
      opcoes: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
      respostas: "Vincent van Gogh"
    },
    {
      pergunta: "Qual é o país mais populoso do mundo?",
      opcoes: ["Índia", "Estados Unidos", "China", "Rússia"],
      respostas: "China"
    },
    {
      pergunta: "Quem é o autor de 'O Pequeno Príncipe'?",
      opcoes: ["Antoine de Saint-Exupéry", "J.K. Rowling", "Harper Lee", "F. Scott Fitzgerald"],
      respostas: "Antoine de Saint-Exupéry"
    },
    {
      pergunta: "Qual é o maior rio do mundo?",
      opcoes: ["Rio Amazonas", "Rio Nilo", "Rio Mississipi", "Rio Yangtze"],
      respostas: "Rio Amazonas"
    },
    {
      pergunta: "Qual é o estado brasileiro com maior número de habitantes?",
      opcoes: ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia"],
      respostas: "São Paulo"
    }
  ]);
  const [indexPerguntas, setIndexPerguntas] = useState(0);
  const [pontos, setPontos] = useState(0);

  const proximaPergunta = (respostaSelecionada) => {
    if (respostaSelecionada === perguntas[indexPerguntas].respostas) {
      setPontos(pontos + 1);
    }else{
        alert('Resposta errada')
    }

   
    const proxima = indexPerguntas + 1;
    if (proxima < perguntas.length) {
      setIndexPerguntas(proxima);
    }else{
        alert('Parabéns, essa é sua pontuação: ' + pontos + '\n Fim do Quiz');
        navigation.navigate('Home')
    }
  };

  return (
      <LinearGradient        
      colors={['#7F00FF', '#E100FF']} 
      style={styles.linear}
      >

        <View style={styles.tela}>
          <Text style={styles.H1}>{perguntas[indexPerguntas].pergunta}</Text>
          {perguntas[indexPerguntas].opcoes.map((resposta, index)=> (
          
          <CustonBotao
          onPress={() => proximaPergunta(resposta)}
          title={resposta}
          key={index}
          />
          ))}
          
          <Text style={styles.H1}>Pontuação: {pontos}</Text>
        </View>
    </LinearGradient>

  );
};

export default ConhecimentoGeralScreen;

const styles = StyleSheet.create({
  linear:{
    flex: 1,

  },

  tela:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  H1:{
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10
}

  
});
