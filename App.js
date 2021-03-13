import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default class App extends React.Component {
  constructor(props) {   
    super(props)
    
    this.state={
      animationValue : new Animated.Value(0),
      animationValue2 : new Animated.Value(0),
      animationValue3 : new Animated.Value(0),
      txt: 'Check Me!'
    }
    this.fadeAnimation = new Animated.Value(1)
    this.shakeAnimation = new Animated.Value(0);
  }

  toggleAnimation = () => {
 
    Animated.timing(this.state.animationValue, {
      toValue: 105,
      duration: 800,
      useNativeDriver: true,      
    }).start()

    Animated.timing(this.state.animationValue2, {
      toValue: 105,
      duration: 1000,
      useNativeDriver: true,      
    }).start()

    Animated.timing(this.fadeAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,      
    }).start(()=>{
      this.setState({txt: 'Checked!'})
      Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 1300,
      useNativeDriver: true,      
    }).start()
    })

    Animated.timing(this.shakeAnimation, {
      toValue: -200, 
      duration: 800, 
      useNativeDriver: true
    }).start()

    Animated.timing(this.state.animationValue3, {
      toValue: 105,
      duration: 1300,
      useNativeDriver: true,      
    }).start()

    
  }

  render() {
    return (
      <View style={{flex:1, flexDirection: 'column-reverse',backgroundColor:'white'}}>
        <View style={{alignItems:'center', justifyContent: 'center', marginBottom: 128}}>
          <Animated.View style={{width: 10,
    height: 10,
    backgroundColor: 'red', 
    position: 'absolute',
    borderRadius:200,
    transform: [ {scaleX: this.state.animationValue}, {scaleY: this.state.animationValue} ],
    zIndex: -1}}></Animated.View>
          <Animated.View style={{width: 10,
    height: 10,
    backgroundColor: 'orange', 
    position: 'absolute',
    borderRadius:200,
    transform: [ {scaleX: this.state.animationValue2}, {scaleY: this.state.animationValue2} ],
    zIndex: -1}}></Animated.View>
          <Animated.View style={{width: 10,
    height: 10,
    backgroundColor: 'red', 
    position: 'absolute',
    borderRadius:200,
    transform: [ {scaleX: this.state.animationValue3}, {scaleY: this.state.animationValue3} ],
    zIndex: -1}}></Animated.View>
            <Animated.Text 
            style={{ color: 'white', backgroundColor:'red', padding: 10, fontSize: 30, borderRadius: 5, opacity: this.fadeAnimation, transform: [{translateY: this.shakeAnimation}]}}
            onPress={this.toggleAnimation}>
            {this.state.txt}
            </Animated.Text>
          
          
        </View>
      </View>
    );
  }
}
