import React, { Component } from "react";
import { StyleSheet, View, Animated, Text, TouchableWithoutFeedback } from "react-native";

// import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default class animations extends Component {
  state = {

  };
  toggleOpen = () => {
 
   
  
  };
  render() {
    
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background, backgroundStyle]} >
       
        </Animated.View>

        <TouchableWithoutFeedback onPress={this.toggleOpen}>
          <View style={styles.button}>
             <Text style={styles.text}>Click Me</Text>
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
    borderRadius: 30,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor:'#038cfc',
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#333",
    shadowOpacity: 0.8,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  text: {
    color: "#FFF",
  },
 
}); 