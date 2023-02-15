import DeviceInfo from 'react-native-device-info';
import {Platform, StatusBar} from 'react-native';

export const deviceHasNotch = DeviceInfo.hasNotch();
export const PADDING_TOP = deviceHasNotch ? 0 : StatusBar.currentHeight;
export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
