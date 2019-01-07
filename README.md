# react-native-svg-iconfont

## 安装
* [npm](https://www.npmjs.com/#getting-started): `npm install react-native-svg-iconfont --save`
* [Yarn](https://yarnpkg.com/): `yarn add react-native-svg-iconfont`


## link

* 此组件依赖于[react-native-svg](https://github.com/react-native-community/react-native-svg)，需要安装 react-native-svg, 
` 运行 yarn add  react-native-svg,
  运行react-native link react-native-svg`

## 用法
[阿里图标库](https://www.iconfont.cn/) `下载SVG格式的图标，复制svg路径保存在js文件中`
例子 [`example/path.js`](./example/path.js)
svg文件也可以让UI提供自定义图标

```jsx
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
    
    

```

## 属性
 名字 | 默认值  | 类型 |描述
 ----- |  ------- | ------- |-----
 size | 40 | number |图标大小
 path | undefined | array |svg路径 是一个数组 必填
 fill | ['#039FFC'] | array |路径颜色 如果多个颜色与svg路径一一对应
 style | undefined | object | style
 viewBox |'0 0 1024 1024' | string | 画板大小默认为1024*1024 请确保此值保持一致，否则会出现图标缺失或大小不一的情况
 
 ## License
 * [MIT](LICENSE)
 
 ## 如有问题加群:397885169
