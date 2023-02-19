import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import AvatarIcon from '../../atoms/AvatarIcon';
import fontWeight from '../../../styles/fontWeight';
import {typography} from '../../../styles/typography';

const UserCard = props => {
  const {name, age, avatar, address, email, onPress, testID} = props;

  return (
    <TouchableOpacity
      testID={testID}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.avatarContainer}>
        <AvatarIcon source={{uri: avatar}} size={60} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[fontWeight.bold, typography.header1]}>{name}</Text>
        <Text style={[fontWeight.light, typography.typography]}>
          {'Age: ' + age}
        </Text>
        <Text style={[fontWeight.light, typography.typography]}>
          {'Address: ' + address}
        </Text>
        <Text style={[fontWeight.light, typography.typography]}>
          {'Email: ' + email}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(UserCard);
