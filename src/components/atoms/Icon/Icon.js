import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function Icon(props) {
  const {name, size, color, family} = props;

  switch (family) {
    case 'Entypo': {
      return <Entypo name={name} size={size} color={color} />;
    }
    case 'AntDesign': {
      return <AntDesign name={name} size={size} color={color} />;
    }
    case 'Foundation': {
      return <Foundation name={name} size={size} color={color} />;
    }
    case 'EvilIcons': {
      return <EvilIcons name={name} size={size} color={color} />;
    }
    default: {
      return <FontAwesomeIcon name={name} size={size} color={color} />;
    }
  }
}
