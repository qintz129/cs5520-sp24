import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; 
import colors from '../colors';

// CustomButton component to achieve the button for all screens 
// Customized the color shown for different button types: normal, reset/cancel, disabled
export default function CustomButton({ title, onPress, disabled=false}) {
  const isResetTitle = title === 'Reset' || title === 'Cancel';

  return (
    <TouchableOpacity onPress={onPress} style={styles.button} disabled={disabled}>
      <Text style={[styles.text, disabled ? styles.disabledText : (isResetTitle ? styles.resetText : styles.normalText)]}>
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
  resetText: {
    color: colors.resetButton,
  },
  normalText: {
    color: colors.normal,
  }, 
  disabledText: {
    color: colors.disabledButton,
  }
});