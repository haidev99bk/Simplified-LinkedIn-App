import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Icon(props) {
  const {name, size, color, family} = props;

  switch (family) {
    case 'Entypo': {
      return <Entypo name={name} size={size} color={color} />;
    }
    default: {
      return <FontAwesomeIcon name={name} size={size} color={color} />;
    }
  }
}
