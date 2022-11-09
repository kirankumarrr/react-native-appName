import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Text>Couter Count  : {counter}</Text>
            <Button
                onPress={() => {
                    setCounter((counter) => counter + 1)
                }}
                title="Increase" />
            <Button
                onPress={() => {
                    setCounter((counter) => counter - 1)
                }}
                title="Decrease" />
        </View>
    )
}

const style = StyleSheet.create({});

export default CounterScreen