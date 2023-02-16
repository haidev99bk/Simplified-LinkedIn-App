import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import ArticleAction from '../../molecules/ArticleAction';
import Icon from '../../atoms/Icon';
import color from '../../../styles/colors';

export default function ArticleActionsBottomBar(props) {
  const {actions, comments, likes} = props;
  return (
    <View>
      <View style={styles.actionsInfo}>
        <View style={styles.likeInfoContainer}>
          <View style={styles.likeIcon}>
            <Icon family="AntDesign" name="like1" color={color.white} />
          </View>
          <Text style={styles.numberOfLikes}>{likes}</Text>
        </View>
        <View style={styles.commentInfoContainer}>
          <Text style={styles.numberOfLikes}>{comments + ' comments'}</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.actionsContainer}>
        <View style={styles.container}>
          {actions.map((action, index) => {
            return (
              <ArticleAction
                key={action.label + index}
                iconFamily={action.iconFamily}
                iconName={action.iconName}
                label={action.label}
                onPress={action.onPress}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
