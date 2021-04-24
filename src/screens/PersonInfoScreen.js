import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';

export function PersonInfoScreen ({navigation}){


    return (
      <View style={styles.container}>
        <Text> PersonInfoScreen ///a</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('PersonListScreen')}
        />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  cell: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellTitle: {
    fontSize: 13,
    color: '#b0b0b0',
  },
  cellValue: {
    marginTop: 10,
    fontSize: 16,
    color: '#2e2e2e',
  },
});
