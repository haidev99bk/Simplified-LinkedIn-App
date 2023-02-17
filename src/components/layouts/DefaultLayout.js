import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import color from '../../styles/colors';
import {deviceHasNotch} from '../../utils/common';
import ScreenHeader from '../organisms/ScreenHeader';

export default function DefaultLayout(props) {
  const {children, style, showBackButton, title, goBack, navigation} = props;
  const paddingTopStyle = {
    paddingTop: deviceHasNotch ? 42 : StatusBar.currentHeight,
  };

  const handleBack = () => {
    if (goBack) {
      goBack();
      return;
    }
    navigation.goBack();
  };

  return (
    <View style={[styles.container, paddingTopStyle, style]}>
      <ScreenHeader
        showBackButton={showBackButton}
        title={title}
        goBack={handleBack}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.kindaWhite,
  },
});
