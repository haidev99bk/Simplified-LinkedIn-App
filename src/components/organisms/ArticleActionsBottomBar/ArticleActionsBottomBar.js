import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import ArticleAction from '../../molecules/ArticleAction';
import Icon from '../../atoms/Icon';
import color from '../../../styles/colors';

export default function ArticleActionsBottomBar(props) {
  const {actions, comments, likes, hasLiked, articleId} = props;

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
            let iconFamily = action.iconFamily;
            let iconName = action.iconName;
            let iconColor;

            if (action.label === 'Like' && hasLiked) {
              iconFamily = 'AntDesign';
              iconName = 'like1';
              iconColor = color.mainBlue;
            }
            return (
              <ArticleAction
                key={action.label + index}
                iconFamily={iconFamily}
                iconName={iconName}
                iconColor={iconColor && iconColor}
                label={action.label}
                onPress={() => {
                  action?.onPress && action.onPress(articleId);
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
