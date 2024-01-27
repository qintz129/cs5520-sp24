import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; 
import colors from './colors';

export default function CustomButton({ title, onPress, disabled=false}) {
  const isResetTitle = title === 'Reset' || title === 'I am done';

  return (
    <TouchableOpacity onPress={onPress} style={styles.button} disabled={disabled}>
      <Text style={[styles.text, disabled ? styles.disabledText : (isResetTitle ? styles.redText : styles.blueText)]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { 
    marginTop: 10, 
    marginBottom: 10, 
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  redText: {
    color: colors.red,
  },
  blueText: {
    color: colors.blue,
  }, 
  disabledText: {
    color: colors.white,
  }
});