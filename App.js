/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Input,
  Animated,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Boxfill extends Component{
  render () {
    return (
      <View>
        <Text>box box box box</Text>
      </View>
    )
  }
}

class FadeInView extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    var position = this.state.fadeAnim;
    Animated.sequence([
      Animated.decay(position,{
        velocity: {
          x:20,
          y:40
        },
        deceleration: 0.997
      }),
      Animated.parallel([
        Animated.spring(position,{
          toValue:{x:0,y:0}
        }),
        Animated.timing(position,{
          toValue: 360
        }),
      ]),
    ]).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

type Props = {};
var Dimensions = require('Dimensions');
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.bb}>
        <View style={styles.container}>
          <Text>{Dimensions.get('window').width}</Text>
        </View>
        <View style={styles.container}>
          <Boxfill />
          <FadeInView>
          <Text>路上看见对方</Text>
        </FadeInView>
        </View>
        
        <View style={styles.container}>
          <Text>路上看见对方</Text>
          <TouchableOpacity accessible={true} accessibilityLabel={'me me me'} >
            <View>
              <Text>press me!</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text>路上看见对方</Text>
          <Text></Text>
        </View>
        <View style={styles.container}>
          <Text>路上看见对方</Text>
          <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bb:{
    position: 'relative',
    width: '100%',
    height: '100%',
    flexDirection: "column",
    justifyContent:"center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
