import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DemoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Demo Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DemoScreen;