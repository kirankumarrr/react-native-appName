import React from 'react'
import {Text, StyleSheet} from 'react-native'

 const ComponentsScreen = () => {
    return (
        <Text style={styles.textStyle}>
            This is new  ComponentsScreen
        </Text>
    )
 }

//  JSS

const styles = StyleSheet.create({
     textStyle : {
         fontSize: 24
     }
})

export default ComponentsScreen