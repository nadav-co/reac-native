import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Dimensions } from 'react-native';
import PostOne from '../components/PostOne';
import PostTwo from '../components/PostTwo';

const win = Dimensions.get('window');

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PostOne></PostOne>
      <PostTwo></PostTwo>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
