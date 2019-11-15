import React, { Component } from "react";
import { StyleSheet, View, Animated, Text, TouchableWithoutFeedback } from "react-native";

// import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  toggleOpen = () => {
    if (this._open) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 800,
      }).start();
    } else {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 800,
      }).start();
    }
    this._open = !this._open;
  };
  render() {
    const scaleInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30],
    });

    const bgStyle = {
      transform: [
        {
          scale: scaleInterpolate,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background, bgStyle]} >
       
        </Animated.View>

        <TouchableWithoutFeedback onPress={this.toggleOpen}>
          <View style={[styles.button, styles.pay]}>
        
            <Text style={styles.payText}>CLick Me</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: "#038cfc",
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 20,
     right: 20,
     left:20
    borderRadius: 30,
  },
  button: {
    width: 160,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "blue",
    shadowOpacity: .2,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 12,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    // right: 20,
  },
  other: {
    backgroundColor: "#FFF",
  },
  payText: {
    color: "#FFF",
  },
  pay: {
    backgroundColor: "#038cfc",
  },
  label: {
    color: "#FFF",
    position: "absolute",
    fontSize: 18,
    backgroundColor: "transparent",
  },
}); 