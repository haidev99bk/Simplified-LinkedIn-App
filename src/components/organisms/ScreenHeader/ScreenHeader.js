import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from '../../atoms/Icon';
import color from '../../../styles/colors';

export default function ScreenHeader(props) {
  const {showBackButton = true, title, goBack} = props;

  const justifyStyle = {
    justifyContent: showBackButton ? 'space-between' : 'flex-start',
  };

  return (
    <View style={[styles.container, justifyStyle]}>
      {showBackButton && (
        <TouchableOpacity onPress={goBack}>
          <Icon
            family="AntDesign"
            name="arrowleft"
            size={30}
            color={color.mainBlue}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
