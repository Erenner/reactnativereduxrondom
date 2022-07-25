import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const NumberID = ({num, active}) => {
    console.log(active)
  return (
    <View style={[styles.numContent, {backgroundColor: active ? '#F6BB4A' : '#e0e0e0'}]}>
      <Text style={styles.numText}>{num}</Text>
    </View>
  )
}

export default NumberID

const styles = StyleSheet.create({
    numContent: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
       // backgroundColor: '#F6BB4A'
    },
    numText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'
    }
})