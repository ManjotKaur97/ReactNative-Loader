import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationValue: new Animated.Value(2),
      animationValue2: new Animated.Value(2),
      animationValue3: new Animated.Value(2),
    };
  }
  startScaleAnimation = () => {
    Animated.loop(
      Animated.parallel([
        //circle 1
        Animated.sequence([
            Animated.timing(this.state.animationValue, {
                toValue: 3,
                duration:200,
                // timing: 1200,
                useNativeDriver: true,
              }),
              Animated.timing(this.state.animationValue, {
                toValue: 2,
                duration: 200,
    
                useNativeDriver: true,
              })

        ]),
        // circle 2
        Animated.sequence([
            Animated.timing(this.state.animationValue2, {
                toValue: 1,
                // timing: 1200,
                duration: 200,
                useNativeDriver: true,
              }),
              Animated.timing(this.state.animationValue2, {
                toValue: 2,
                // duration: 1200,
                duration: 200,
                useNativeDriver: true,
              })

        ]),
        // circle 3
        Animated.sequence([
            Animated.timing(this.state.animationValue3, {
                toValue: 3,
                duration: 200,
                // timing: 1200,
                useNativeDriver: true,
              }),
              Animated.timing(this.state.animationValue3, {
                toValue: 2,
                // duration: 1200,
                duration: 200,
                useNativeDriver: true,
              })

        ]),
      ]),
      {iterations: 10},
    ).start();
  };
  componentDidMount() {
    this.startScaleAnimation();
  }
  render() {
    const animatedStyle = {
      transform: [
        {
          scale: this.state.animationValue,
        },
      ],
    };
    const animatedStyle2 = {
      transform: [
        {
          scale: this.state.animationValue2,
        },
      ],
    };
    const animatedStyle3 = {
      transform: [
        {
          scale: this.state.animationValue3,
        },
      ],
    };
    return (
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          backgroundColor: '#002A41',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
         
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Animated.View style={[styles.circle, animatedStyle]} />
          <Animated.View style={[styles.circle, animatedStyle2]} />
          <Animated.View style={[styles.circle, animatedStyle3]} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  circle: {
    width: 10,
    height: 10,
    backgroundColor: '#FFC626',
    borderRadius: 50,
  },
      text: {
        fontWeight: 'bold',
        fontSize: 30,
        color:'white'
    }
});
