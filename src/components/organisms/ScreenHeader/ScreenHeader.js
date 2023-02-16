import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from '../../atoms/Icon';

export default function ScreenHeader(props) {
  const {showBackButton = true, title, goBack} = props;

  return (
    <View
      style={[
        styles.container,
        {justifyContent: showBackButton ? 'space-between' : 'flex-start'},
      ]}>
      {showBackButton && (
        <TouchableOpacity onPress={goBack}>
          <Icon family="AntDesign" name="arrowleft" size={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
