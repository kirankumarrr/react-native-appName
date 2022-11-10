import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {

    const value = useContext(BlogContext);

    return (
        <View>
            <Text>IndexScreen -- {value}</Text>
        </View>
    )
}

const style = StyleSheet.create({});

export default IndexScreen
