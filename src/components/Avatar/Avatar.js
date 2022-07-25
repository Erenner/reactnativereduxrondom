import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import profileImage from '../../assets/primage.jpg';



const Avatar = (props) => {
  return (
    <View style={styles.avatarContetn}>
     <Image source={{uri: props.source}} style={{width: 60, height: 60}} />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatarContetn: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
        backgroundColor: '#F6BB4A',
        overflow: 'hidden',
        borderColor: '#F6BB4A',
        borderWidth: 2,
       borderStyle: 'dotted'
    },

})