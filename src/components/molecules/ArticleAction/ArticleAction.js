import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from '../../atoms/Icon';

export default function ArticleAction(props) {
  const {iconFamily, iconName, label, onPress} = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon family={iconFamily} name={iconName} size={16} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
