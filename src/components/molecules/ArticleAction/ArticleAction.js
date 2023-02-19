import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from '../../atoms/Icon';

const ArticleAction = props => {
  const {iconFamily, iconName, iconColor, label, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            family={iconFamily}
            name={iconName}
            size={16}
            color={iconColor}
          />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ArticleAction);
