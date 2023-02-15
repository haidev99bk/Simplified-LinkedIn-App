import {View, Text, Image} from 'react-native';
import React from 'react';
import AvatarIcon from '../../atoms/AvatarIcon';
import styles from './styles';
import Icon from '../../atoms/Icon';

export default function ArticleCard(props) {
  const {user, article} = props;
  console.log('props ==> ', props);
  var dateAr = article.publicationDate.split('-');
  var newDate = dateAr[1] + '-' + dateAr[2] + '-' + dateAr[0].slice(-2);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.avatarContainer}>
          <AvatarIcon source={{uri: user.avatar}} rounded={false} size={30} />
        </View>
        <View style={styles.userInfoContainer}>
          <Text>{user.name}</Text>
          <Text>{newDate}</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon family="Entypo" name="dots-three-vertical" />
        </View>
      </View>
      <View style={styles.contentView}>
        <Text>{article.description}</Text>
        <View style={styles.imageAndTitleView}>
          <Image
            source={{uri: article.thumbnailImage}}
            style={styles.thumbnailImage}
          />
          <Text style={styles.articleTitle}>{article.title}</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View></View>
      </View>
    </View>
  );
}
