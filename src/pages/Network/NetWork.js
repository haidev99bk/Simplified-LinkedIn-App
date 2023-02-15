import {View, Text, SectionList} from 'react-native';
import React, {useContext, useEffect, useMemo, useState} from 'react';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import UserContext from '../../contexts/UserContext';
import {getFollowers} from '../../service/userSevices';
import UserCard from '../../components/molecules/UserCard';
import styles from './style';
import {MainTabPages} from '../../constants/common';

const NetWork = props => {
  const {navigation} = props;
  const user = useContext(UserContext);
  const [followers, setFollowers] = useState([]);
  const data = useMemo(() => {
    return [
      {
        title: 'Me',
        data: [user],
      },
      {
        title: 'My followers',
        data: followers,
      },
    ];
  }, [user, followers]);

  const onPressCard = userId => {
    if (userId === user.userId) {
      navigation.navigate(MainTabPages.MyArticles, {userId});
    } else {
      navigation.navigate(MainTabPages.FollowerArticles, {userId});
    }
  };

  useEffect(() => {
    const res = getFollowers();
    setFollowers(res);
  }, [user]);

  const renderItem = ({item}) => {
    return (
      <UserCard
        name={item.name}
        avatar={item.avatar}
        email={item.email}
        address={item.address}
        age={item.age}
        onPress={() => onPressCard(item.userId)}
      />
    );
  };

  const renderHeaderSection = ({section: {title}}) => {
    return <Text style={styles.sectionTitle}>{title}</Text>;
  };

  return (
    <DefaultLayout>
      <View style={styles.container}>
        <SectionList
          sections={data}
          renderItem={renderItem}
          keyExtractor={item => item.userId}
          renderSectionHeader={renderHeaderSection}
        />
      </View>
    </DefaultLayout>
  );
};

export default NetWork;
