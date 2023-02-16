import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import AvatarIcon from '../../atoms/AvatarIcon';
import Icon from '../../atoms/Icon';

export default function ArticleHeaderBar(props) {
  const {name, avatar, publishDate} = props;
  return (
    <View style={styles.headerView}>
      <View style={styles.avatarContainer}>
        <AvatarIcon source={{uri: avatar}} rounded={false} size={30} />
      </View>
      <View style={styles.userInfoContainer}>
        <Text>{name}</Text>
        <Text>{publishDate}</Text>
      </View>
      <View style={styles.headerRight}>
        <Icon family="Entypo" name="dots-three-vertical" />
      </View>
    </View>
  );
}
