import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
//import { SvgUri, Svg, SvgAst } from 'react-native-svg';
import Image from '../../assets/square.svg'
import Kupa from '../../assets/kupa.svg'
import Kupa2 from '../../assets/kupapas.svg'
import NumberID from '../Numbers/Number';
import Avatar from '../Avatar/Avatar';


const Info = ({name, email}) => {
 return (
    <View style={{width: '33%'}}>
    <Text numberOfLines={1} ellipsizeMode="tail"  style={styles.name}>{name}</Text>
    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name2}>{email}</Text>
</View>
 )
}


const Card = (props) => {
  return (
    <TouchableOpacity onPress={() => props.press(props.data.name, props.data.email, props.index)} style={[styles.cardContainer, {  backgroundColor: props.active ? '#FEEBC3' : '#f8f5f5'}]}>  
        <Image width={'100%'} height={100} style={{position: 'absolute'}} />
    <View style={styles.cardContent}>
        <NumberID active={props.active} num={props.index +1} /> 
        <Avatar active={props.active}  source={props.data.picture.thumbnail} />
        <Info 
        name={props.data.name.first + " " + props.data.name.last}
        email={props.data.email}  />
        {
            props.active ? <Kupa width={55} height={55}  /> : <Kupa2 width={55} height={55}  />
        }
    </View>

    
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    cardContainer: {
        width: '100%',
        height: 100,      
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 20,
        shadowColor: "#000",
  
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
overflow: 'hidden'
    },

    cardContent: {
        width: '92%',
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },

    name: {
        color: 'black',
        fontSize: 18,

    },
    name2: {
      
        fontSize: 15,
        
    }
})