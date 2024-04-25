import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {LinearGradient } from 'expo-linear-gradient';
import CustonBotao from '../Components/CustonBotao'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (

        <LinearGradient 
         colors={['#7F00FF', '#E100FF']} 
         style={styles.linear}
         >
            <View style={styles.Tela}>

                <Text style={styles.H1}>
                    Quiz Conhecimento Gerais
                </Text>


                <CustonBotao 
                onPress={() => {navigation.navigate("Conhecimentos Gerais")}}
                title={'Comece o Quiz'}>
                </CustonBotao>
                
                
            </View>


        </LinearGradient>
             

       


    )
}

export default HomeScreen

const styles = StyleSheet.create({

    linear:{
        flex: 1
    },

    Tela:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    H1:{
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    },

    Negrito:{
        fontWeight: 'bold'
    },

    Botao:{

        borderRadius: 8,
        backgroundColor: '#778899',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 50
    },
    TextoBotao:{
        fontSize: 15,
        color: 'white'
    }

})
