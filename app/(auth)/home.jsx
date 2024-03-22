import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import Cards from '../../components/Card';
import SearchBar from '../../components/SearchBar';

const onSearch = (text) => {
  alert("Hello World");
};

const Home = () => {
  const { user } = useUser();
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar/>
      <Cards />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
     backgroundColor:'gray',
  },
   
});

export default Home;
