import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default () => {
  return (
    <MapView style={styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
