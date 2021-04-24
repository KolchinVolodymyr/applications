import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export const Item = ({ title, id, releaseYear }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Id:{id} {title}</Text>
        <Text style={styles.title}>Id:{id}</Text>
        <Text style={styles.releaseYear}>Release Year:{releaseYear}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});