import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import color from '../../styles/colors';
import {deviceHasNotch} from '../../utils/common';

export default function DefaultLayout(props) {
  const {children, style} = props;
  const paddingTopStyle = deviceHasNotch ? 0 : StatusBar.currentHeight;

  return (
    <View style={[styles.container, paddingTopStyle, style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.kindaWhite,
  },
});
