import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export const Item = ({ name, id, email,navigation  }) => (
    <View style={styles.item}  button >
        <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        {/*<Button*/}
        {/*    title="Go to Profile"*/}
        {/*    onPress={() => navigation.navigate('Profile')}*/}
        {/*/>*/}
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
        fontSize: 22,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});