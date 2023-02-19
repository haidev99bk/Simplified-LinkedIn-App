import {View, Text, Image} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import ArticleActionsBottomBar from '../../organisms/ArticleActionsBottomBar';
import ArticleHeaderBar from '../../organisms/ArticleHeaderBar';

const ArticleCard = props => {
  const {user, article, handleLike, hasLiked} = props;
  var dateAr = article.publicationDate.split('-');
  var newDate = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0].slice(-2);

  const handleLikeAction = useCallback(
    articleId => {
      if (handleLike) {
        handleLike(articleId);
      }
    },
    [handleLike],
  );

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

  const likesNumber = hasLiked ? article.likes + 1 : article.likes;

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
        articleId={article.articleId}
        actions={cardActions}
        likes={likesNumber}
        comments={article.comments}
        hasLiked={hasLiked}
      />
    </View>
  );
};

export default React.memo(ArticleCard);
