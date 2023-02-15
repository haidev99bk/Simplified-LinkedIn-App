import {TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function AvatarIcon(props) {
  const {source, isPressable, onPress, size, rounded = true, style} = props;

  const handlePress = () => {
    if (!isPressable) {
      return;
    }
    if (onPress) {
      onPress;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image
        source={source}
        style={[
          styles.avatar,
          size && {width: size, height: size},
          rounded && {borderRadius: 1000},
          style,
        ]}
      />
    </TouchableWithoutFeedback>
  );
}
