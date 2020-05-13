import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as F from '../src/index.tsx';

console.log(F);

// const formConfig: FormCon;

export default function App() {
  const [value, setValue] = useState('hello world');

  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
