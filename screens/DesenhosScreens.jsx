import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { reactQuestions } from './Questions';
import { Pressable } from 'react-native-web';

export default function DesenhosScreen() {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // Estado para armazenar a pontuação
  const [quizCompleted, setQuizCompleted] = useState(false); // Estado para verificar se o quiz foi concluído

  const handleAnswer = (selectedOption) => {
    if (selectedOption === reactQuestions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswer(true);
      setScore(score + 1); // Incrementa a pontuação se a resposta estiver correta
    } else {
      setCorrectAnswer(false);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1) {
      setQuizCompleted(true); // Define quizCompleted como true quando todas as perguntas forem respondidas
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCorrectAnswer(null); // Reseta o estado da resposta correta
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{reactQuestions[currentQuestionIndex].question}</Text>
      {reactQuestions[currentQuestionIndex].options.map((option, index) => (
        <View key={index}>
          <Pressable
            style={{
              backgroundColor:
                correctAnswer !== null && option === reactQuestions[currentQuestionIndex].correctAnswer
                  ? 'green' // Resposta correta
                  : correctAnswer !== null && option !== reactQuestions[currentQuestionIndex].correctAnswer
                  ? 'red' // Resposta errada
                  : 'blue', // Cor padrão
            }}
            onPress={() => handleAnswer(option)}>
            <Text style={styles.options}>{option}</Text>
          </Pressable>
        </View>
      ))}
      {quizCompleted ? (
        <Text style={styles.score}>Quiz completo! Sua pontuação final é: {score}</Text>
      ) : (
        <View>
          <Text style={styles.score}>Pontuação: {score} de {reactQuestions.length}</Text>
          <Pressable style={styles.buttonNext} onPress={handleNext}>
            <Text style={styles.text}>Next</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    justifyContent: 'center',
    marginBottom: 40,
  },
  options: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 100,
    marginVertical: 20,
    color: '#fff',
  },
  buttonNext: {
    backgroundColor: 'pink',
    borderRadius: 5,
    top: 60,
    height: 40,
    width: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  score: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },
});
