import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView, PermissionsAndroid
} from 'react-native';
import * as iconPath from './path'
import SvgIcon from 'react-native-svg-iconfont'
export default class Example extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={{height: 44, marginTop: 44, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Test</Text>
          <SvgIcon path={iconPath.weibo} fill={['#FFFFFF', '#511017', '##F43B51', '##4F3636', '#FFFFFF', '#FFFFFF', '#81DB61', '#16380A']}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
