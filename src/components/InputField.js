import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from '../styles';

export default function InputField(props) {
  const { value, onChangeText, title, placeholder = '' } = props;

  return (
    <View style={styles.input.container}>
      { title && <Text style={styles.input.title}>{ title }</Text> }
      <TextInput
        style={styles.input.inputField}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
