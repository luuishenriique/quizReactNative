import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustonBotao = ({onPress, title}) => {
  return (
    <TouchableOpacity
     style={styles.butao}
     onPress={onPress}
     
     >

        <Text style={styles.buttonText}>{title}</Text>

    </TouchableOpacity>
  )
}

export default CustonBotao;

const styles = StyleSheet.create({
    butao: {
        backgroundColor: '#e5b100',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        width: '50%',
        marginBottom: 10,
        alignSelf: 'center'
    },
    
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
      },
})