import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import ArticleActionsBottomBar from '../../organisms/ArticleActionsBottomBar';
import ArticleHeaderBar from '../../organisms/ArticleHeaderBar';

export default function ArticleCard(props) {
  const {user, article} = props;
  var dateAr = article.publicationDate.split('-');
  var newDate = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0].slice(-2);

  const handleLikeAction = () => {};

  const cardActions = [
    {
      iconFamily: 'AntDesign',
      iconName: 'like2',
      label: 'Like',
      onPress: handleLikeAction,
    },
    {
      iconFamily: 'Foundation',
      iconName: 'loop',
      label: 'Repost',
    },
    {
      iconFamily: 'FontAwesome',
      iconName: 'comment',
      label: 'Comment',
    },
    {
      iconFamily: 'Feather',
      iconName: 'send',
      label: 'Send',
    },
  ];

  return (
    <View style={styles.container}>
      <ArticleHeaderBar
        avatar={user.avatar}
        name={user.name}
        publishDate={newDate}
      />
      <View style={styles.contentView}>
        <Text style={styles.description}>{article.description}</Text>
        <View style={styles.imageAndTitleView}>
          <Image
            source={{uri: article.thumbnailImage}}
            style={styles.thumbnailImage}
          />
          <Text style={styles.articleTitle}>{article.title}</Text>
        </View>
      </View>
      <ArticleActionsBottomBar
        actions={cardActions}
        likes={article.likes}
        comments={article.comments}
      />
    </View>
  );
}
