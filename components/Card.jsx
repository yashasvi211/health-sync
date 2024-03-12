import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Cards() {
  return (
    <View style={styles.card}>
      <Image
        source={require('./assets/asasa.jpeg')} // Use require for local images with a relative path
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bro</Text>
        <Text style={styles.text}>I make prot</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
 
  },
  image: {
   
  },
  textContainer: {
 
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cards;
