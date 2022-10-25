import React from 'react';
import {StyleSheet, View} from 'react-native';

const LayoutContainer = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 5,
    margin: 5,
  },
});

export default LayoutContainer;
